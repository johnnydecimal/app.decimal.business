import { defineAction, ActionError } from "astro:actions";
// import { z } from "astro:schema";
import { createClerkClient } from "@clerk/astro/server";
import { z } from "astro:content";

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
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: JSON.stringify(e),
        });
      }
    },
  }),
  setUseBlackSquare: defineAction({
    input: z.object({
      useBlackSquare: z.boolean(),
    }),
    handler: async (input, context) => {
      try {
        const { userId } = context.locals.auth();
        const clerkClient = createClerkClient({
          secretKey: import.meta.env.CLERK_SECRET_KEY,
        });
        const user = await clerkClient.users.updateUserMetadata(userId!, {
          publicMetadata: {
            useBlackSquare: input.useBlackSquare,
          },
        });
        return {
          status: "success",
          useBlackSquare: user.publicMetadata.useBlackSquare,
        };
      } catch (e) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: JSON.stringify(e),
        });
      }
    },
  }),
  setPublicMetadata: defineAction({
    input: z.object({
      key: z.string(),
      value: z.any(),
    }),
    handler: async (input, context) => {
      try {
        const { userId } = context.locals.auth();
        const clerkClient = createClerkClient({
          secretKey: import.meta.env.CLERK_SECRET_KEY,
        });

        // Get current metadata first
        const currentUser = await clerkClient.users.getUser(userId!);
        const currentMetadata = currentUser.publicMetadata || {};

        // Handle nested keys by splitting on dots
        const keys = input.key.split(".");
        let newMetadata = { ...currentMetadata };
        let temp = newMetadata;

        // Build nested structure
        for (let i = 0; i < keys.length - 1; i++) {
          temp[keys[i]] = temp[keys[i]] || {};
          temp = temp[keys[i]];
        }
        temp[keys[keys.length - 1]] = input.value;

        const user = await clerkClient.users.updateUserMetadata(userId!, {
          publicMetadata: newMetadata,
        });

        // Verify the nested value was set correctly
        let verifyValue = user.publicMetadata;
        for (const key of keys) {
          verifyValue = verifyValue[key];
        }
        if (verifyValue !== input.value) {
          throw new ActionError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Metadata was not set correctly",
          });
        }

        return { status: "success", publicMetadata: user.publicMetadata };
      } catch (e) {
        // TODO this is typed all wrong
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: JSON.stringify(e),
        });
      }
    },
  }),
  getPublicMetadata: defineAction({
    handler: async (_input, context) => {
      try {
        const { userId } = context.locals.auth();
        const clerkClient = createClerkClient({
          secretKey: import.meta.env.CLERK_SECRET_KEY,
        });
        const user = await clerkClient.users.getUser(userId!);
        return { status: "success", publicMetadata: user.publicMetadata };
      } catch (e) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: JSON.stringify(e),
        });
      }
    },
  }),
};
