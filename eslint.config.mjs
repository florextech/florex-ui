import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist/", "storybook-static/", "node_modules/", "scripts/"] },
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  },
);
