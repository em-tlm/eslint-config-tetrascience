module.exports = {
  extends: ['airbnb'],
  root: true,
  rules: {
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'no-plusplus': 0,
    'no-process-env': 'error',
    radix: 0,
    'valid-typeof': 0,
    'no-underscore-dangle': ['error', {
      allowAfterThis: true,
    }],
  },
};
