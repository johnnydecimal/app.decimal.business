// Auto-generated from 00.99-test-standard-page.md
import type { IdEntry } from "@data/smallBusinessFlat";
const entry: IdEntry = {
  "number": "00.99",
  "title": "Test standard page",
  "description": "A page that contains every basic layout element so that I can use it as an automated test target.\n\nLet's see what marked-smartypants is up to. \"This\" is 'this' but -- two --- and three dashes.",
  "type": "id",
  "isPublic": true,
  "isHeader": false,
  "isHidden": true,
  "noLabel": false,
  "metadata": {
    "createdDate": "2025-03-04T04:16:16.227Z",
    "updatedDate": "2025-03-04T04:16:16.227Z"
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
        },
        {
          "header": "Mermaid",
          "content": "<pre class=\"mermaid mermaid-light\">\n---\ntitle: Reach and engagement of campaigns\nconfig:\n  theme: default\n---\nquadrantChart\n  x-axis Low Reach --> High Reach\n  y-axis Low Engagement --> High Engagement\n  quadrant-1 We should expand\n  quadrant-2 Need to promote\n  quadrant-3 Re-evaluate\n  quadrant-4 May be improved\n  Campaign A: [0.3, 0.6]\n  Campaign B: [0.45, 0.23]\n  Campaign C: [0.57, 0.69]\n  Campaign D: [0.78, 0.34]\n  Campaign E: [0.40, 0.34]\n  Campaign F: [0.35, 0.78]\n</pre>\n\n<pre class=\"mermaid mermaid-dark\">\n---\ntitle: Reach and engagement of campaigns\nconfig:\n  theme: dark\n---\nquadrantChart\n  x-axis Low Reach --> High Reach\n  y-axis Low Engagement --> High Engagement\n  quadrant-1 We should expand\n  quadrant-2 Need to promote\n  quadrant-3 Re-evaluate\n  quadrant-4 May be improved\n  Campaign A: [0.3, 0.6]\n  Campaign B: [0.45, 0.23]\n  Campaign C: [0.57, 0.69]\n  Campaign D: [0.78, 0.34]\n  Campaign E: [0.40, 0.34]\n  Campaign F: [0.35, 0.78]\n</pre>\n\n<pre class=\"mermaid mermaid-light\">\nflowchart TB\n    n1[\"Start\"]\n    n2[\"40-49 Library of creative inputs\"]\n    n3[\"Make a thing; do the creative work\"]\n    n4[\"Ad-hoc per-job input\"]\n    n5[\"50-59 Portfolio of creative outputs\"]\n    n6[\"Stop\"]\n    n1 --> n2\n    n1 --> n4\n    n2 ---> n3\n    n4 --> n3\n    n5 -->|Use the output from a previous job| n3\n    n5 --> n6\n    n3 -->|If you produced something reusable, save it in your library| n2\n    n3 ---> n5\n\n    n1@{ shape: start}\n    n2@{ shape: internal-storage}\n    n4@{ shape: manual-input}\n    n3@{ shape: proc}\n    n5@{ shape: internal-storage}\n    n6@{ shape: stop}\n\n    click n5 \"/90-99\"\n</pre>\n\n<pre class=\"mermaid mermaid-dark\">\n---\nconfig:\n  theme: dark\n---\nflowchart TB\n    n1[\"Start\"]\n    n2[\"40-49 Library of creative inputs\"]\n    n3[\"Make a thing; do the creative work\"]\n    n4[\"Ad-hoc per-job input\"]\n    n5[\"50-59 Portfolio of creative outputs\"]\n    n6[\"Stop\"]\n    n1 --> n2\n    n1 --> n4\n    n2 ---> n3\n    n4 --> n3\n    n5 -->|You might use an output from a previous job| n3\n    n5 --> n6\n    n3 ---> n5\n    n3 -->|If you produced something reusable, save it in your library| n2\n\n    n1@{ shape: start}\n    n2@{ shape: internal-storage}\n    n4@{ shape: manual-input}\n    n3@{ shape: proc}\n    n5@{ shape: internal-storage}\n    n6@{ shape: stop}\n</pre>"
        }
      ]
    }
  }
};
export default entry;
