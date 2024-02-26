/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@repo/eslint-config/storybook.js"],
  ignorePatterns: [".next/**", "*.config.*"],
  parserOptions: {
    project: true,
  },
  root: true,
};
