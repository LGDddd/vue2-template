module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    '@vue/standard'
  ],

  parserOptions: {
    parser: '@babel/eslint-parser'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/require-default-prop': 'off'
  }
}
