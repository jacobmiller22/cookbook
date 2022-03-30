import { ServiceResponse } from "lib/http";
import { runQuery } from "lib/prisma";

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
      // bio: member.bio,
    },
    create: {
      id: member.id,
      email: member.email,
      name: member.name,
      recipes: {
        create: [],
      },
      joinedAt: member.createdAt,
      // bio: member.bio,
    },
  };
  try {
    const response = await runQuery("user", "upsert", query);

    console.log("prisma response");

    return {
      success: true,
      status: 200,
      message: "",
      data: response,
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      status: err.response.status,
      message: `Error: ${err.toString()}`,
    };
  }

  return;
};
