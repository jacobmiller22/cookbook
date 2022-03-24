import { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from "formidable";

import convert, { SUPPORTED_CONVERSIONS } from "utils/image/convert";
import { annotate } from "services/google/vision";
import { G_VISION_ANNOTATE_ALLOWED_FILE_TYPES } from "utils/google/consts";
import getType from "utils/image/type";
import _ from "lodash";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Extend the NextApiRequest to add our desired values on to the the query object
interface RecipeApiReq extends NextApiRequest {
  query: NextApiRequest["query"] & {
    ingredients?: string;
    name?: string;
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
 * @param req
 * @param res
 */
const RecipesAPI = async (req: RecipeApiReq, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      const response = await getRecipes(req, res);
      if (response.error) {
        res.status(500).send(response.error);
        return;
      }
      res.status(200).send(response.data);
      return;
    case "POST":
      return postRecipes(req, res);
    default:
      res.json({ message: "Hello Everyone!" });
  }
};

export default RecipesAPI;

// export default micro(connect(recipes));

/**
 * the api/v1/recipes GET route will return all recipes that match the given parameters
 * @param req
 * @param res
 */
const getRecipes = async (req: RecipeApiReq, res: NextApiResponse) => {
  const { ingredients: ingredientsJSON, name } = req.query;

  const ingredients: string[] = JSON.parse(ingredientsJSON);

  try {
    const recipes = await prisma.recipe.findMany({
      where: {
        name: {
          contains: name || "",
        },
        published: true,
        ingredients: {
          some: {
            name: {
              [_.isEmpty(ingredients) ? "notIn" : "in"]: ingredients,
            },
          },
        },
      },
    });

    return { data: recipes };
  } catch (err) {
    return { error: `Error: ${err.toString()}` };
  }
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
  //@ts-expect-error
  let path = data.files.file.path;

  // Get the file's mimetype
  const filetype = await getType(path);

  if (
    _.find(
      G_VISION_ANNOTATE_ALLOWED_FILE_TYPES,
      (mime) => mime === filetype.mime
    ) == null
  ) {
    // If the provided file does not comply with our expectations. Attempt to convert it to an accepted file type
    const targetMime = SUPPORTED_CONVERSIONS[filetype.mime];
    path = await convert({ from: filetype.mime, to: targetMime, path });
  }

  await annotate(path);
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
