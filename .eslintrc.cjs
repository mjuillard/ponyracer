/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier'
  ],
  ignorePatterns: ['dist', 'results', 'coverage', '*.d.ts'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    'vue/attributes-order': 'off',
    'vue/attribute-hyphenation': ['error', 'never'],
    'vue/component-api-style': ['error', ['script-setup']],
    'vue/multi-word-component-names': 'off',
    'vue/v-on-event-hyphenation': 'off',
    // TODO re-enable when https://github.com/vuejs/eslint-plugin-vue/issues/2126 is fixed
    'vue/require-explicit-emits': 'off'
  },
  overrides: [
    {
      files: ['cypress/e2e/**/*.cy.ts'],
      extends: ['plugin:cypress/recommended']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
};
