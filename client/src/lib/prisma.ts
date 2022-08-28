import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const runQuery = async (model, method, query) => {
  const response = await prisma[model][method](query);
  return response;
};
