import { queryField, list } from "nexus";

export const AccessLogFindFirstQuery = queryField("findFirstAccessLog", {
  type: "AccessLog",
  args: {
    where: "AccessLogWhereInput",
    orderBy: list("AccessLogOrderByWithRelationInput"),
    cursor: "AccessLogWhereUniqueInput",
    take: "Int",
    skip: "Int",
    distinct: list("AccessLogScalarFieldEnum"),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.accessLog.findFirst({
      ...args,
      ...select,
    });
  },
});
