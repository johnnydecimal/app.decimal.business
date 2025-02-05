import type { APIRoute } from "astro";
import JSZip from "jszip";
import { clerkClient } from "@clerk/astro/server";

import system, {
  getAllByType,
  type AreaEntry,
  type CategoryEntry,
  type IdEntry,
} from "@data/smallBusinessFlat.ts";

// export const GET: APIRoute = async ({ request }) => {
export const GET: APIRoute = async (context) => {
  const zip = new JSZip();
  console.log(context.locals.auth());
  const userId = context.locals.auth().userId;

  const clerk = clerkClient(context);
  const user = await clerk.users.getUser(userId!);
  console.log("user", user);

  const ids = getAllByType(system, "id") as IdEntry[];
  ids.forEach((id) => {
    const categoryNumber = id.parentNumber;
    const categoryEntry = system[categoryNumber] as CategoryEntry;
    const categoryTitle = categoryEntry.title;
    const areaNumber = categoryEntry.parentNumber;
    const areaEntry = system[areaNumber] as AreaEntry;
    const areaTitle = areaEntry.title;
    zip.folder(
      `${areaNumber} ${areaTitle}/${categoryNumber} ${categoryTitle}/${id.number} ${id.title}`
    );
  });

  const content = await zip.generateAsync({ type: "nodebuffer" });

  return new Response(JSON.stringify({ message: "This was a GET!" }));
  // return new Response(content, {
  //   headers: {
  //     "Content-Type": "application/zip",
  //     "Content-Disposition":
  //       'attachment; filename="Johnny.Decimal Small Business System - folder structure.zip"',
  //   },
  // });
};
