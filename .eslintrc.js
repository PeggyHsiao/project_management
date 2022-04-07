module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': ['error', 'windows'],
    'import/extensions': ['error', 'always', { js: 'never', vue: 'never', json: 'never' }],
  },
};
