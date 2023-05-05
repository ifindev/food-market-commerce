module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  overrides: [],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json'
  },
  rules: {
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'global-require': 'off',
    semi: 'off',
    '@typescript-eslint/semi': 'off',
    'object-curly-newline': 'off',
    'react/require-default-props': 'off', // Since we do not use prop-types,
    'import/no-cycle': 'off'
  }
}
