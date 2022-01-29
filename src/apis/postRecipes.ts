import axios from "axios";
import { getAuthorization } from "apis";

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

const postRecipes = async (data) => {
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

export default postRecipes;
