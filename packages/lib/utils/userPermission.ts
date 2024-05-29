import { UserRole, PrismaClient, UserPermission, Action } from "@repo/prisma";

export async function checkProjectPermission(
  prisma: PrismaClient,
  stUserId: string,
  resourceUuid: string,
  role?: UserRole
) {
  const user = await prisma.user.findUnique({
    where: { stUserId },
    include: { policy: { include: { resource: true } } },
  });
  if (!user) throw new Error("User not found");

  const superUserRoles = user.policy.some(
    (permission) => permission.action === Action.ALLOW
  );
  if (superUserRoles) return true;

  return user.policy.some(
    (permission) =>
      permission.resource.uuid === resourceUuid &&
      permission.action === Action.ALLOW
  );
}

export const resolveUserDefaultPermission = (role: UserRole) => {
  const Permissions: { [key in UserRole]: UserPermission[] } = {
    SUPER_USER: [UserPermission.ADMINISTRATOR],
    ADMIN: [
      UserPermission.PROJECT_READ,
      UserPermission.PROJECT_WRITE,
      UserPermission.APPROVAL_READ,
      UserPermission.APPROVAL_WRITE,
      UserPermission.MONITORING_READ,
      UserPermission.MONITORING_WRITE,
      UserPermission.PROJECT_SETTINGS_READ,
      UserPermission.PROJECT_SETTINGS_WRITE,
      UserPermission.USER_READ,
      UserPermission.USER_WRITE,
    ],
    USER_RO: [
      UserPermission.PROJECT_READ,
      UserPermission.PROJECT_SETTINGS_READ,
      UserPermission.APPROVAL_READ,
    ],
    USER_RW: [
      UserPermission.PROJECT_READ,
      UserPermission.PROJECT_SETTINGS_READ,
      UserPermission.APPROVAL_READ,
    ],
    GUEST: [UserPermission.NO_PERMISSION],
  };

  return Permissions[role];
};
