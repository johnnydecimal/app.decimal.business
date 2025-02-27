import { test, expect } from "@playwright/test";

test("ID 02.11 User stories", async ({ page }) => {
  await page.goto("/02.11");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
