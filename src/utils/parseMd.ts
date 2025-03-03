import { marked } from "marked";
// import { markedSmartypants } from "marked-smartypants";
// marked.use(markedSmartypants());

import obfuscate from "./obfuscate";
import wikiLinkify from "./wikiLinkify";

/**
 * # parseMd
 *
 * Takes Markdown and an optional boolean. If that boolean is omitted or
 * if it is true, this text is considered public and will not be obfuscated.
 * Otherwise, it will be obfuscated.
 *
 * Returns the Markdown as HTML.
 *
 * @param markdown - The Markdown to parse.
 * @param returnHtml - Whether to return the Markdown as HTML. Defaults to true.
 * @param isPublic - Whether the Markdown is public. Defaults to true.
 * @returns The Markdown as HTML.
 */
export default async function parseMd(
  markdown: string,
  returnHtml: boolean = true,
  isPublic: boolean = true
): Promise<string> {
  // This returns a string with all the links wiki-linked. It's still Markdown.
  const wikiLinkedMarkdown = wikiLinkify(markdown) as string;

  // TODO: this obfuscates the text of wiki-links for articles that are public;
  //       it'd be nice if it didn't, but that sounds quite complex so we're
  //       not doing it for now

  // Obfuscate the text with the Unicode light shade character
  const obfuscatedMarkdown = obfuscate(wikiLinkedMarkdown, isPublic);

  // If we don't want HTML, return the obfuscated Markdown
  if (!returnHtml) {
    return obfuscatedMarkdown;
  }

  // Otherwise, parse the obfuscated Markdown into HTML
  return await marked.parse(obfuscatedMarkdown);
}
