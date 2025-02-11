import sb from "@data/smallBusinessFlat";

//   - Wiki-linking the descriptive text.
function wikiLinkify(text: string | undefined): string | undefined {
  if (!text) {
    return undefined;
  }
  // `text` is a Markdown string which might contain wiki-links like [[12.34]].
  return text.replace(/\[\[(\d{2}.\d{2})\]\]/g, (_match, p1) => {
    // If a match was made, `p1` is an ID. Return a [Markdown](link) to it.
    if (sb[p1]) {
      return `[${p1} ${sb[p1].title}](/${p1})`;
    } else {
      console.warn(
        `🚨 ID.astro: you tried to wiki-link to an ID that doesn't exist: ${p1}`
      );
      // Return the original text.
      return text;
    }
  });
}

export default wikiLinkify;
