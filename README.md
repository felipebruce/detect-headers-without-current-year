# eslint-plugin-detect-headers-without-current-year

Detect headers without current year strings.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

or if you use `yarn`

```
$ yarn add eslint -D
```

Next, install `eslint-plugin-detect-headers-without-current-year`:

```
$ npm install eslint-plugin-detect-headers-without-current-year --save-dev
```

or

```
$ yarn add eslint-plugin-detect-headers-without-current-year -D
```

## Usage

Add `detect-headers-without-current-year` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["detect-headers-without-current-year"],
  "rules": {
    "detect-headers-without-current-year/detect-headers-without-current-year": "error"
  }
}
```
