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
}
