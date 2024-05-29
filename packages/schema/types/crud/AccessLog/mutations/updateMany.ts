import { mutationField, nonNull } from "nexus";

export const AccessLogUpdateManyMutation = mutationField(
  "updateManyAccessLog",
  {
    type: nonNull("BatchPayload"),
    args: {
      data: nonNull("AccessLogUpdateManyMutationInput"),
      where: "AccessLogWhereInput",
    },
    resolve(_parent, args, { prisma }) {
      return prisma.accessLog.updateMany(args as any);
    },
  },
);
