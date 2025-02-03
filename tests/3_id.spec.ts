import { test, expect } from "@playwright/test";
//

test("ID 11.11", async ({ page }) => {
  await page.goto("/11.11?env=test");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
test("ID 21.11", async ({ page }) => {
  await page.goto("/21.11?env=test");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
