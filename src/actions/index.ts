import { defineAction, ActionError } from "astro:actions";
// import { z } from "astro:schema";
import { createClerkClient } from "@clerk/astro/server";
import { z } from "astro:content";
import JSZip from "jszip";
import system, {
  getAllByType,
  type AreaEntry,
  type CategoryEntry,
  type IdEntry,
} from "@data/smallBusinessFlat.ts";

export const server = {
  flipFirstRun: defineAction({
    // input: z.object({
    // firstRunComplete: z.boolean(),
    // userId: z.string(),
    // }),
    handler: async (_input, context) => {
      const { userId } = context.locals.auth();
      try {
        const clerkClient = createClerkClient({
          secretKey: import.meta.env.CLERK_SECRET_KEY,
        });
        const user = await clerkClient.users.getUser(userId!);
        // console.log("user, from action.flipFirstRun", user);
        const firstRunComplete = user.publicMetadata
          .firstRunComplete as Boolean;
        console.log("firstRunComplete, from Clerk!", firstRunComplete);
        const result = await clerkClient.users.updateUserMetadata(userId!, {
          publicMetadata: {
            firstRunComplete: !firstRunComplete,
          },
        });
        console.log("result:", result.publicMetadata.firstRunComplete);
        return result.publicMetadata.firstRunComplete;
      } catch (e) {
        return JSON.stringify(e);
      }
    },
  }),
  setUseEmoji: defineAction({
    input: z.object({
      useEmoji: z.boolean(),
    }),
    handler: async (input, context) => {
      try {
        const { userId } = context.locals.auth();
        const clerkClient = createClerkClient({
          secretKey: import.meta.env.CLERK_SECRET_KEY,
        });
        const user = await clerkClient.users.updateUserMetadata(userId!, {
          publicMetadata: {
            useEmoji: input.useEmoji,
          },
        });
        return { status: "success", useEmoji: user.publicMetadata.useEmoji };
      } catch (e) {
        // TODO update to ActionError
        return { status: "error", message: JSON.stringify(e) };
      }
    },
  }),
};
