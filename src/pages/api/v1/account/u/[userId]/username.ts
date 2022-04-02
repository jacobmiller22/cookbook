import type { NextApiRequest, NextApiResponse } from "next";
import { HttpMethod, HttpStatus } from "lib/http";
import { __updateAccountUsername } from "lib/auth/server";

const AccountUsernameApi = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  switch (req.method) {
    case HttpMethod.PUT: {
      /**
       * Change account username
       */
      const userId = req.query.userId as string;

      if (!userId) {
        res.status(400).send("userId is required");
        return;
      }

      if (typeof userId !== "string") {
        res.status(400).send("userId must be a string");
        return;
      }

      const { username } = req.body;

      if (!username) {
        res.status(400).send("username is required");
        return;
      }

      if (typeof username !== "string") {
        res.status(400).send("username must be a string");
        return;
      }

      const response = await __updateAccountUsername(userId, username);

      if (!response.success) {
        res.status(response.status).send(response.message);
        return;
      }
      res.status(response.status).json(response.data);
      return;
    }
    default:
      res.status(HttpStatus.NOT_IMPLEMENTED).end();
      return;
  }
};

export default AccountUsernameApi;
