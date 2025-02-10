export default function obfuscate(isPublic: boolean, markdown: string): string {
  if (isPublic) {
    return markdown;
  }

  // Replace all alphabetic characters with the Unicode light shade character
  return markdown.replace(/[a-zA-Z‘’]/g, "░");
}
