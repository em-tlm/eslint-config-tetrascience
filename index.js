module.exports = {
  // this will turn off ESLint's formatting rules
  extends: ['airbnb', 'prettier'],
  root: true,
  rules: {
    'no-continue': 0,
    'no-use-before-define': ['error', { functions: false, variables: false }],
    'no-plusplus': 0,
    'no-process-env': 'error',
    radix: 0,
    'valid-typeof': 0,
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: true,
      },
    ],
  },
};
