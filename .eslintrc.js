module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsConfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'default-case': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-throw-literal': 'off',
    'no-unused-vars': 'error',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unstable-nested-components': 'error',
    'import/newline-after-import': 'error',
    'newline-before-return': 'error',
  },
}
