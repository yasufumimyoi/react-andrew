module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  settings: {
    react: {
      version: '999.999.999',
    },
  },
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier/react',
  ],
  rules: {
    'react/prop-types': 'off',
    'no-console': 'warn',
    'no-var': 'error',
  },
};
