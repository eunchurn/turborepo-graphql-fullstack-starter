import { enumType } from "nexus";

export const Env = enumType({
  name: "Env",
  members: [
    { name: "dev", value: "development" },
    { name: "prod", value: "production" },
  ],
});
