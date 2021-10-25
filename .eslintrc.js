module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module',
  },
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'prettier/prettier': 'error',
    'no-duplicate-imports': ['error', { includeExports: true }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
  globals: {},
}
