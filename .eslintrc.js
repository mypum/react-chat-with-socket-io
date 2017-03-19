module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
      sourceType: 'module'
    },
    extends: [
      'standard',
      'standard-react'
    ],
    plugins: [],
    'rules': {
      'jsx-quotes': ["error", "prefer-double"]
    }
}
