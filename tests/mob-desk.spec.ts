import { test, expect } from "@playwright/test";
import { devices } from "@playwright/test";

test.describe("Visual Tests", () => {
  test("Desktop snapshot", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto("/test/10-19");
    expect(await page.screenshot()).toMatchSnapshot("desktop.png");
  });

  test("Mobile snapshot", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/test/10-19");
    expect(await page.screenshot()).toMatchSnapshot("mobile.png");
  });
});
