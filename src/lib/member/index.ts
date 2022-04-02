import axios from "axios";
import { Member } from "interfaces/Member";
import { replaceWildcards } from "routes";
import { MEMBER_META_RT, MEMBER_RT, UF_READ_USER_RT } from "routes/server";
import { HttpStatus, ServiceResponse } from "../http";

import { getAuthHeader } from "../userfront";

export type MemberId = string;

export const getMemberByUsername = async (username: string) => {
  if (!username) {
    throw new Error("username is required in getMemberByUsername");
  }

  const URL = replaceWildcards(MEMBER_RT, [username]);

  const response = await axios.get<Member>(URL);
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

export const getMemberMetaByUsername = async (username: string) => {
  if (!username) {
    throw new Error("username is required in getMemberMetaByUsername");
  }

  const URL = replaceWildcards(MEMBER_META_RT, [username]);

  const response = await axios.get<Member>(URL);
  return response.data;
};
