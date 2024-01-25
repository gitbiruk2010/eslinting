module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:vue/vue3-essential',
    // Added 'semistandard' to the extends array
    // npm install eslint-config-semistandard --save-dev --legacy-peer-deps

    'semistandard' 
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    // Added rule for semicolon usage
    'semi': [2, 'always'], 
   // Added rule for quote style
    'quotes': [2, 'single'] 
  }
}
