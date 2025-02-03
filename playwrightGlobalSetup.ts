import type { FullConfig } from "@playwright/test";
import { clerkSetup } from "@clerk/testing/playwright";
import net from "net";
import dotenv from "dotenv";

async function isPortOpen(port: number, host = "localhost"): Promise<boolean> {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    socket.setTimeout(1000);
    socket.once("connect", () => {
      socket.destroy();
      resolve(true);
    });
    socket.once("error", () => {
      resolve(false);
    });
    socket.once("timeout", () => {
      resolve(false);
    });
    socket.connect(port, host);
  });
}

async function globalSetup(config: FullConfig) {
  dotenv.config();
  process.env.CLERK_PUBLISHABLE_KEY = process.env.PUBLIC_CLERK_PUBLISHABLE_KEY;
  // CLERK_SECRET_KEY should be okay?
  await clerkSetup();

  const PORT = 3012;
  const serverRunning = await isPortOpen(PORT);
  if (!serverRunning) {
    console.error(`\n❌ Server is not running on port ${PORT}. Exiting...\n`);
    process.exit(1);
  }
}

export default globalSetup;
