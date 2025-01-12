import reactPlugin from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        structuredClone: 'readonly',
        browser: true,
        node: true,
      },
    },
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      semi: ['error', 'always'],
      'no-debugger': 'error',
      'no-console': 'error',
      indent: ['warn', 4, { SwitchCase: 1 }],
      'max-len': [
        'warn',
        400,
        { ignoreTemplateLiterals: true, ignoreStrings: true },
      ],
      'react/jsx-indent': ['error', 4],
      'react/jsx-filename-extension': [
        'warn',
        { extensions: ['.js', '.jsx'] },
      ],
      'no-param-reassign': 'off',
      'react/prop-types': [
        'error',
        { ignore: ['children'] },
      ],
      'object-curly-newline': [
        'error',
        {
          ObjectPattern: { multiline: true },
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
