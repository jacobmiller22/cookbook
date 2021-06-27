import axios from "axios";
import { getAuthorization } from "apis";
import { RecipeParams } from "interfaces/recipes";

const getRecipes = async (params: RecipeParams) => {
  try {
    const res = await axios.get("/api/v1/recipes", {
      headers: {
        Authorization: getAuthorization(),
      },
      params: { ingredients: JSON.stringify(params) },
    });
    return { data: res.data };
  } catch (err) {
    return { error: `Error: ${err.toString()}` };
  }
};

export default getRecipes;
