import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import { default as pluginReact } from "eslint-plugin-react";
import globals from "globals";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{ts,tsx}"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    plugins: {
      "@typescript-eslint": tseslint,
      import: importPlugin,
      pluginReact,
    },
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "func-style": ["error", "expression"],
      "arrow-parens": ["error", "always"],

      "@typescript-eslint/no-empty-interface": "warn",
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],

      "react/jsx-uses-vars": "error",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-sort-props": ["error", { ignoreCase: true }],
      "react/jsx-filename-extension": ["error", { extensions: [".ts", ".tsx"] }],

      "comma-dangle": "off",
      "object-curly-newline": "off",
      "operator-linebreak": "off",
      "function-paren-newline": "off",
      "no-underscore-dangle": "off",
      "no-plusplus": "off",
      "no-undef": "warn",

      "import/order": ["warn", { groups: ["external", "builtin", "internal", "sibling", "parent", "index"] }],
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  {
    settings: {
      react: {
        version: "19",
        createClass: "createReactClass",
        pragma: "React",
        fragment: "Fragment",
        flowVersion: "0.53",
      },
    },
  },
];
