// @ts-check

import randomRGBColor from "@chriscodesthings/random-rgb-color";
import rgbaColourToCSSHex from "@chriscodesthings/rgba-color-to-css-hex";
import * as Types from "@chriscodesthings/basic-color-types";

/**
 * Picks a random colour in CSS hex format
 * @param {boolean} tone (optional) if true generates a dark colour, if false generates a light colour
 * @returns {Types.cssHexCode}
 */
export default function randomCSSHexColor(tone) {
    return rgbaColourToCSSHex(randomRGBColor(tone));
}
