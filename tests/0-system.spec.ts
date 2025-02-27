import { test, expect } from "@playwright/test";
//

test("System", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
