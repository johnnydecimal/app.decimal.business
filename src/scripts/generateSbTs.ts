#!/usr/bin/env ts-node
import { fileURLToPath } from "url";
import { dirname } from "path";
import { promises as fs } from "fs";
import * as path from "path";
import type { IdEntry } from "@data/smallBusinessFlat";
import matter from "gray-matter";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// The keys we'll support from the markdown. If a header does not exist then it is ignored.
// We map markdown header names (in lowercase) to our schema keys.
const SECTION_MAP: { [header: string]: keyof SmallBusinessEntry } = {
  description: "description",
  "ops manual": "opsManual",
  examples: "examples",
  "more info": "moreInfo",
  exceptions: "exceptions",
  "also see": "alsoSee",
  rationale: "rationale",
  links: "links",
  emoji: "emoji",
};

interface SmallBusinessEntry {
  number: string;
  title: string;
  description?: string;
  // These fields go into the `extensions.smallBusiness` object.
  opsManual?: string;
  examples?: string;
  moreInfo?: string;
  exceptions?: string;
  alsoSee?: string;
  rationale?: string;
  links?: string;
  emoji?: string;
}

// Parse a markdown file into a Partial<SmallBusinessEntry>
// 1. The first line (starting with "# ") is assumed to be "<number> <title>".
// 2. Headers starting with "## " are used to extract the supported sections.
function parseMarkdown(markdown: string): SmallBusinessEntry {
  const lines = markdown.split("\n");
  const entry: SmallBusinessEntry = { number: "", title: "" };

  // Get first header line (e.g. "# 11.11 Structure & registrations")
  const firstHeader = lines.find((line) => line.startsWith("# "));
  if (firstHeader) {
    const headerText = firstHeader.slice(2).trim();
    const [number, ...titleParts] = headerText.split(" ");
    entry.number = number;
    entry.title = titleParts.join(" ");
  }

  // Build a lookup for each section header.
  // For each line that starts with "## ", record its index and header title.
  const headerIndices: { [header: string]: number } = {};
  lines.forEach((line, idx) => {
    if (line.startsWith("## ")) {
      const header = line.slice(3).trim().toLowerCase();
      headerIndices[header] = idx;
    }
  });

  // For each supported header, extract its content from (headerIndex + 1) to the next "## " or EOF.
  Object.keys(SECTION_MAP).forEach((headerKey) => {
    const idx = headerIndices[headerKey];
    if (idx !== undefined) {
      // Determine the end index: first subsequent line that starts with "## ", or end of file.
      const subsequentIndices = Object.values(headerIndices).filter(
        (i) => i > idx
      );
      const endIdx =
        subsequentIndices.length > 0
          ? Math.min(...subsequentIndices)
          : lines.length;
      const content = lines
        .slice(idx + 1, endIdx)
        .join("\n")
        .trim()
        .replace(/\n+$/, "");
      // Only add if there is some content.
      if (content) {
        (entry as any)[SECTION_MAP[headerKey]] = content;
      }
    }
  });

  return entry;
}

async function generateTsFiles() {
  const inputDir = path.join(__dirname, "../data/sb_markdown");
  const outputDir = path.join(__dirname, "../data/sb_ts");

  // Ensure the output directory exists
  await fs.mkdir(outputDir, { recursive: true });
  // Get all markdown files in the input directory
  const files = await fs.readdir(inputDir);
  for (const file of files) {
    if (file.endsWith(".md")) {
      const filePath = path.join(inputDir, file);
      const markdownContent = await fs.readFile(filePath, "utf-8");

      // Parse the markdown content with gray-matter
      const { data: frontmatter, content: markdown } = matter(markdownContent);
      const parsed = parseMarkdown(markdown);

      // Construct a final entry conforming to IdEntry.
      const finalEntry: IdEntry = {
        number: parsed.number,
        title: parsed.title,
        description: parsed.description || "",
        type: "id",
        isPublic: frontmatter.isPublic || false,
        isHeader: frontmatter.isHeader || false,
        emoji: frontmatter.emoji || undefined,
        metadata: {
          createdDate: new Date().toISOString(),
          updatedDate: new Date().toISOString(),
        },
        extensions: { smallBusiness: {} },
      };

      const extKeys: (keyof SmallBusinessEntry)[] = [
        "opsManual",
        "examples",
        "moreInfo",
        "exceptions",
        "alsoSee",
        "rationale",
        "links",
        "emoji",
      ];
      extKeys.forEach((key) => {
        if ((parsed as any)[key]) {
          (
            finalEntry.extensions.smallBusiness as Record<
              string,
              string | undefined
            >
          )[key] = (parsed as any)[key];
        }
      });

      const tsObject = JSON.stringify(finalEntry, null, 2);
      const tsContent = `// Auto-generated from ${file}
import type { IdEntry } from "@data/smallBusinessFlat";
const entry: IdEntry = ${tsObject};
export default entry;
`;

      const outputFileName = file.replace(/\.md$/, ".ts");
      const outputPath = path.join(outputDir, outputFileName);
      await fs.writeFile(outputPath, tsContent, "utf-8");
      console.log(`Generated ${outputFileName}`);
    }
  }
}

generateTsFiles().catch((err) => {
  console.error(err);
  process.exit(1);
});
