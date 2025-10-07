import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintjs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: eslintjs.configs.recommended
});

const eslintConfig = [
    eslintjs.configs.recommended,
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        rules: {
            '@next/next/no-html-link-for-pages': 'off',
            'no-console': ['warn', { allow: ['warn', 'error'] }],
            'no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_'
                }
            ]
        }
    },
    eslintConfigPrettier,
    {
        ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts']
    }
];
export default eslintConfig;