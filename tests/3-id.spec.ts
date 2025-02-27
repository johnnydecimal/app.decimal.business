import { test, expect } from "@playwright/test";

test("ID 11.11", async ({ page }) => {
  await page.goto("/11.12");
  await expect(page).toHaveScreenshot({ fullPage: true });

  // There should be a link to the vault
  // FIXME add this test
});
test("ID 11.13 should be obfuscated", async ({ page }) => {
  await page.goto("/11.13");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
