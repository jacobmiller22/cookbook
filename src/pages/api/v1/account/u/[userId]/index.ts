import type { NextApiRequest, NextApiResponse } from "next";
import { HttpMethod } from "lib/http";
import { getAccountDetails } from "lib/member/server";

const UserAccountApi = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case HttpMethod.GET: {
      /**
       * Get account details
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

      const response = await getAccountDetails(userId);

      if (!response.success) {
        res.status(response.status).send(response.message);
        return;
      }

      res.status(response.status).json(response.data);
      return;
    }
    default:
      res.json({ message: "Hello Everyone!" });
      return;
  }
};

export default UserAccountApi;
