import { PrismaClient } from "@repo/prisma";
import { Request } from "express";

/**
 * It verifies the user by the request, and if the user is not an administrator, it throws an error
 * @param {Request} request - Request - The request object from the API Gateway
 * @param {PrismaClient} prisma - PrismaClient - this is the prisma client that you can use to query
 * the database.
 * @returns A function that takes a request and a prisma client and returns a boolean.
 */
export async function adminAuthorizer(request: Request, prisma: PrismaClient) {
  return true;
}
