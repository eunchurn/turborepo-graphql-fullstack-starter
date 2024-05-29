import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["index.ts"],
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  shims: true,
  dts: true,
  format: ["esm", "cjs"],
  // minify: options.watch ? undefined : "terser",
  // terserOptions: {
  //   compress: !options.watch,
  // },
}));
