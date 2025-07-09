// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config')
const expoConfig = require('eslint-config-expo/flat')
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended')

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ['dist/*'],
    extends: [
      'plugin:@tanstack/eslint-plugin-query/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
    ],
    plugins: ['@tanstack/query'],
    rules: {
      '@tanstack/query/exhaustive-deps': 'error',
      '@tanstack/query/no-deprecated-options': 'error',
      '@tanstack/query/prefer-query-object-syntax': 'error',
      '@tanstack/query/stable-query-client': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
])
