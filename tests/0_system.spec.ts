import { test, expect } from "@playwright/test";
//

test("System", async ({ page }) => {
  await page.goto("/?env=test");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
