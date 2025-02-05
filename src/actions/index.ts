import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { createClerkClient } from "@clerk/astro/server";

export const server = {
  flipFirstRun: defineAction({
    // input: z.object({
    // firstRunComplete: z.boolean(),
    // userId: z.string(),
    // }),
    handler: async (_input, context) => {
      // console.log("actions: flipFirstRun handler running");
      const { userId } = context.locals.auth();
      const clerkClient = createClerkClient({
        secretKey: import.meta.env.CLERK_SECRET_KEY,
      });
      const user = await clerkClient.users.getUser(userId!);
      // console.log("user, from action.flipFirstRun", user);
      const firstRunComplete = user.publicMetadata.firstRunComplete as Boolean;
      console.log("firstRunComplete, from Clerk!", firstRunComplete);
      const result = await clerkClient.users.updateUserMetadata(userId!, {
        publicMetadata: {
          firstRunComplete: !firstRunComplete,
        },
      });
      console.log("result:", result.publicMetadata.firstRunComplete);
      return result.publicMetadata.firstRunComplete;
    },
  }),
};
