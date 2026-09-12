import js from "@eslint/js";
import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    ignores: ["node_modules/**", "coverage/**"], // ignores dependency directories and test coverage directories
    languageOptions: {
      globals: globals.node, // gives eslint the list of globals that exist in a Node.js environment
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
];
