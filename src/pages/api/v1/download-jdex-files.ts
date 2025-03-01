import type { APIRoute } from "astro";
import { createClerkClient, type User } from "@clerk/astro/server";
import JSZip from "jszip";

import system, {
  getAllByType,
  type AreaEntry,
  type CategoryEntry,
  type IdEntry,
} from "@data/smallBusinessFlat.ts";

/**
 * API endpoint to download Johnny.Decimal files as a ZIP archive
 *
 * Supports the following query parameters:
 * - nestedFolders: Whether to organize files in area/category folders ('true', 'false'). Default: 'false'
 * - test: A test parameter for debugging purposes
 *
 * Example usage:
 * <button onclick="window.location.href = '/api/v1/download-jdex-files?nestedFolders=true'">
 *   Download with nested folders
 * </button>
 */
export const GET: APIRoute = async (context) => {
  // Extract query parameters from the URL
  const { searchParams } = new URL(context.request.url);
  // Get the nestedFolders parameter (convert string to boolean)
  const nestedFolders = searchParams.get("nestedFolders") === "true";

  console.log("🚀 ~ download-jdex-files.ts ~ nestedFolders:", nestedFolders);

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

  // If using nested folders, create folder structure
  if (nestedFolders) {
    // Create area and category folders
    const areas = getAllByType(system, "area") as AreaEntry[];
    areas.forEach((area) => {
      zip.folder(area.number + " " + area.title);
    });

    const categories = getAllByType(system, "category") as CategoryEntry[];
    categories.forEach((category) => {
      const firstDigit = category.number.charAt(0);
      const areaNumber = `${firstDigit}0-${firstDigit}9`;
      const areaEntry = system[areaNumber] as AreaEntry;
      const areaFolder = areaNumber + " " + areaEntry.title;
      zip.folder(`${areaFolder}/${category.number} ${category.title}`);
    });
  }

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
    let description = id.description;
    if ("notLoggedIn" in user) {
      if (!id.isPublic) {
        idTitle = id.title.replace(/[a-zA-Z0-9]/g, "_");
        description = id.description.replace(/[a-zA-Z0-9]/g, "–");
        description = `> You downloaded the system in demo mode. This file's contents have been hidden. [Sign up here](https://sbs.johnnydecimal.com/00.01).\n\n${description}`;
      }
    }

    const fileName = `${id.number} ${idHeaderSquare}${idTitle}${idEmoji}.md`;
    const markdownContent = `${description}\n\n---\n\n`;

    // Add the markdown file to the zip, using the appropriate path based on nestedFolders
    if (nestedFolders) {
      const areaFolder = `${areaNumber} ${areaTitle}`;
      const categoryFolder = `${categoryNumber} ${categoryTitle}`;
      const filePath = `${areaFolder}/${categoryFolder}/${fileName}`;
      zip.file(filePath, markdownContent);
    } else {
      // Add the markdown file to the zip in the root
      zip.file(fileName, markdownContent);
    }
  });

  const content = await zip.generateAsync({ type: "nodebuffer" });

  // TODO stick a version number in this
  return new Response(content, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition":
        'attachment; filename="Johnny.Decimal Small Business System - markdown files.zip"',
    },
  });
};
