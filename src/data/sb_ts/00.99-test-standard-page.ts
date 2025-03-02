// Auto-generated from 00.99-test-standard-page.md
import type { IdEntry } from "@data/smallBusinessFlat";
const entry: IdEntry = {
  "number": "00.99",
  "title": "Test standard page",
  "description": "A page that contains every basic layout element so that I can use it as an automated test target.",
  "type": "id",
  "isPublic": true,
  "isHeader": false,
  "isHidden": true,
  "noLabel": false,
  "metadata": {
    "createdDate": "2025-03-02T00:01:32.101Z",
    "updatedDate": "2025-03-02T00:01:32.101Z"
  },
  "extensions": {
    "smallBusiness": {
      "freeform": [
        {
          "header": "Paragraphs",
          "content": "This is a paragraph and is the first in its section.\n\n1. This is an ordered\n2. list surrounded (and this is a very long list item that will flow)\n3. by paragraphs.\n\nIncididunt proident commodo ex tempor ex cupidatat voluptate reprehenderit cupidatat reprehenderit id consequat irure. Est aute commodo enim eiusmod.\n\n- This is an\n- unordered list with at least one item long enough to run over\n- on to the next line.\n\nAlso surrounded by paragraphs. `This text here` is in single-backticks for code.\n\n- This is\n- an unordered list\n  - with a nested\n  - unordered\n- list."
        },
        {
          "header": "ol:first-child",
          "content": "1. An ordered list that is the first thing in its section.\n2. So we need to make sure it lines up with the top."
        },
        {
          "header": "ul:first-child",
          "content": "- An unordered list that is the first thing in its section.\n- So we need to make sure it lines up with the top."
        },
        {
          "header": "blockquote > ol:first-child",
          "content": "The blockquote surrounded by paras.\n\n> 1. First item.\n> 2. Second item.\n\nWe use these as footnotes."
        }
      ]
    }
  }
};
export default entry;
