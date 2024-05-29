import { UserPermission } from "@repo/prisma";

export const convertRolePermission = (permissions: UserPermission[]) => {
  let permissionKeys = Object.keys(UserPermission);

  let result: { permission: UserPermission; exist: boolean }[] = [];
  for (let current of permissionKeys) {
    let found = permissions.find((permission) => permission === current);
    let exist = false;
    if (found) exist = true;
    let currentPermission =
    UserPermission[current as keyof typeof UserPermission];
    result.push({ permission: currentPermission, exist });
  }

  return result;
};
