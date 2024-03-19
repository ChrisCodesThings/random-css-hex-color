# random-css-hex-color &middot; [![Test workflow status](https://github.com/ChrisCodesThings/random-css-hex-color/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/random-css-hex-color)](https://www.npmjs.com/package/@chriscodesthings/random-css-hex-color) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Generates a random color in CSS hex format**

## Install

```sh
npm install --save @chriscodesthings/random-css-hex-color
```

## Use

```js
import randomHexColor from '@chriscodesthings/random-css-hex-color';

console.log(randomHexColor());
// => #c7a34b
```

## Syntax

```js
randomHexColor(tone);
```

### Parameters

- *tone*: If undefined, any color is returned. If true, color is dark based on YIQ calculation. If false, color is light based on YIQ calculation.

### Return Value

Returns a CSS hex color code string.

## Description

Does what it says on the tin.
