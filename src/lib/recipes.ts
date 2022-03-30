import axios from "axios";
import { getAuthorization } from "lib/auth";
import { RecipeParams } from "interfaces/Recipe";
import { ServiceResponse } from "./http";

export const getRecipes = async <T>(
  params: RecipeParams
): Promise<ServiceResponse<T>> => {
  const { ingredients, name } = params;

  try {
    const res = await axios.get("/api/v1/recipes", {
      headers: {
        Authorization: getAuthorization(),
      },
      params: { ingredients: JSON.stringify(ingredients), name },
    });
    return { success: true, status: res.status, message: "", data: res.data };
  } catch (err) {
    return {
      success: false,
      status: err.status,
      message: `Error: ${err.toString()}`,
    };
  }
};

const __postRecipes = async (data) => {
  console.log("data", data);
  try {
    const res = await axios.post("/api/v1/recipes", data, {
      headers: {
        Authorization: getAuthorization(),
        "content-type": "multipart/form-data",
        Accept: "*/*",
      },
    });
    return { data: res.data };
  } catch (err) {
    return { error: `Error: ${err.toString()}` };
  }
};

export const postRecipes = async (data) => {
  console.log("data", data);
  try {
    const res = await axios.post(
      "http://localhost:8080/v1/images/convert",
      data,
      {
        headers: {
          Authorization: getAuthorization(),
          "content-type": "multipart/form-data",
          Accept: "*/*",
        },
      }
    );
    return { data: res.data };
  } catch (err) {
    return { error: `Error: ${err.toString()}` };
  }
};
