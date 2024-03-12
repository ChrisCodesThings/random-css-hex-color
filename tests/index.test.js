
const { default: testFunc } = await import("../");
const { default: isDark } = await import("@chriscodesthings/rgb-color-is-dark");
const { default: hexToRGBA } = await import("@chriscodesthings/css-hex-color-to-rgba");

describe("generate a random css hex colour", () => {
    test("a random colour", async () => {
        expect(testFunc()).toMatch(/^#[0-9a-f]{6}$/);
    });

    test("50 random dark colours", async () => {
        for (let i = 0; i < 50; i++) {
            const col = testFunc(true);
            const rgba = hexToRGBA(col);
            const dark = isDark(rgba);

            expect(dark).toEqual(true);
        }
    });

    test("50 random light colours", async () => {
        for (let i = 0; i < 50; i++) {
            const col = testFunc(false);
            const rgba = hexToRGBA(col);
            const light = !isDark(rgba);

            expect(light).toEqual(true);
        }
    });
});
