import globals from 'globals';
import pluginJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    prettierConfig,
    {
        plugins: {
            prettier: prettierPlugin,
        },
        rules: {
            'no-var': 'error',
            'prefer-const': 'warn',
            'prettier/prettier': [
                'warn',
                {
                    endOfLine: 'auto',
                },
            ],
        },
    },
    {
        ignores: ['node_modules', 'dist'],
    },
];
