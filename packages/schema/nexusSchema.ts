import {
  makeSchema,
  fieldAuthorizePlugin,
  declarativeWrappingPlugin,
} from "nexus";
import { SchemaConfig } from "nexus/dist/builder";

import * as types from "./types";
import { paljs } from "@paljs/nexus";
import path from "path";
import {
  RoleBasedAccessFieldPlugin,
  TestingOnlyFieldPlugin,
  HardLockSelfPlugin,
  AdminOnlyPlugin,
} from "./plugins";

const option: SchemaConfig = {
  types,
  shouldGenerateArtifacts: true,
  plugins: [
    // RoleBasedAccessFieldPlugin,
    // TestingOnlyFieldPlugin,
    // HardLockSelfPlugin,
    // AdminOnlyPlugin,
    paljs({
      excludeScalar: ["BigInt"],
      includeAdmin: process.env.GENERATE_ADMIN === "true",
    }),
    declarativeWrappingPlugin(),
    fieldAuthorizePlugin({
      formatError: ({ error }) => {
        console.log(error);
        return error;
      },
    }),
  ],
  sourceTypes: {
    modules: [
      {
        module: "@repo/prisma",
        alias: "prisma",
      },
    ],
  },
  contextType: {
    module: require.resolve("@repo/context"),
    export: "Context",
  },
  outputs: {
    typegen: path.resolve(__dirname, "generated/resolverTypes.ts"),
    schema: path.resolve(__dirname, "generated/schema.graphql"),
  },
};

export const schema = makeSchema(option);

export * as types from "./types";
