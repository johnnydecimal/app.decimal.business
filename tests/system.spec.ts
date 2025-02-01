import { test, expect } from "@playwright/test";

test("System", async ({ page }) => {
  await page.goto("/test");
  await expect(page).toHaveScreenshot();
});
