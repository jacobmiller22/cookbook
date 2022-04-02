import axios from "axios";
import { ServiceResponse, HttpStatus } from "lib/http";
import { getAuthHeader } from "lib/userfront";
import { UF_SEARCH_USERS_RT } from "routes/server";
import { runQuery } from "../prisma";

export const __getMemberByUsername = async (
  username: string
): Promise<ServiceResponse<any>> => {
  const body = {
    filters: {
      conjunction: "and",
      filterGroups: [
        {
          conjunction: "and",
          filters: [
            {
              attr: "username",
              type: "string",
              comparison: "is",
              value: username,
            },
          ],
        },
      ],
    },
  };

  const URL = UF_SEARCH_USERS_RT.basePath + UF_SEARCH_USERS_RT.path;

  const config = {
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(),
    },
  };

  try {
    const { data } = await axios.post(URL, body, config);

    if (data.totalCount !== 1) {
      throw new Error("Member not found");
    }
    const member = data.results[0];
    return {
      success: true,
      status: HttpStatus.ACCEPTED,
      message: "",
      data: member,
    };
  } catch (err) {
    // console.log(err.request);
    return {
      success: false,
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: `Error: ${err.toString()}`,
    };
  }
};

export const __getMemberMetaByUsername = async (
  username: string
): Promise<ServiceResponse<any>> => {
  if (!username) {
    throw new Error("username is required in getMemberMetaByUsername");
  }

  const userQuery = {
    where: {
      username,
    },
  };

  try {
    const userResponse = await runQuery("user", "findUnique", userQuery);

    const countQuery = {
      where: {
        published: true,
        author: {
          id: userResponse?.id,
        },
      },
    };

    const recipeCount = await runQuery("recipe", "count", countQuery);

    const data = { ...userResponse, recipeCount };

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

export const getAccountDetails = async (
  userId: string
): Promise<ServiceResponse<any>> => {
  const query = {
    where: {
      id: userId,
    },
  };

  try {
    const response = await runQuery("user", "findUnique", query);

    return {
      success: true,
      status: HttpStatus.ACCEPTED,
      message: "",
      data: response,
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
