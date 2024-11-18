1. Run the node script.
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
