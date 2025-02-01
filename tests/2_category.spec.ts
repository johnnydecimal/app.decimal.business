import { test, expect } from "@playwright/test";

test("Category 11", async ({ page }) => {
  await page.goto("/test/11");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
test("Category 21", async ({ page }) => {
  await page.goto("/test/21");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
