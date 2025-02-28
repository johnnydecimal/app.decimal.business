// https://clerk.com/docs/references/astro/clerk-middleware
import { clerkMiddleware } from "@clerk/astro/server";

export const onRequest = clerkMiddleware();
// const isProtectedRoute = createRouteMatcher(["/api(.*)"]);

// export const onRequest = clerkMiddleware((auth, context) => {
//   const { redirectToSignIn, userId } = auth();

//   if (!userId && isProtectedRoute(context.request)) {
//     return redirectToSignIn();
//   }
// });
