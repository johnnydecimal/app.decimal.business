import type { IDWithACContext } from "./generateIdsWithACContext";

/**
 * Convert [[wiki-links]] in the text to <a href="..."> full links.
 */
function wikiLinkify(text: string, idsWithACContext: IDWithACContext[]) {
  return text.replace(/\[\[(\d{2}.\d{2})\]\]/g, (_match, p1) => {
    const foundId = idsWithACContext.find((obj) => obj.idNumber === p1);
    // Use idTitle if found, otherwise fall back to just displaying the number
    const idTitle = foundId ? foundId.idTitle : p1;
    return `<a href="${p1}">${p1} ${idTitle}</a>`;
  });
}

export default wikiLinkify;
