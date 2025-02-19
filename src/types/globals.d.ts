export {};

declare global {
  interface UserPublicMetadata {
    firstRunComplete?: boolean;
    jdexApp?: "none" | "bear" | "obsidian";
    obsidianVault?: string;
    useEmoji?: boolean;
    useBlackSquare?: boolean;
  }

  interface Window {
    goatcounter?: {
      no_onload?: boolean;
    };
  }
}
