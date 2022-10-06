module.exports = {
  ...require("config/eslint-server"),

  parserOptions: {
    project: "./tsconfig.json",
  },
};
