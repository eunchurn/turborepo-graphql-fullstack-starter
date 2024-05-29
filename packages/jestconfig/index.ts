import { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  rootDir: ".",
  roots: ["<rootDir>"],
  modulePaths: ["<rootDir>"],
  moduleDirectories: ["node_modules"],
  modulePathIgnorePatterns: ["dist"],
  testRegex: ".spec.tsx?$|.test.tsx?$",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.json" }],
    ".(js|jsx)": "babel-jest",
  },
  coverageReporters: [
    "html",
    "text",
    "text-summary",
    "cobertura",
    "json-summary",
  ],
  reporters: ["default", "jest-junit"],
};

export default config;

module.exports = config;
