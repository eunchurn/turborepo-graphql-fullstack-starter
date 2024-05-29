import { mutationField, nonNull } from "nexus";

export const AccessLogDeleteManyMutation = mutationField(
  "deleteManyAccessLog",
  {
    type: nonNull("BatchPayload"),
    args: {
      where: "AccessLogWhereInput",
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.accessLog.deleteMany({ where } as any);
    },
  },
);
