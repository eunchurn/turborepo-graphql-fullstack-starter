import { PrismaClient, UserRole } from "@repo/prisma";
import { upsertUserAndGetId } from "./upsertUserAndGetId";

interface CreateUserArgs {
  prisma: PrismaClient;
  uuid: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  role: UserRole;
  description?: string;
}

export async function createUser(args: CreateUserArgs) {
  const {
    prisma,
    uuid,
    name,
    email,
    password,
    phoneNumber,
    role,
    description,
  } = args;

  const stUserId = await upsertUserAndGetId(email, password, role);

  const user = await prisma.user.upsert({
    where: { uuid },
    update: {
      uuid,
      email,
      name,
      phoneNumber,
      description,
      stUserId,
    },
    create: {
      uuid,
      email,
      name,
      phoneNumber,
      description,
      stUserId,
    },
  });
  if (!user) throw new Error("Failed to create user");
  return user;
}
