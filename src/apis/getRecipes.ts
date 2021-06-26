import axios from "axios";
import keys from "config/keys";
import { v4 as uuid4 } from "uuid";
import hmacSHA512 from "crypto-js/hmac-sha512";

const { V1_ACCESS_KEY_ID, V1_SECRET_ACCESS_KEY } = keys;

const ACCESS_TOKEN = hmacSHA512(
  V1_ACCESS_KEY_ID,
  V1_SECRET_ACCESS_KEY + Date.now() + uuid4()
).toString();

const getRecipes = async (params) => {
  try {
    const res = await axios.get("/api/v1/recipes", {
      headers: {
        Authorization: ACCESS_TOKEN,
      },
      params: { ingredients: JSON.stringify(params) },
    });
    return { data: res.data };
  } catch (err) {
    return { error: `Error: ${err.toString()}` };
  }
};

export default getRecipes;
