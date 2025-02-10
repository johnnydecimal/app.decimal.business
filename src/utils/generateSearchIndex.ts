import { writeFile } from "fs/promises";
import flattenedData from "src/data/smallBusinessFlat"; // Adjust path to your file

async function generateSearchIndex() {
  try {
    const searchIndex = Object.values(flattenedData).map((entry) => ({
      number: entry.number,
      title: entry.title,
      description: entry.description,
      type: entry.type,
      emoji: entry.emoji || null,
      metadata: entry.metadata,
      ...entry.extensions, // Include all fields from extensions
      ...("isPublic" in entry ? { isPublic: entry.isPublic } : {}),
      ...(entry.type === "area" ? { isPublic: true } : {}),
      ...(entry.type === "category" ? { isPublic: true } : {}),
    }));

    await writeFile(
      "./public/searchIndex.json",
      JSON.stringify(searchIndex, null, 2)
    );

    console.log("searchIndex.json generated successfully!");
  } catch (error) {
    console.error("Error generating search.json:", error);
  }
}

generateSearchIndex();
