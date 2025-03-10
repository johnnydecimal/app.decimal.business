import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  globalSetup: "./playwrightGlobalSetup.ts",
  testDir: "./tests",
  fullyParallel: true,
  retries: 0,
  reporter: [["html", { open: "on-failure" }]],
  use: {
    baseURL: "http://localhost:3012",
    trace: "on-first-retry",
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
        launchOptions: {
          firefoxUserPrefs: { "layout.css.visited_links_enabled": false },
        },
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
