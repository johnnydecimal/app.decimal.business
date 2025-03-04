import { test, expect } from "@playwright/test";

test.use({
  colorScheme: "dark", // or 'light'
});

test("ID 00.99: dark mode", async ({ page }) => {
  await page.goto("/00.99");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
