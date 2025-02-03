import type { APIRoute } from "astro";
import JSZip from "jszip";

import system, {
  getAllByType,
  type AreaEntry,
  type CategoryEntry,
  type IdEntry,
} from "@data/smallBusinessFlat.ts";

export const GET: APIRoute = async ({ request }) => {
  const zip = new JSZip();

  // For each area in smallBusinessFlat.ts
  // const areas = getAllByType(system, "area") as AreaEntry[];
  // const categories = getAllByType(system, "category") as CategoryEntry[];

  // areas.forEach((area) => {
  //   zip.folder(`${area.number} ${area.title}`);
  // });

  const ids = getAllByType(system, "id") as IdEntry[];
  ids.forEach((id) => {
    const categoryNumber = id.parentNumber;
    const categoryEntry = system[categoryNumber] as CategoryEntry;
    const categoryTitle = categoryEntry.title;
    const areaNumber = categoryEntry.parentNumber;
    const areaEntry = system[areaNumber];
    const areaTitle = areaEntry.title;
    zip.folder(
      `${areaNumber} ${areaTitle}/${categoryNumber} ${categoryTitle}/${id.number} ${id.title}`
    );
  });

  // Create folders and add files
  // zip.folder("documents")?.file("notes.txt", "Some notes");
  // zip.folder("images")?.file("readme.txt", "This is the images folder");

  // Generate the ZIP file
  const content = await zip.generateAsync({ type: "nodebuffer" });

  return new Response(content, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition":
        'attachment; filename="Johnny.Decimal Small Business System - folder structure.zip"',
    },
  });
};
