import random from '@chriscodesthings/ultimate-random-number-er';
import isDark from '@chriscodesthings/rgb-color-is-dark';

function randomRGB() {
    return [random(255), random(255), random(255)];
}

function decToHexPair(n) {
    return Number(n).toString(16).padStart(2, "0");
}

export default function (tone) {
    let col = randomRGB();

    if (typeof tone === 'boolean') {
        while (isDark(col) != tone) {
            col = randomRGB();
        }
    }

    return "#" + decToHexPair(col[0]) + decToHexPair(col[1]) + decToHexPair(col[2]);
}
