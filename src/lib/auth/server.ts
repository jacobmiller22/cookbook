import { HttpStatus, ServiceResponse } from "lib/http";
import { runQuery } from "lib/prisma";
import axios, { Method } from "axios";
import { UF_UPDATE_USER_RT } from "routes/server";
import { replaceWildcards } from "routes";
import { getAuthHeader } from "lib/userfront";

export const initAccount = async (
  member: any
): Promise<ServiceResponse<void>> => {
  /** Initialize user with prisma */

  // Check if user exists

  // Initialize user with prisma

  const query = {
    where: {
      id: member.id,
    },
    update: {
      name: member.name,
      username: member.username,
    },
    create: {
      id: member.id,
      email: member.email,
      name: member.name,
      username: member.username,
      recipes: {
        create: [],
      },
      joinedAt: member.createdAt,
      bio: member.bio,
    },
  };
  try {
    await runQuery("user", "upsert", query);

    return {
      success: true,
      status: 200,
      message: "",
    };
  } catch (err) {
    console.error(err);

    return {
      success: false,
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: `Error: ${err.toString()}`,
    };
  }

  return;
};

export const __updateAccountUsername = async (
  userId: string,
  username: string
): Promise<ServiceResponse<void>> => {
  const ufResponse = await updateUfUsername(userId, username);

  const prismaResponse = await updatePrismaUsername(userId, username);

  if (ufResponse.success && prismaResponse.success) {
    return {
      success: true,
      status: HttpStatus.ACCEPTED,
      message: "",
    };
  } else {
    return {
      success: false,
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: `Error: ${ufResponse.message}\n\n${prismaResponse.message}`,
    };
  }
};

export const updateUfUsername = async (
  userId: string,
  username: string
): Promise<ServiceResponse<void>> => {
  const URL =
    UF_UPDATE_USER_RT.basePath + replaceWildcards(UF_UPDATE_USER_RT, [userId]);

  console.log(URL);

  try {
    const response = await axios.put(
      URL,
      { username },
      {
        headers: {
          ...getAuthHeader(),
        },
      }
    );

    console.log(response);

    return {
      success: true,
      status: HttpStatus.ACCEPTED,
      message: "",
    };
  } catch (err) {
    console.error(err.toJSON());
    return {
      success: false,
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: `Error: ${err.toString()}`,
    };
  }
};

export const updatePrismaUsername = async (
  userId: string,
  username: string
): Promise<ServiceResponse<void>> => {
  /** update username prisma side */
  const query = {
    where: {
      id: userId,
    },
    data: {
      username,
    },
  };

  try {
    await runQuery("user", "update", query);

    return {
      success: true,
      status: 200,
      message: "",
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
