import { test, expect } from "@playwright/test";
// import { setupClerkTestingToken } from "@clerk/testing/playwright";

test("System", async ({ page }) => {
  // await setupClerkTestingToken({ page });

  await page.goto("/test");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
