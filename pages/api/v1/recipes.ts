import { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from "formidable";
import micro from "micro";
import { promises as fs } from "fs";
import { heic2Jpeg } from "../../../utils/image/convert";
import { annotate } from "../../../services/google/vision";

// Extend the NextApiRequest to add our desired values on to the the query object
interface RecipeApiReq extends NextApiRequest {
  query: NextApiRequest["query"] & {
    ingredients?: string;
  };
}

interface RecipeData {
  fields: Object;
  files: {
    [file: string]: File;
  };
}

/**
 *
 *
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

/**
 * the api/v1/recipes GET route will return all recipes that match the given parameters
 * @param req
 * @param res
 */
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
  const data: RecipeData = await new Promise(function (resolve, reject) {
    const form = new IncomingForm({
      keepExtensions: true,
      uploadDir: "./data/uploads",
    });

    form.parse(req, function (err, fields, files) {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });

  // We have a reference our recipe data files.
  console.log(data.files.file);
  // Convert the file format into a format readable by Google Vison API
  const newpath = await heic2Jpeg(data.files.file.path);

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
