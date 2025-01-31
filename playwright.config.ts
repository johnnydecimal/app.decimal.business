// import { defineConfig, devices } from "@playwright/test";

// export default defineConfig({
//   testDir: "./tests",
//   fullyParallel: true,
//   retries: 1,
//   reporter: [["html", { open: "never" }]],
//   use: {
//     baseURL: "http://localhost:3000",
//     trace: "on-first-retry",
//   },
//   projects: [
//     {
//       name: "Desktop Chrome",
//       use: { ...devices["Desktop Chrome"] },
//     },
//     {
//       name: "Desktop Firefox",
//       use: { ...devices["Desktop Firefox"] },
//     },
//     {
//       name: "Desktop Safari",
//       use: { ...devices["Desktop Safari"] },
//     },
//   ],
// });
