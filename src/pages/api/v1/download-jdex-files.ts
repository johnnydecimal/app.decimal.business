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

    let idEmoji = "";
    // categoryEmoji = "",
    // areaEmoji = "";
    if (useEmoji) {
      // Only use an emoji if the item has one; otherwise, use an empty string
      idEmoji = id.emoji ? " " + id.emoji : "";
      // categoryEmoji = categoryEntry.emoji ? " " + categoryEntry.emoji : "";
      // areaEmoji = areaEntry.emoji ? " " + areaEntry.emoji : "";
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

  // #region Make it an Obsidian vault
  zip.folder(".obsidian");
  zip.file(".obsidian/app.json", "{}");
  // appearance.json
  zip.file(
    ".obsidian/appearance.json",
    `{
  "accentColor": "#f04c00",
  "showRibbon": false
}`
  );
  // core-plugins.json
  zip.file(
    ".obsidian/core-plugins.json",
    `{
  "file-explorer": true,
  "global-search": true,
  "switcher": true,
  "graph": true,
  "backlink": true,
  "canvas": true,
  "outgoing-link": true,
  "tag-pane": true,
  "properties": false,
  "page-preview": true,
  "daily-notes": true,
  "templates": true,
  "note-composer": true,
  "command-palette": true,
  "slash-command": false,
  "editor-status": true,
  "bookmarks": true,
  "markdown-importer": false,
  "zk-prefixer": false,
  "random-note": false,
  "outline": true,
  "word-count": true,
  "slides": false,
  "audio-recorder": false,
  "workspaces": false,
  "file-recovery": true,
  "publish": false,
  "sync": true,
  "webviewer": false
}`
  );
  // workspace.json
  zip.file(
    ".obsidian/workspace.json",
    `{
  "main": {
    "id": "94d7e370b5189eca",
    "type": "split",
    "children": [
      {
        "id": "10dbed942e78f3e8",
        "type": "tabs",
        "children": [
          {
            "id": "b632958dbee9b3c6",
            "type": "leaf",
            "state": {
              "type": "markdown",
              "state": {
                "file": "Welcome to your JDex in Obsidian.md",
                "mode": "source",
                "source": false
              },
              "icon": "lucide-file",
              "title": "Welcome to your JDex in Obsidian"
            }
          }
        ]
      }
    ],
    "direction": "vertical"
  },
  "left": {
    "id": "b09c98036e7d885a",
    "type": "split",
    "children": [
      {
        "id": "ab58a0d54fdd48a0",
        "type": "tabs",
        "children": [
          {
            "id": "6b087cb5180d616e",
            "type": "leaf",
            "state": {
              "type": "file-explorer",
              "state": {
                "sortOrder": "alphabetical",
                "autoReveal": false
              },
              "icon": "lucide-folder-closed",
              "title": "File explorer"
            }
          },
          {
            "id": "c61f4bcbe1a26584",
            "type": "leaf",
            "state": {
              "type": "search",
              "state": {
                "query": "",
                "matchingCase": false,
                "explainSearch": false,
                "collapseAll": false,
                "extraContext": false,
                "sortOrder": "alphabetical"
              },
              "icon": "lucide-search",
              "title": "Search"
            }
          },
          {
            "id": "f81eaa92f4d322b3",
            "type": "leaf",
            "state": {
              "type": "bookmarks",
              "state": {},
              "icon": "lucide-bookmark",
              "title": "Bookmarks"
            }
          }
        ]
      }
    ],
    "direction": "horizontal",
    "width": 300
  },
  "right": {
    "id": "bd00adf8ff7f135d",
    "type": "split",
    "children": [
      {
        "id": "9001c30eb379c1f6",
        "type": "tabs",
        "children": [
          {
            "id": "d5aca17d20f4785c",
            "type": "leaf",
            "state": {
              "type": "backlink",
              "state": {
                "file": "Welcome to your JDex in Obsidian.md",
                "collapseAll": false,
                "extraContext": false,
                "sortOrder": "alphabetical",
                "showSearch": false,
                "searchQuery": "",
                "backlinkCollapsed": false,
                "unlinkedCollapsed": true
              },
              "icon": "links-coming-in",
              "title": "Backlinks for Welcome to your JDex in Obsidian"
            }
          },
          {
            "id": "10343962523ed972",
            "type": "leaf",
            "state": {
              "type": "outgoing-link",
              "state": {
                "file": "Welcome to your JDex in Obsidian.md",
                "linksCollapsed": false,
                "unlinkedCollapsed": true
              },
              "icon": "links-going-out",
              "title": "Outgoing links from Welcome to your JDex in Obsidian"
            }
          },
          {
            "id": "e8ce98ac70890dbe",
            "type": "leaf",
            "state": {
              "type": "tag",
              "state": {
                "sortOrder": "frequency",
                "useHierarchy": true,
                "showSearch": false,
                "searchQuery": ""
              },
              "icon": "lucide-tags",
              "title": "Tags"
            }
          },
          {
            "id": "57d7b0d25baf607a",
            "type": "leaf",
            "state": {
              "type": "outline",
              "state": {
                "file": "Welcome to your JDex in Obsidian.md",
                "followCursor": false,
                "showSearch": false,
                "searchQuery": ""
              },
              "icon": "lucide-list",
              "title": "Outline of Welcome to your JDex in Obsidian"
            }
          }
        ]
      }
    ],
    "direction": "horizontal",
    "width": 300,
    "collapsed": true
  },
  "left-ribbon": {
    "hiddenItems": {
      "switcher:Open quick switcher": false,
      "graph:Open graph view": false,
      "canvas:Create new canvas": false,
      "daily-notes:Open today's note": false,
      "templates:Insert template": false,
      "command-palette:Open command palette": false
    }
  },
  "active": "b632958dbee9b3c6",
  "lastOpenFiles": []
}`
  );
  // Welcome file
  zip.file(
    "Welcome to your JDex in Obsidian.md",
    `This system is under construction.
    
When it's complete, this download will contain a copy of each of the IDs from the system.

This becomes your local [JDex](https://jdcm.al/11.05).`
  );
  // #endregion

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
