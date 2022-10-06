/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ["turbo", "plugin:@typescript-eslint/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
  overrides: [
    {
      env: {
        jest: true,
      },
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react", "plugin:jest/recommended"],
      rules: {
        "import/no-extraneous-dependencies": [
          "off",
          { devDependencies: ["**/?(*.)+(spec|test).[jt]s?(x)"] },
        ],
      },
    },
  ],
  ignorePatterns: [
    "**/*.js",
    "**/*.json",
    "node_modules",
    "public",
    "styles",
    ".next",
    "coverage",
    "dist",
    ".turbo",
  ],
};
