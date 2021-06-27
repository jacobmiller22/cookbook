import axios from "axios";
import { getAuthorization } from "apis";

const postRecipes = async (data) => {
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

export default postRecipes;
