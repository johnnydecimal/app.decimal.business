1. Run the node script. These instructions apply to the IDs in a single category.

- If you want to do it to all IDs that'll work, but you'll need to do them as one flat file and then slot them in to their final categories at the end.

2. This gives you an object with "ID: Title" as the first key.
3. Add `{ "ids": ... }` wrapper.
4. Each key is the full description. We only need the ID, but below we need the id and the description.

- Find: `    "(1\d\.\d\d) (.*)": \{`
- Replace: `    "$1": {\n      "id": "$1",\n      "title": "$2",`

5. Convert the remaining keys to their schema equivalents, e.g. "More info" > "moreInfo". Include the double-quotes in the f/r so you don't pick up strays.
6. All these keys need to be nested in `extensions: { smallBusiness { ... }}`.

- Find: ` *"examples":`
- Replace: `      "extensions": {\n       "smallBusiness": {\n        "examples":`

7. Close those two nestings.

- Find: `\},\n(.*"1\d\.\d\d")`
- Replace: `}}},$1`
- Add 2x closing brackets at eof.

8. Take header squares out > set isHeader.

- Find: `■ (.*)\n`
- Replace: `$1\n      "isHeader": true,\n`

9. Handle emoji. Just do a manual f/r, there aren't that many.

- Ah yeah and they're in the wrong place. Just move 'em.
- Find: `,\n.*"emoji": ""`
- Replace: ``

10. Add metadata.

- Find: `(.*"extensions")`
- Replace: `"metadata": { "createdDate": "2024-11-19", "updatedDate": "2024-11-19"},\n$1`
