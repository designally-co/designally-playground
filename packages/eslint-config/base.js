import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

export const baseConfig = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  { ignores: ["dist/**", ".next/**", ".sanity/**", "node_modules/**"] },
];
