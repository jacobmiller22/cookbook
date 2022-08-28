import { HttpStatus, ServiceResponse } from "lib/http";
import { runQuery } from "../prisma";

export const __getRecipeById = async (
  recipeId: string
): Promise<ServiceResponse<any>> => {
  const query = {
    where: {
      id: recipeId,
    },
  };

  try {
    const data = await runQuery("recipes", "findUnique", query);

    return {
      success: true,
      status: HttpStatus.ACCEPTED,
      message: "",
      data,
    };
  } catch (err) {
    console.error(err);

    return {
      success: false,
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: `Error: ${err.toString()}`,
    };
  }
};

export const __getRecipesByUsername = async (
  username: string
): Promise<ServiceResponse<any>> => {
  const query = {
    where: {
      author: {
        username,
      },
    },
  };

  try {
    const data = await runQuery("recipe", "findMany", query);

    console.log("data");

    return {
      success: true,
      status: HttpStatus.ACCEPTED,
      message: "",
      data,
    };
  } catch (err) {
    console.error("err", err);

    return {
      success: false,
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: err.toString(),
    };
  }
};
