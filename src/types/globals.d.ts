export {};

declare global {
  interface UserPublicMetadata {
    firstRunComplete?: boolean;
    jdexApp?: "none" | "bear" | "obsidian";
    obsidianVault?: string;
    useEmoji?: boolean;
  }
}
