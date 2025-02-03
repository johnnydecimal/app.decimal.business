import { test, expect } from "@playwright/test";

test("ID 11.11+HOW1", async ({ page }) => {
  await page.goto("/test/11.11+HOW1");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
