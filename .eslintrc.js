module.exports = {
  root: true,
  extends: '@callstack',
  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'no-undef': 'off',
        'react-native/no-raw-text': 'off',
        'react-native-a11y/has-accessibility-hint': 'off',
      },
    },
  ],
  env: {
    'jest/globals': true,
  },
};
