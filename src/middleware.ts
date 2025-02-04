// https://clerk.com/docs/references/astro/clerk-middleware
import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";

const isProtectedRoute = createRouteMatcher(["/api(.*)"]);

export const onRequest = clerkMiddleware((auth, context) => {
  const { redirectToSignIn, userId } = auth();

  if (!userId && isProtectedRoute(context.request)) {
    return redirectToSignIn();
  }
});
