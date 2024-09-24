import globals from "globals";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
        M: "readonly", // Add M as a global variable
        cash: "readonly", // Add cash as a global variable
        $: "readonly", // Add jQuery as a global variable
        jQuery: "readonly", // Add jQuery as a global variable
        define: "readonly", // Add define as a global variable
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
      },
    },
    rules: {
      "no-undef": "error",
    },
  },
  {
    files: ["*.test.js", "*.spec.js"],
    rules: {
      "no-unused-expressions": "off",
    },
  },
];
