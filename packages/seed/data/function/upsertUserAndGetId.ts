import { UserRole } from "@repo/prisma";
import { signUp } from "supertokens-node/recipe/emailpassword";
import { listUsersByAccountInfo } from "supertokens-node";
import UserRoles from "supertokens-node/recipe/userroles";

async function getUserByEmail(email: string) {
  const [user] = await listUsersByAccountInfo("public", { email });
  if (!user) return null;
  return user;
}

export async function upsertUserAndGetId(
  userEmail: string,
  userPassword: string,
  role: UserRole,
) {
  const user = await getUserByEmail(userEmail);
  if (!user) {
    const newUser = await signUp("public", userEmail, userPassword);
    if (newUser.status === "OK") {
      await UserRoles.addRoleToUser("public", newUser.user.id, role);
      await UserRoles.addRoleToUser("public", newUser.user.id, `${role}-test`);
      return newUser.user.id;
    } else {
      throw new Error("Failed to create user");
    }
  } else {
    await UserRoles.addRoleToUser("public", user.id, role);
    await UserRoles.addRoleToUser("public", user.id, `${role}-test`);
    return user.id;
  }
}
