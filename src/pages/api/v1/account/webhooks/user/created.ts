/**
 * Endpoint for userfront user created webhook
 */

import { DEFAULT_BIO } from "consts";
import { initAccount } from "lib/auth/server";
import {
  HttpMethod,
  HttpStatus,
  methodNotImplemented,
  ServiceResponse,
} from "lib/http";
import { getMemberById } from "lib/member";
import { WebhookAction } from "lib/userfront";
import type { NextApiRequest, NextApiResponse } from "next/types";

interface MemberApiReq extends NextApiRequest {
  query: NextApiRequest["query"] & {
    username?: string;
  };
  method: HttpMethod;
}

const UserCreatedWebhookApi = async (
  req: MemberApiReq,
  res: NextApiResponse
) => {
  switch (req.method) {
    case HttpMethod.POST: {
      /** Initialize user with prisma */

      // Verify webhook signature has hit correct endpoint and is authorized to make request
      const {
        action,
        model,
        record,
      }: { action: WebhookAction; model: "user"; record: any } = req.body;
      if (action !== WebhookAction.CREATE || model !== "user") {
        return res.status(HttpStatus.BAD_REQUEST).json({
          success: false,
          message: "Webhook action not 'create' or model not 'user'",
        });
      }

      if (!record || !record.userId) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          success: false,
          message: "Webhook record invalid",
        });
      }

      // Check if user exists, if not, then the webhook was created unintentionally
      const verifyMemberResponse = await getMemberById(record.userId);

      console.log("response", verifyMemberResponse);
      if (!verifyMemberResponse.success) {
        return res.status(verifyMemberResponse.status).json({
          success: false,
          message: verifyMemberResponse.message,
        });
      }

      // Initialize user with prisma

      const memberDetails = {
        id: record.userId,
        name: record.name,
        email: record.email,
        username: record.username,
        createdAt: record.createdAt,
        bio: DEFAULT_BIO,
      };

      console.log("memberDetails", memberDetails);

      const initAccountResponse = await initAccount(memberDetails);

      if (!initAccountResponse.success) {
        res.status(initAccountResponse.status).end();
        return;
      }

      // Send success response
      res.status(HttpStatus.ACCEPTED).end();
      return;
    }
    default:
      methodNotImplemented(res);
      return;
  }
};

export default UserCreatedWebhookApi;
