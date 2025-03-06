import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import globals from "globals";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
      globals: globals.browser,
    },
    plugins: {
      "@typescript-eslint": tseslint,
      import: importPlugin,
    },
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "func-style": ["error", "expression"],
      "arrow-parens": ["error", "always"],
      "react/react-in-jsx-scope": "off",

      "@typescript-eslint/no-empty-interface": "warn",
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],

      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/jsx-sort-props": ["error", { ignoreCase: true }],

      "comma-dangle": "off",
      "object-curly-newline": "off",
      "operator-linebreak": "off",
      "function-paren-newline": "off",
      "no-underscore-dangle": "off",
      "no-plusplus": "off",
      "no-undef": "warn",

      "import/order": [
        "warn",
        { groups: ["external", "builtin", "internal", "sibling", "parent", "index"] },
      ],
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "17",
      },
    },
  },
];
