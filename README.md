# random-css-hex-color <br> [![Test workflow status](https://github.com/ChrisCodesThings/random-css-hex-color/actions/workflows/test.yml/badge.svg)](../../actions/workflows/test.yml) [![NPM Version](https://img.shields.io/npm/v/@chriscodesthings/random-css-hex-color)](https://www.npmjs.com/package/@chriscodesthings/random-css-hex-color) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **Generates a random color in CSS hex format**

## Description

Generates a random color in CSS hex format.

### See...
- [Install/Usage](#install "Install and Usage")
- [Types](#types "Types")
- [Syntax](#syntax "Syntax")
- [Examples](#examples "Examples")
- [See Also](#see-also "See Also")

---

## Install

```sh
npm install --save @chriscodesthings/random-css-hex-color
```

## Use

```js
import randomCSSHexColor from '@chriscodesthings/random-css-hex-color';

console.log(randomCSSHexColor());
// => #c7a34b
```

## Types

This package uses types from:
- [**basic-color-types**: Defines named types for common color formats](https://github.com/ChrisCodesThings/basic-color-types "Defines named types for common color formats")

## Syntax

```js
randomCSSHexColor(tone);
```

### Parameters

- *tone* (optional): If true, colour is dark, if false, colour is light, based on YIQ calculation. 

### Return Value

Returns a CSS hex color code string.

## Examples

```js
// pick a page background colour on page load
window.addEventListener("load", () => {

// light colour background should look ok with black text
    document.body.style.background = randomCSSHexColor(false);
});
```

## See Also...

- [**random-rgb-color**: Generates a random color in RGB format](https://github.com/ChrisCodesThings/random-rgb-color "Generates a random color in RGB format")
- [**rgb-color-is-dark**: Determine if a color in RGB format is dark using YIQ calculation](https://github.com/ChrisCodesThings/rgb-color-is-dark "Determine if a color in RGB format is dark using YIQ calculation")
- [**is-css-hex-color**: Determine if a string is a hex color code](https://github.com/ChrisCodesThings/is-css-hex-color "Determine if a string is a hex color code")
- [**color-object**: Simple, lightweight class to store and manipulate a color, and convert between formats](https://github.com/ChrisCodesThings/color-object "Simple, lightweight class to store and manipulate a color, and convert between formats")
