import next from "@next/eslint-plugin-next";
import { reactConfig } from "./react.js";

export const nextJsConfig = [
  ...reactConfig,
  {
    plugins: { "@next/next": next },
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs["core-web-vitals"].rules,
    },
  },
];
