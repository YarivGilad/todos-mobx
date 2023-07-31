module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:mobx',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "mobx/missing-observer": "off",
  },
}
/* 
rules: {
  // these values are the same as recommended
  "mobx/exhaustive-make-observable": "warn",
  "mobx/unconditional-make-observable": "error",
  "mobx/missing-make-observable": "error",
  "mobx/missing-observer": "warn",
  "mobx/no-anonymous-observer": "warn"
} */