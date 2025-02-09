import { marked } from "marked";
import { markedSmartypants } from "marked-smartypants";
import wikiLinkify from "./wikiLinkify";

marked.use(markedSmartypants());

export async function parseMdWikiLink(
  text: string | undefined
): Promise<string | undefined> {
  if (!text) return undefined;
  return await marked.parse(wikiLinkify(text));
}
