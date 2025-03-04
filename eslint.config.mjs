import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";

const compat = new FlatCompat({
  baseDirectory: import.meta.url,
});

export default [
  ...compat.extends([
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ]),
  {
    plugins: {
      prettier: prettierPlugin,
      "@typescript-eslint": tsPlugin,
      react: reactPlugin,
      import: importPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      ...eslintConfigPrettier.rules,
      "prettier/prettier": "error",

      // Buenas prácticas
      "no-console": ["error", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "func-style": ["error", "expression"],
      "arrow-parens": ["error", "always"],

      // Reglas de TypeScript
      "@typescript-eslint/no-empty-interface": "warn",
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",

      // Reglas de React
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/jsx-sort-props": ["error", { ignoreCase: true }],

      // Organización de imports
      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external"], // Módulos nativos y externos primero
            ["internal"], // Luego internos
            ["sibling", "parent"], // Luego relativos
            ["index"], // Finalmente archivos `index.js`
          ],
          "newlines-between": "always", // Espacios entre grupos
        },
      ],
      "import/no-duplicates": "error",
      "import/no-unresolved": "error",
      "import/no-unused-modules": ["error", { unusedExports: true }],

      // Otras reglas útiles
      "comma-dangle": "off",
      "object-curly-newline": "off",
      "operator-linebreak": "off",
      "function-paren-newline": "off",
      "no-underscore-dangle": "off",
      "no-plusplus": "off",
      "no-undef": "warn",
    },
  },
];
