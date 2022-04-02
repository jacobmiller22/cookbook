import keys from "config/keys";
import { v4 as uuid4 } from "uuid";
import hmacSHA512 from "crypto-js/hmac-sha512";
import { ServiceResponse } from "lib/http";
import axios from "axios";
import { ACCOUNT_DETAILS_RT, ACCOUNT_USERNAME_RT } from "routes/server";
import { replaceWildcards } from "routes";

const { V1_ACCESS_KEY_ID, V1_SECRET_ACCESS_KEY } = keys;

export const getAuthorization = (): string =>
  hmacSHA512(
    V1_ACCESS_KEY_ID,
    V1_SECRET_ACCESS_KEY + Date.now() + uuid4()
  ).toString();

export enum Role {
  ADMIN = "admin",
  MEMBER = "member",
}

export const getAccountDetails = async (
  userId: string
): Promise<ServiceResponse<any>> => {
  if (!userId) {
    throw new Error("User ID is required");
  }

  try {
    const response = await axios.get(
      replaceWildcards(ACCOUNT_DETAILS_RT, [userId])
    );

    console.log("response", response);

    return {
      success: true,
      status: response.status,
      message: "",
      data: response.data,
    };
  } catch (err) {
    return {
      success: false,
      status: err.status,
      message: `Error: ${err.toString()}`,
    };
  }
};

export const updateUsername = async (
  userId: string,
  username: string
): Promise<ServiceResponse<any>> => {
  if (!userId || !username) {
    throw new Error("User ID and username are required");
  }

  try {
    const response = await axios.put(
      replaceWildcards(ACCOUNT_USERNAME_RT, [userId]),
      {
        username,
      }
    );

    return {
      success: true,
      status: response.status,
      message: "",
      data: response.data,
    };
  } catch (err) {
    return {
      success: false,
      status: err.status,
      message: `Error: ${err.toString()}`,
    };
  }
};
