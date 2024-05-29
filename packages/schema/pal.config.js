/**
 * @type {import('@paljs/types').Config}
 **/
module.exports = {
  schema: "../prisma/prisma/schema.prisma",
  backend: {
    generator: "nexus",
    onDelete: true,
    output: "types/crud",
  },
};
