import { queryField, nonNull, list } from "nexus";

export const AccessLogFindCountQuery = queryField("findManyAccessLogCount", {
  type: nonNull("Int"),
  args: {
    where: "AccessLogWhereInput",
    orderBy: list("AccessLogOrderByWithRelationInput"),
    cursor: "AccessLogWhereUniqueInput",
    take: "Int",
    skip: "Int",
    distinct: list("AccessLogScalarFieldEnum"),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.accessLog.count(args as any);
  },
});
