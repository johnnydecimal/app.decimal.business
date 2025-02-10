import { marked } from "marked";
import { markedSmartypants } from "marked-smartypants";
marked.use(markedSmartypants());

import wikiLinkify from "./wikiLinkify";
import obfuscate from "./obfuscate";

export default async function parseAndObfuscate(
  isPublic: boolean,
  markdown: string | undefined
): Promise<string | undefined> {
  if (!markdown) return undefined;

  // This returns a string with all the links wiki-linked. It's still Markdown.
  const processedText = wikiLinkify(markdown);
  const obfuscatedText = obfuscate(isPublic, processedText);
  return await marked.parse(obfuscatedText);
}
