import shell from "shelljs";
import path from "node:path";

shell.sed(
  "-i",
  "./../../context/dist/index.js",
  "@repo/context",
  path.resolve(__dirname, "generated/resolverTypes.ts")
);
