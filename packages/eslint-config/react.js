import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { baseConfig } from "./base.js";

export const reactConfig = [
  ...baseConfig,
  {
    ...react.configs.flat.recommended,
    settings: { react: { version: "detect" } },
    rules: {
      ...react.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    plugins: { "react-hooks": reactHooks },
    rules: reactHooks.configs.recommended.rules,
  },
];
