module.exports = {
  extends: ['./index'].map(require.resolve),
  root: true,
  rules: {
    strict: 0,
  },
};
