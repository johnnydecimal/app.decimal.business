export {};

declare global {
  interface UserPublicMetadata {
    firstRunComplete?: boolean;
    jdexApp?: "none" | "bear" | "obsidian";
    obsidianVault?: string;
    useEmoji?: boolean;
    useBlackSquare?: boolean;
    onboarding?: {
      _1_tos?: string;
      _2_community?: string;
      _3_settings?: string;
      _4_folders?: string;
      _5_jdex?: string;
      complete?: boolean;
    };
  }

  interface Window {
    goatcounter?: {
      no_onload?: boolean;
    };
  }
}
