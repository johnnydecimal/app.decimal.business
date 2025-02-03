import { test, expect } from "@playwright/test";
//

test("ID 11.11+HOW1", async ({ page }) => {
  await page.goto("/11.11+HOW1?env=test");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
