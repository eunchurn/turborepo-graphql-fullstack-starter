import UserRoles from "supertokens-node/recipe/userroles";
import { PrismaClient } from "@repo/prisma";
// XXX: to be used later
// import { JSONValue } from "supertokens-node/lib/build/types";
// import { permissionsToStrArr } from "./userPermission";

export const updateUserPermissions = async ({
  stUserId,
  permission,
  // XXX: to be used later
  // permissions,
  prisma,
}: {
  stUserId: string;
  permission: string[];
  // XXX: to be used later
  // permissions: JSONValue[];
  prisma: PrismaClient;
}) => {
  const userPermissions = await prisma.policy.findMany({
    where: { user: { stUserId } },
    include: { resource: true },
  });
  const originalUserRoles = await UserRoles.getRolesForUser("public", stUserId);
  for await (const role of originalUserRoles.roles) {
    if (role.includes("SUPER_USER")) continue;
    if (
      [
        "ADMIN",
        "SEMI_ADMIN",
        "USER_RO",
        "USER_RW",
        "GUEST",
      ].includes(role)
    ) {
      await UserRoles.removeUserRole("public", stUserId, role);
    } else {
      await UserRoles.deleteRole(role);
    }
  }
  for await (const permission of userPermissions) {
    const resource = permission.resource;
    if (!resource) continue;
    await UserRoles.createNewRoleOrAddPermissions(
      `${stUserId}/${permission.uuid}`,
      [permission.action],
      // XXX: to be used later
      // permissionsToStrArr(permission.permissions),
    );
    await UserRoles.addRoleToUser(
      "public",
      stUserId,
      `${stUserId}-${permission.uuid}`,
    );
  }
};
