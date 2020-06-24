module.exports = {
    env: {
        es6: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'prettier',
        'prettier/react',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'jsx-a11y',
        'import',
        'prettier',
        'react-hooks'
    ],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.jsx', '.js', '.tsx', '.ts']
            },
        ],
        'import/prefer-default-export': 'off',
        'no-unused-vars': ['error', {
            argsIgnorePattern: '^_'
        }],
        'react-/jsx-one-expression-per-line': 'off',
        'global-require': 'off',
        'react-native/no-raw-text': 'off',
        'no-param-reassign': 'off',
        'no_underscore-dangle': 'off',
        camelcase: 'off',
        'no-console': ['warn', {
            allow: ['tron']
        }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-props-no-spreading': ['error', {
            custom: 'ignore'
        }],
        'no-undef': 'off',
        'import/extensions': [0, { 'tsx': 'never'}],
        'import/no-unresolved': [0, { ignore: ['\.tsx$', '\.png$']}]
    },
};