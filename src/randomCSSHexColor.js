import random from '@chriscodesthings/ultimate-random-number-er';
import isDark from '@chriscodesthings/rgb-color-is-dark';

function randomRGB() {
    return [random(255), random(255), random(255)];
}

function decToHexPair(n) {
    return Number(n).toString(16).padStart(2, "0");
}

export default function (tone) {
    let [r, g, b] = randomRGB();

    if (typeof tone === 'boolean') {
        while (isDark(r, g, b) != tone) {
            [r, g, b] = randomRGB();
        }
    }

    return "#" + decToHexPair(r) + decToHexPair(g) + decToHexPair(b);
}
