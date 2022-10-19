/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  ...require("config/eslint-server"),

  parserOptions: {
    project: "./tsconfig.json",
  },
};
