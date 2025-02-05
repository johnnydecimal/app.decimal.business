import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const textContent = "This is a dynamically generated file.";
  const filename = "file.txt";

  return new Response(textContent, {
    headers: {
      "Content-Type": "text/plain",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
};
