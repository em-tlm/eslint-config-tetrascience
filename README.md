# eslint-config-tetrascience

A module of ES Lint rules for enforcing the TetraScience ECMAScript style guide.

__Table of Contents__

* [Usage](#usage)
* [Style Guide](#style-guide)
* [Supersets](#supersets)
  + [Unit Tests](#unit-tests)
  + [Libraries](#libraries)

## Usage

### install the module as a `devDependency`

```sh
$ npm install tetrascience/eslint-config-tetrascience -D
```

or

```sh
$ yarn add tetrascience/eslint-config-tetrascience#^1.3.0 --dev
```

### create an `.eslintrc` file to utilize the module

```json
{
  "extends": "tetrascience"
}
```

### setup `eslint`
* install `eslint` as a `devDependency`

  ```sh
  $ yarn add eslint --dev
  ```

* Refer to [ts-tool-microservice-boilerplate](https://github.com/tetrascience/ts-tool-microservice-boilerplate#setup) for instructions on how to enable that on webstorm

### setup `prettier`

* install `prettier` as a `devDependency`
  ```sh
  $ yarn add prettier --dev
  ```

* or you can install `prettier` globally

* create a `prettier.config.js` or `.prettierrc.js`
  ```js
  const prettierConfig = require('eslint-config-tetrascience/prettier.config');
  module.exports = prettierConfig;
  ```

* Refer to https://prettier.io/docs/en/editors.html for instructions
  on how to integrate `prettier` with editors.

## Style Guide

This module is based on the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript), and derives from [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb).  There are several overrides to the base module:

* `no-use-before-define`: usage of the functions and variables before they are defined is allowed.

  ```json
  {
    "rules": {
      "no-use-before-define": ["error", { "functions": false, "variables": false }]
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

* `no-underscore-dangle`: dangling underscores in members of the
  `this` object is allowed.

  ```json
  {
    "rules": {
      "no-underscore-dangle": ["error", {
        "allowAfterThis": true
      }]
    }
  }
  ```

## Supersets

There are contexts where the base style guide adds restrictions that are not practical for the environment in which the code is run, or how the code will be consumed.  The `tetrascience` linter rules provide supersets to accomodate these situations.

### Unit Tests

The [`mocha`](https://mochajs.org/) test runner uses various patterns that may result in code that violates the `airbnb` style guide.  This module provides additional overrides for unit tests written for `mocha`.

#### Usage

Simply, create an `.eslintrc` file in your "/test" directory that looks like this:

```json
{
  "extends": "tetrascience/mocha"
}
```

#### Overrides

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

### Libraries

Node.js packages that are basic libraries may have a need to use slightly different styles than a larger, deployable application.

#### Usage

```json
{
  "extends": "tetrascience/lib"
}
```

#### Overrides

* `strict`: usage of `"use strict"` is at the discretion of the library author.

  ```json
  {
    "rules": {
      "strict": 0
    }
  }
  ```
