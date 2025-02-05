import type { APIRoute } from "astro";
// import { clerkClient } from "@clerk/astro/server";

// export const GET: APIRoute = ({ params, request }) => {
export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify({
      message: "This API expects a POST.",
    })
  );
};

export const POST: APIRoute = async (_context) => {
  console.log("📮 updatePublicMetadata/POST");
  // const { userId, redirectToSignIn } = context.locals.auth();

  // if (!userId) {
  //   return redirectToSignIn();
  // }

  // const user = await clerkClient(context).users.getUser(userId);
  // return new Response(JSON.stringify({ user }));
  // const newPublicMetadata = context.request.json();
  // console.log(newPublicMetadata);

  // try {
  // } catch (error: any) {
  //   return new Response(JSON.stringify({ error: error.message }), {
  //     status: 500,
  //     headers: { "Content-Type": "application/json" },
  //   });
  // }
  return new Response(
    JSON.stringify({
      message: "This was a POST!",
    })
  );
};
