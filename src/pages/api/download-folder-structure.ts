import type { APIRoute } from "astro";
import { createClerkClient } from "@clerk/astro/server";
import JSZip from "jszip";

import system, {
  getAllByType,
  type AreaEntry,
  type CategoryEntry,
  type IdEntry,
} from "@data/smallBusinessFlat.ts";

export const GET: APIRoute = async (context) => {
  const clerkClient = createClerkClient({
    secretKey: import.meta.env.CLERK_SECRET_KEY,
  });

  const userId = context.locals.auth().userId;
  if (!userId) throw new Error("This is impossible, route /api is protected.");

  const user = await clerkClient.users.getUser(userId);
  const useEmoji = user.publicMetadata.useEmoji || false;

  const zip = new JSZip();

  const ids = getAllByType(system, "id") as IdEntry[];
  ids.forEach((id) => {
    const categoryNumber = id.parentNumber;
    const categoryEntry = system[categoryNumber] as CategoryEntry;
    const categoryTitle = categoryEntry.title;
    const areaNumber = categoryEntry.parentNumber;
    const areaEntry = system[areaNumber] as AreaEntry;
    const areaTitle = areaEntry.title;
    let idEmoji, categoryEmoji, areaEmoji;
    if (useEmoji) {
      idEmoji = id.emoji ? " " + id.emoji : "";
      categoryEmoji = categoryEntry.emoji ? " " + categoryEntry.emoji : "";
      areaEmoji = areaEntry.emoji ? " " + areaEntry.emoji : "";
      zip.folder(
        `${areaNumber} ${areaTitle}${areaEmoji}/${categoryNumber} ${categoryTitle}${categoryEmoji}/${id.number} ${id.title}${idEmoji}`
      );
    } else {
      zip.folder(
        `${areaNumber} ${areaTitle}/${categoryNumber} ${categoryTitle}/${id.number} ${id.title}`
      );
    }
  });

  const content = await zip.generateAsync({ type: "nodebuffer" });

  // return new Response(JSON.stringify({ message: "This was a GET!" }));
  return new Response(content, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition":
        'attachment; filename="Johnny.Decimal Small Business System - folder structure.zip"',
    },
  });
};
