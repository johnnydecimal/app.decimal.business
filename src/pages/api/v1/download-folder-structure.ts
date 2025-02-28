import type { APIRoute } from "astro";
import { createClerkClient, type User } from "@clerk/astro/server";
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

  let user: User | { notLoggedIn: boolean },
    useEmoji: boolean,
    useBlackSquare: boolean;
  if (userId) {
    // Replace it, if we're logged in
    user = await clerkClient.users.getUser(userId);
    // This might not be defined; the default is undefined unless user changes
    useEmoji = user.publicMetadata.useEmoji || false;
    // This is always set, as we do it whenever we load the page
    useBlackSquare = user.publicMetadata.useBlackSquare!;
  } else {
    user = { notLoggedIn: true };
    useEmoji = true;
    useBlackSquare = true;
  }

  const zip = new JSZip();

  const ids = getAllByType(system, "id") as IdEntry[];
  ids.forEach((id) => {
    const categoryNumber = id.number.split(".")[0];
    const categoryEntry = system[categoryNumber] as CategoryEntry;
    const categoryTitle = categoryEntry.title;
    const firstDigit = categoryNumber.charAt(0);
    const areaNumber = `${firstDigit}0-${firstDigit}9`;
    const areaEntry = system[areaNumber] as AreaEntry;
    const areaTitle = areaEntry.title;

    let idEmoji = "",
      categoryEmoji = "",
      areaEmoji = "";
    if (useEmoji) {
      // Only use an emoji if the item has one; otherwise, use an empty string
      idEmoji = id.emoji ? " " + id.emoji : "";
      categoryEmoji = categoryEntry.emoji ? " " + categoryEntry.emoji : "";
      areaEmoji = areaEntry.emoji ? " " + areaEntry.emoji : "";
    }

    // If our ID is a header, and useBlackSquare, then do that
    let idHeaderSquare = "";
    if (id.isHeader && useBlackSquare) {
      idHeaderSquare = "■ ";
    }

    // If we're not logged in, obfuscate the non-public IDs
    let idTitle = id.title;
    if ("notLoggedIn" in user) {
      if (!id.isPublic) {
        idTitle = id.title.replace(/[a-zA-Z0-9]/g, "_");
      }
    }

    zip.folder(
      `${areaNumber} ${areaTitle}${areaEmoji}/${categoryNumber} ${categoryTitle}${categoryEmoji}/${id.number} ${idHeaderSquare}${idTitle}${idEmoji}`
    );
  });

  const content = await zip.generateAsync({ type: "nodebuffer" });

  return new Response(content, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition":
        'attachment; filename="Johnny.Decimal Small Business System - folder structure.zip"',
    },
  });
};
