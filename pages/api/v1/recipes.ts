import { NextApiRequest, NextApiResponse } from "next";

// Extend the NextApiRequest to add our desired values on to the the query object
interface RecipeApiReq extends NextApiRequest {
  query: NextApiRequest["query"] & {
    ingredients?: string;
  };
}

/**
 *
 * the api/v1/recipes route will return all recipes that match the given parameters
 *
 * @param req
 * @param res
 */
const recipes = async (req: RecipeApiReq, res: NextApiResponse) => {
  // Verify valid client project

  // Check if caller is a authorized user.
  // If caller is a user. Log the api call in the users history

  // Get the list of recipes
  console.log(req.query);
  const { ingredients } = JSON.parse(req.query.ingredients);

  console.log("ingredients", ingredients);

  // Rest of the API logic
  res.json({ message: "Hello Everyone!" });
};

export default recipes;
