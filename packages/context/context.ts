import { Request, Response } from "express";
import { ExpressContextFunctionArgument } from "@apollo/server/express4";
import { prisma, PrismaClient } from "@repo/prisma";
import * as apiKey from "@repo/api-key";
import { contextUtils as utils, supertokens } from "@repo/lib";
import { tokenUtil } from "@repo/api-key";
import * as authorizer from "./authorizer";
import { getSession, SessionContainer } from "supertokens-node/recipe/session";

supertokens.supertokensInitializer();

export type Utils = typeof utils;
export type ApiKey = typeof apiKey;
export type Authorizer = typeof authorizer;
export type Token = typeof tokenUtil;

/**
 * Context is an object with a request, response, prisma, prismaRO, and tokenPayload property.
 * @property {Request} request - The incoming request object.
 * @property {Response} response - The response object that will be sent back to the client.
 * @property {PrismaClient} prisma - This is the Prisma client instance that you can use to perform
 * database operations.
 * all queries.
 * @property {Jwt | null} tokenPayload - This is the decoded JWT token.
 */
export type Context = {
  request: Request;
  response: Response;
  prisma: PrismaClient;
  utils: Utils;
  select: any;
  apiKey: ApiKey;
  tokenUtil: Token;
  authorizer: Authorizer;
  session: SessionContainer | null;
  userId: string | null;
};

const getSessionContext = async ({
  req,
  res,
}: ExpressContextFunctionArgument) => {
  const session = await getSession(req, res).catch(() => null);
  if (!session) return { session, userId: null };
  const userId = session.getUserId();
  return { session, userId };
};


/**
 * It takes the request and response objects from Express, and returns an object with the request,
 * response, and Prisma client
 * @param {ExpressContextFunctionArgument}  - ExpressContext - This is the context that is passed to the Express
 * middleware.
 * @returns A function that returns a promise that resolves to a Context object.
 */
export async function context({
  req,
  res,
}: ExpressContextFunctionArgument): Promise<Context> {
  const { session, userId } = await getSessionContext({ req, res });
  return {
    request: req,
    response: res,
    prisma,
    utils,
    select: null,
    apiKey,
    tokenUtil,
    authorizer,
    session,
    userId,
  };
}
