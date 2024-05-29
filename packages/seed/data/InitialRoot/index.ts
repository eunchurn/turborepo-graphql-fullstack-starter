import { PrismaClient } from "@repo/prisma";
import { supertokens } from "@repo/lib";
import { createSuperUser } from "./createSuperUser";

supertokens.supertokensInitializer();

export async function InitialRoot(prisma: PrismaClient) {
  const superUser = await createSuperUser(prisma);

  return [superUser];
}
