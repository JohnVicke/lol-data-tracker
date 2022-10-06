module.exports = {
  ...require("config/eslint-next"),

  parserOptions: {
    project: "./tsconfig.json",
  },
};
