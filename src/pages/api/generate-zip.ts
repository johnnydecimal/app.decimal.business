import type { APIRoute } from "astro";
import JSZip from "jszip";

export const GET: APIRoute = async ({ request }) => {
  const zip = new JSZip();

  // Create folders and add files
  zip.folder("documents")?.file("notes.txt", "Some notes");
  zip.folder("images")?.file("readme.txt", "This is the images folder");

  // Generate the ZIP file
  const content = await zip.generateAsync({ type: "nodebuffer" });

  return new Response(content, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": 'attachment; filename="files.zip"',
    },
  });
};
