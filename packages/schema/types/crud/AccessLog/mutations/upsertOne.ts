import { mutationField, nonNull } from "nexus";

export const AccessLogUpsertOneMutation = mutationField("upsertOneAccessLog", {
  type: nonNull("AccessLog"),
  args: {
    where: nonNull("AccessLogWhereUniqueInput"),
    create: nonNull("AccessLogCreateInput"),
    update: nonNull("AccessLogUpdateInput"),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.accessLog.upsert({
      ...args,
      ...select,
    });
  },
});
