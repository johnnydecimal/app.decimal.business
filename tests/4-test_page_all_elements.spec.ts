import { test, expect } from "@playwright/test";

test("ID 00.99: test page with all elements", async ({ page }) => {
  await page.goto("/00.99");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
