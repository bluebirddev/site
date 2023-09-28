// eslint-disable-next-line @typescript-eslint/no-var-requires
const { join } = require('path')

module.exports = {
    extends: [
        'eslint:recommended',
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'plugin:etc/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint'],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        project: join(__dirname, './tsconfig.json'),
        sourceType: 'module',
    },
    root: true,
    rules: {
        'prettier/prettier': 'warn',
    },
    ignorePatterns: ['**/__generated__/**'],
}
