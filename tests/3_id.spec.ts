import { test, expect } from "@playwright/test";

test("ID 11.11", async ({ page }) => {
  await page.goto("/11.11?env=test");
  await expect(page).toHaveScreenshot({ fullPage: true });

  // There should be a link to the vault
  const link = await page.getByRole("link", {
    name: "11.11 Structure & registrations",
  });
  await expect(link).toBeVisible();
  await expect(link).toHaveAttribute(
    "href",
    "obsidian://open?vault=test-run-no-vault&file=11.11%20Structure%20%26%20registrations"
  );
});
test("ID 21.11", async ({ page }) => {
  await page.goto("/21.11?env=test");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
