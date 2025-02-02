// https://clerk.com/docs/references/astro/clerk-middleware
import { clerkMiddleware } from "@clerk/astro/server";

export const onRequest = clerkMiddleware();

/* ----------------------------------------------------------------------- */
// import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";

// const isProtectedRoute = createRouteMatcher(["/jdex(.*)"]);

// export const onRequest = clerkMiddleware((auth, context) => {
// const { redirectToSignIn, userId } = auth();

// // console.log("middleware: userId", userId);

// if (!userId && isProtectedRoute(context.request)) {
//   // Add custom logic to run before redirecting

//   return redirectToSignIn();
// }
// });
