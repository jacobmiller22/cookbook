import axios, { AxiosError } from "axios";
import { Member } from "interfaces/Member";
import { replaceWildcards } from "routes";
import { MEMBER_RT, UF_READ_USER_RT, UF_SEARCH_USERS_RT } from "routes/server";
import { HttpStatus, ServiceResponse } from "./http";
import { getAuthHeader } from "./userfront";

export type MemberId = string;

export const getMemberByUsername = async (username: string) => {
  if (!username) {
    throw new Error("username is required in getMemberByUsername");
  }

  const response = await axios.get<Member>(MEMBER_RT.path, {
    params: {
      username,
    },
  });
  return response.data;
};

export const getMemberById = async (
  id: MemberId
): Promise<ServiceResponse<any>> => {
  if (!id) {
    return {
      success: false,
      status: HttpStatus.BAD_REQUEST,
      message: "id is required in getMemberById",
    };
  }

  const URL =
    UF_READ_USER_RT.basePath + replaceWildcards(UF_READ_USER_RT, [id]);

  const config = {
    headers: getAuthHeader(),
  };

  try {
    const { data, status } = await axios.get(URL, config);
    return {
      success: true,
      status,
      message: "",
      data,
    };
  } catch (err) {
    return {
      success: false,
      status: err.response.status,
      message: `Error: ${err.toString()}`,
    };
  }
};

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

  console.log("URL", URL);

  const config = {
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(),
    },
  };

  console.log("config", config);

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
