# eslint-config-tetrascience

A module of ES Lint rules for enforcing the TetraScience ECMAScript style guide.

## Usage

First, install the module as a `devDependency`:

```sh
$ npm install tetrascience/eslint-config-tetrascience -D
```

Then create an `.eslintrc` file to utilize the module:

```json
{
  "extends": "tetrascience"
}
```

## Style Guide

This module is based on the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript), and derives from [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb).  There are several overrides to the base module:

* `comma-dangle`: functions with multi-line parameter lists forbid dangling commas.

  ```json
  {
    "rules": {
      "comma-dangle": [
        "error",
        { "function": "never" }
      ]
    }
  }
  ```

* `no-plusplus`: usage of the `++` incrementing operator is allowed.

  ```json
  {
    "rules": {
      "no-plusplus": 0
    }
  }
  ```

* `no-process-env`: references to `process.env` are forbidden.

  ```json
  {
    "rules": {
      "no-process-env": "error"
    }
  }
  ```

* `radix`: specifying a radix argument on `parseInt()` is allowed.

  ```json
  {
    "rules": {
      "radix": 0
    }
  }
  ```

* `valid-typeof`: usage of the `typeof` operator is allowed.

## Unit Tests

The [`mocha`](https://mochajs.org/) test runner uses various patterns that may result in code that violates the `airbnb` style guide.  This module provides additional overrides for unit tests written for `mocha`.

### Usage

Simply, create an `.eslintrc` file in your "/test" directory that looks like this:

```json
{
  "extends": "tetrascience/mocha"
}
```

### Overrides

* `func-names`: a `function` does not require a name.

  ```json
  {
    "rules": {
      "func-names": 0
    }
  }
  ```

* `prefer-arrow-callback`: callback functions do not have to be an arrow function.

  ```json
  {
    "rules": {
      "prefer-arrow-callback": 0
    }
  }
  ```

* `space-before-function-paren`: a space is not required by the parentheses of a `function` declaration.

  ```json
  {
    "rules": {
      "space-before-function-paren": 0
    }
  }
  ```

* `global-require`: calls to `require()` do not need to be scoped to at the module level.

  ```json
  {
    "rules": {
      "global-require": 0
    }
  }
  ```

* `no-unused-expressions`: unused expressions are allowed.

  ```json
  {
    "rules": {
      "no-unused-expressions": 0
    }
  }
  ```
