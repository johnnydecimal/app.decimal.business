import { test, expect } from "@playwright/test";
import { setupClerkTestingToken } from "@clerk/testing/playwright";

test("Category 11", async ({ page }) => {
  await setupClerkTestingToken({ page });
  await page.goto("/test/11");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
test("Category 21", async ({ page }) => {
  await setupClerkTestingToken({ page });
  await page.goto("/test/21");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
