#!/usr/bin/env ts-node

/**
 * See the comment at generateSbMarkdownFilesFromPagesExport.js for
 * instructions.
 */

import { fileURLToPath } from "url";
import { dirname } from "path";
import { promises as fs } from "fs";
import * as path from "path";
import matter from "gray-matter";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateFurtherReadingTypeScriptFilesFromMarkdown() {
  const inputDir = path.join(__dirname, "../data/sb_markdown");
  const outputDir = path.join(__dirname, "../data/sb_ts");

  // Ensure the output directory exists
  await fs.mkdir(outputDir, { recursive: true });
  // Get all markdown files in the input directory
  const files = await fs.readdir(inputDir);
  for (const file of files) {
    // Only process files with '+FR' in their name
    if (file.endsWith(".md") && file.includes("+FR")) {
      const filePath = path.join(inputDir, file);
      const markdownContent = await fs.readFile(filePath, "utf-8");

      // Parse the markdown content with gray-matter
      const { data: frontmatter, content: markdown } = matter(markdownContent);
      const lines = markdown.split("\n");

      // Extract number from filename
      const numberMatch = file.match(/^\d\d.*\+FR[0-9]/);
      const number = numberMatch ? numberMatch[0] : "";

      // Extract title from the first non-blank line
      const titleLine = lines.find((line) => line.trim() !== "");
      const title = titleLine
        ? titleLine.replace(/^#\s*/, "").trim()
        : "Untitled";

      // Remaining text for furtherReading.text
      const textStartIndex = titleLine ? lines.indexOf(titleLine) + 1 : 0;
      const remainingText = lines.slice(textStartIndex).join("\n").trim();

      const finalEntry = {
        number,
        title,
        type: "furtherReading",
        isPublic: frontmatter.isPublic || false, // Example of using frontmatter
        metadata: {
          createdDate: new Date().toISOString(),
          updatedDate: new Date().toISOString(),
        },
        extensions: {
          furtherReading: {
            text: remainingText,
          },
        },
      };

      const tsObject = JSON.stringify(finalEntry, null, 2);
      const tsContent = `// Auto-generated from ${file}
import type { FurtherReadingEntry } from "@data/smallBusinessFlat";
const entry: FurtherReadingEntry = ${tsObject};
export default entry;
`;

      const outputFileName = file
        .replace(/\.md$/, ".ts")
        .replace(/[^a-zA-Z0-9-\.\+]/gu, "")
        .replace("-.", ".")
        .replace("--", "-");
      const outputPath = path.join(outputDir, outputFileName);
      await fs.writeFile(outputPath, tsContent, "utf-8");
      console.log(`Generated ${outputFileName}`);
    }
  }
}

generateFurtherReadingTypeScriptFilesFromMarkdown().catch((err) => {
  console.error(err);
  process.exit(1);
});
