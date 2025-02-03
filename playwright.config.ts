import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  globalSetup: "./playwrightGlobalSetup.ts",
  testDir: "./tests",
  fullyParallel: true,
  retries: 1,
  reporter: [["html", { open: "on-failure" }]],
  use: {
    baseURL: "http://localhost:3012",
    trace: "on-first-retry",
    launchOptions: {
      env: {
        NODE_ENV: "test",
      },
    },
  },
  projects: [
    {
      name: "Desktop Chrome",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "Desktop Firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },
    {
      name: "Desktop Safari",
      use: {
        ...devices["Desktop Safari"],
      },
    },
    {
      name: "Mobile Safari, iPhone 13 mini",
      use: {
        ...devices["iPhone 13 Mini"],
      },
    },
    {
      name: "Android",
      use: {
        ...devices["Galaxy S8"],
      },
    },
  ],
});
