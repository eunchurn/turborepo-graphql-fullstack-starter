import { queryField, nonNull, list } from "nexus";

export const AccessLogFindManyQuery = queryField("findManyAccessLog", {
  type: nonNull(list(nonNull("AccessLog"))),
  args: {
    where: "AccessLogWhereInput",
    orderBy: list("AccessLogOrderByWithRelationInput"),
    cursor: "AccessLogWhereUniqueInput",
    take: "Int",
    skip: "Int",
    distinct: list("AccessLogScalarFieldEnum"),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.accessLog.findMany({
      ...args,
      ...select,
    });
  },
});
