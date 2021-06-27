import { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from "formidable";
import micro from "micro";
import { promises as fs } from "fs";

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
  switch (req.method) {
    case "GET":
      return getRecipes(req, res);
    case "POST":
      return postRecipes(req, res);
    default:
      res.json({ message: "Hello Everyone!" });
  }
};

export default micro(recipes);

const getRecipes = async (req: RecipeApiReq, res: NextApiResponse) => {
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

const postRecipes = async (req: RecipeApiReq, res: NextApiResponse) => {
  // const data: FormData = req.body;
  // console.log(req);
  const data = await new Promise(function (resolve, reject) {
    const form = new IncomingForm({
      keepExtensions: true,
      uploadDir: "./data",
    });

    form.parse(req, function (err, fields, files) {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });

  console.log(data.files);

  // const contents = await fs.readFile(data?.files?.nameOfTheInput.path, {
  //   encoding: "utf8",
  // });

  // console.log(await runMiddleware(req, res, uploadArray));

  // console.log(data.entries());
  //
  // console.log(multer);

  res.send("tset");
};

export const config = {
  api: {
    bodyParser: false,
  },
};
