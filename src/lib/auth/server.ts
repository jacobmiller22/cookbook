import { HttpStatus, ServiceResponse } from "lib/http";
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
