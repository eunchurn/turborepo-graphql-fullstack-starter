import { User } from "@repo/prisma";
import { Context } from "@repo/context";

/**
 * It takes a context object, which contains a prisma client and a token payload, and returns a promise
 * that resolves to a member or null
 * @param {Context}  - Context - This is the context object that is passed to the resolver.
 * @returns Member | null
 */
export async function getMe({ prisma, select }: Context): Promise<User | null> {
  const user = await prisma.user.findFirst({
    ...select,
  });
  return user;
}
