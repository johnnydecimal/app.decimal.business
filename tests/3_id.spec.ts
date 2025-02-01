import { test, expect } from "@playwright/test";

test("ID 11.11", async ({ page }) => {
  await page.goto("/test/11.11");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
test("ID 21.11", async ({ page }) => {
  await page.goto("/test/21.11");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
