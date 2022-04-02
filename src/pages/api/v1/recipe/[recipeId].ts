import { HttpMethod, ServiceResponse } from "lib/http";
import { __getMemberByUsername } from "lib/member/server";
import { __getRecipeById } from "lib/recipe/server";
import type { NextApiRequest, NextApiResponse } from "next/types";

interface MemberApiReq extends NextApiRequest {
  query: NextApiRequest["query"] & {
    username?: string;
  };
  method: HttpMethod;
}

const RecipeApi = async (req: MemberApiReq, res: NextApiResponse) => {
  switch (req.method) {
    case HttpMethod.GET:
      console.log("GET");
      if (!req.query.recipeId) {
        res.status(400).send("recipeId is required");
        return;
      }

      if (typeof req.query.recipeId !== "string") {
        res.status(400).send("recipeId must be a string");
        return;
      }

      const recipeId = req.query.recipeId as string;

      const response = await __getRecipeById(recipeId);

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

export default RecipeApi;
