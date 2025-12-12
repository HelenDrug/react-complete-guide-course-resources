// Fix: Use js.configs.recommended for ESLint v9+ flat config
import js from "@eslint/js";
import react from "eslint-plugin-react";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": tseslint,
      react: react,
    },
    rules: {},
    settings: {
      react: { version: "detect" },
    },
  },
];
