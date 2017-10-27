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
    'func-style': 0,
    'no-continue': 0,
    'no-use-before-define': ['error', { 'functions': false }],
    'no-plusplus': 0,
    'no-process-env': 'error',
    radix: 0,
    'valid-typeof': 0,
    'no-underscore-dangle': ['error', {
      allowAfterThis: true,
    }],
  },
};
