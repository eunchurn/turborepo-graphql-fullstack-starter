import { defineConfig } from "tsup";

const dev = process.env.NODE_ENV !== "production";

export default defineConfig((options) => ({
  entry: ["index.ts"],
  splitting: false,
  sourcemap: false,
  clean: true,
  treeshake: true,
  shims: true,
  dts: true,
  format: ["esm", "cjs"],
  minify: options.watch ? undefined : "terser",
  // terserOptions: {
  //   compress: !options.watch,
  // },
}));
