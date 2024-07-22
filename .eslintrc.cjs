module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:unicorn/recommended",
    "plugin:sonarjs/recommended-legacy",
    "plugin:perfectionist/recommended-alphabetical",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "sonarjs"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "perfectionist/sort-imports": [
      "error",
      {
        type: "alphabetical",
        order: "asc",
        groups: [
          ["type", "react"],
          ["builtin-type", "builtin"],
          ["external-type", "external"],
          ["internal-type", "internal"],
          ["parent-type", "parent"],
          ["sibling-type", "sibling"],
          ["index-type", "index"],
          "object",
          "unknown",
        ],
        "custom-groups": {
          value: {
            react: ["react"],
          },
          type: {
            react: ["react"],
          },
        },
        "internal-pattern": ["@/**"],
        "newlines-between": "always",
      },
    ],
    // Enforces function declaration for component definitions
    "react/function-component-definition": [
      2,
      { namedComponents: "function-declaration" },
    ],
    // Removes unnecessary curly brackets on props
    "react/jsx-curly-brace-presence": [
      "error",
      { children: "never", props: "never" },
    ],
    // Sorts props on react components
    "react/jsx-sort-props": "error",
    // Adds line break between variables and return statements
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],
    // Enforces that arrow functions simplify return statements to () => value where possible instead of () => { return value }
    "arrow-body-style": ["error"],
    // Forces return types on exported members
    "@typescript-eslint/explicit-module-boundary-types": "error",
    // Forbids any usage
    "@typescript-eslint/no-explicit-any": "error",
    // Prevents any unused variable leftovers
    "@typescript-eslint/no-unused-vars": "error",
    // Does not enforce filename case for various components
    "unicorn/filename-case": "off",
    // Allows null usage
    "unicorn/no-null": "off",
    // Removes top level await preference rule
    "unicorn/prefer-top-level-await": "off",
    // Allows for various React related abbreviations
    "unicorn/prevent-abbreviations": [
      "error",
      { replacements: { props: false, ref: false } },
    ],
  },
  overrides: [
    {
      // Disables rules for tsx files, as these files usually contain components, which can be safely inferred.
      // Unfortunately, there's no way to add regex for function names so that it can be omitted for
      // PascalCase functions only, which would solve the problem.
      files: ["*.tsx", "*.mjs"],
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "error",
          { argsIgnorePattern: "^_" },
        ],
      },
    },
    {
      // The namespace NodeJS is used to extend the ProcessEnv interface. Disabling this rule allows the usage of
      // namespaces in this specific case.
      // The ProcessEnv interface is extended but doesn't define any additional properties or methods. Disabling this rule
      // allows the empty interface to be used for extending purposes.
      files: ["env.ts"],
      rules: {
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-empty-interface": "off",
      },
    },
    {
      // This allows config files to use module.exports
      files: [".eslintrc.cjs", "commitlint.config.js"],
      rules: {
        "unicorn/prefer-module": "off",
      },
    },
    {
      files: ["commitlint.config.cjs"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
};
