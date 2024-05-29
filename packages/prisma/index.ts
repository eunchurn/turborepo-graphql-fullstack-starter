export * from "@prisma/client";
export * from "./client";
import { prisma } from "./client";

// Named export for enums to avoid vite barrel export bug (https://github.com/nrwl/nx/issues/13704)
export {
  UserRole,
  AccessType,
  UserPermission,
  Action,
} from "@prisma/client";

export default prisma;
