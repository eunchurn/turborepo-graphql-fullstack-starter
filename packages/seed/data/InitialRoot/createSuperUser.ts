import {
  PrismaClient,
  UserRole,
} from "@repo/prisma";
import { createUser } from "../function/createUser";
export async function createSuperUser(prisma: PrismaClient) {
  const user = await createUser({
    prisma,
    uuid: "ca3dc428-5f4a-4b5a-8b0a-9b9b9b9b9b9b",
    name: "SuperUser",
    email: "super@superuser.io",
    password: "password",
    phoneNumber: "010-1234-5678",
    role: UserRole.SUPER_USER,
    description: "Super",
  });
  return {
    user,
  };
}
