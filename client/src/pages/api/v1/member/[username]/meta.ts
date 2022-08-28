import { HttpMethod, ServiceResponse } from "lib/http";
import { __getMemberMetaByUsername } from "lib/member/server";
import type { NextApiRequest, NextApiResponse } from "next/types";

interface MemberApiReq extends NextApiRequest {
  query: NextApiRequest["query"] & {
    username?: string;
  };
  method: HttpMethod;
}

const MemberMetaApi = async (req: MemberApiReq, res: NextApiResponse) => {
  switch (req.method) {
    case HttpMethod.GET:
      if (!req.query.username) {
        res.status(400).send("username is required");
        return;
      }

      if (typeof req.query.username !== "string") {
        res.status(400).send("username must be a string");
        return;
      }

      const username = req.query.username as string;
      console.log("username", username);
      const response: ServiceResponse<any> = await __getMemberMetaByUsername(
        username
      );

      if (!response.success) {
        res.status(response.status).send(response.message);
        return;
      }

      res.status(response.status).json(response.data);
      return;
    default:
      res.json({ message: "Hello Everyone!" });
  }
};

export default MemberMetaApi;
