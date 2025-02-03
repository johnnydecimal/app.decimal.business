import { test, expect } from "@playwright/test";
//

test("Area 10-19", async ({ page }) => {
  await page.goto("/10-19?env=test");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
test("Area 20-29", async ({ page }) => {
  await page.goto("/20-29?env=test");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
