import { test, expect } from "@playwright/test";
import { setupClerkTestingToken } from "@clerk/testing/playwright";

test("ID 11.11+HOW1", async ({ page }) => {
  await setupClerkTestingToken({ page });
  await page.goto("/test/11.11+HOW1");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
