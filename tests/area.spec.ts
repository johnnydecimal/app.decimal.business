import { test, expect } from "@playwright/test";

test.describe("Area", () => {
  test("Desktop snapshot", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 1720 });
    await page.goto("/test/10-19");
    expect(await page.screenshot()).toMatchSnapshot("area-desk-10-19.png");
    await page.goto("/test/20-29");
    expect(await page.screenshot()).toMatchSnapshot("area-desk-20-29.png");
  });

  test("Mobile snapshot", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 1812 });
    await page.goto("/test/10-19");
    expect(await page.screenshot()).toMatchSnapshot("area-mob-10-19.png");
    await page.goto("/test/20-29");
    expect(await page.screenshot()).toMatchSnapshot("area-mob-20-29.png");
  });
});
