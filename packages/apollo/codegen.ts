import { CodegenConfig } from "@graphql-codegen/cli";

const schema: string[] = ["../../packages/schema/generated/schema.graphql"];

const config: CodegenConfig = {
  schema,
  documents: [
    "operations/**/*.graphql",
    "../../apps/web/**/*.graphql",
    "!../../apps/web/src/deprecatedGraphql/**/*.graphql",
  ],
  generates: {
    "generated/": {
      preset: "client",
      plugins: [],
    },
    "generated/apollo-helper.ts": {
      plugins: ["typescript-apollo-client-helpers"],
    },
    "generated/apollo.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        "typescript-resolvers",
      ],
      config: {
        withHooks: true,
        // useIndexSignature: true,
      },
    },
  },
  hooks: {
    afterAllFileWrite: ["prettier --write"],
  },
};

export default config;
