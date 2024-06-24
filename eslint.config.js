import typescriptEslintParser from '@typescript-eslint/parser';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';

const config = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['tsconfig.json', 'eslint.config.js', 'dist/**', 'guide/**'],
    languageOptions: {
      parser: typescriptEslintParser,
      ecmaVersion: 2018,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        module: 'readonly',
        document: 'readonly',
        console: 'readonly',
        require: 'readonly',
        process: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      react: reactPlugin
    },
    rules: {
      ...typescriptEslintPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];

export default config;
