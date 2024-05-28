import eslintPluginAstro from 'eslint-plugin-astro'
import js from '@eslint/js'
import oxlint from 'eslint-plugin-oxlint'
export default [
  // add more generic rule sets here, such as:
  js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  oxlint.configs['flat/recommended'], // oxlint should be the last one
  {
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
]
