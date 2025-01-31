// import { test, expect } from "@playwright/test";
// import { login } from "./helpers";

// test.describe("Visual Regression Tests", () => {
//   test.beforeEach(async ({ page }) => {
//     await login(page);
//   });

//   test("Home Page", async ({ page }) => {
//     await page.goto("/");
//     expect(await page.screenshot()).toMatchSnapshot("home-page.png");
//   });

//   test("Sign In Page", async ({ page }) => {
//     await page.goto("/sign-in");
//     expect(await page.screenshot()).toMatchSnapshot("sign-in-page.png");
//   });

//   test("Account Management Page", async ({ page }) => {
//     await page.goto("/account-management");
//     expect(await page.screenshot()).toMatchSnapshot(
//       "account-management-page.png"
//     );
//   });

//   test("Footer", async ({ page }) => {
//     await page.goto("/");
//     const footer = await page.locator("footer");
//     expect(await footer.screenshot()).toMatchSnapshot("footer.png");
//   });

//   test("Search Component", async ({ page }) => {
//     await page.goto("/");
//     const search = await page.locator("#search-container");
//     expect(await search.screenshot()).toMatchSnapshot("search-component.png");
//   });
// });
