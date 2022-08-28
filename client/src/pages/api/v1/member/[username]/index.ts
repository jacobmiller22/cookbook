import { HttpMethod, ServiceResponse } from "lib/http";
import { __getMemberByUsername } from "lib/member/server";
import type { NextApiRequest, NextApiResponse } from "next/types";

interface MemberApiReq extends NextApiRequest {
  query: NextApiRequest["query"] & {
    username?: string;
  };
  method: HttpMethod;
}

const MemberApi = async (req: MemberApiReq, res: NextApiResponse) => {
  switch (req.method) {
    case HttpMethod.GET:
      console.log("GET");
      if (!req.query.username) {
        res.status(400).send("username is required");
        return;
      }

      if (typeof req.query.username !== "string") {
        res.status(400).send("username must be a string");
        return;
      }

      const username = req.query.username as string;
      // console.log("username", username);
      const response: ServiceResponse<any> = await __getMemberByUsername(
        username
      );
      // console.log(response);
      if (!response.success) {
        res.status(response.status).send(response.message);
        return;
      }

      const member = {
        username: response.data.username,
        name: response.data.name,
        image: response.data.image,
      };

      res.status(response.status).json(member);
      return;
    default:
      res.json({ message: "Hello Everyone!" });
  }
};

export default MemberApi;
