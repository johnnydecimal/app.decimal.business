import { Context } from "https://edge.netlify.com"; // Import Context from Netlify's edge package
import { Clerk } from "@clerk/clerk-sdk-node";

export default async (request, context) => {
  const clerk = Clerk({ apiKey: "YOUR_CLERK_API_KEY" });

  // Extract cookies to check the session (assuming Clerk sets a cookie named "__session")
  const sessionCookie = request.headers
    .get("cookie")
    ?.match(/__session=([^;]+)/)?.[1];

  // If no session cookie is found, redirect to sign-in page
  if (!sessionCookie) {
    return Response.redirect("https://your-clerk-sign-in-url.com", 302);
  }

  try {
    // Validate the session cookie
    const session = await clerk.sessions.verifySession(sessionCookie);
    if (session) {
      // User is authenticated, allow the request to proceed
      return context.next();
    }
  } catch (error) {
    // If session verification fails, redirect to sign-in
    return Response.redirect("https://your-clerk-sign-in-url.com", 302);
  }
};
