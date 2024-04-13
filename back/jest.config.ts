/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: ".",
  testRegex: ".*\\.(spec|test)\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  collectCoverageFrom: [
    "**/src/**",
    // '!**/node_modules/**',
    // '!**/coverage/**',
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/adapters",
    "/main/",
    "/infra",
    "/config/",
    "app.ts",
    "/routes",
    "server.ts",
    "module.ts",
    "enum.ts",
    "interface.ts",
    "schema.ts",
    "model.ts",
  ],
  coverageDirectory: "./coverage",
  testEnvironment: "node",
  roots: ["./src"],
  modulePathIgnorePatterns: [
    ".*\\.module\\.ts$",
    ".*\\main\\.ts$",
    ".*\\.e2e-spec\\.ts$",
    "depedencie\\.ts$",
    "provider\\.ts$",
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  clearMocks: true,
  collectCoverage: true,
  coverageProvider: "v8",
};

export default config;
