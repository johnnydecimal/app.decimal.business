/**
 * This is NOT GOOD CODE. But this is a one-time pull from Lucy's Pages doc
 * to Markdown files here. So don't worry about it.
 *
 * - Export the Pages file as Markdown.
 * - Open it here and save it so the linter puts spaces between empty headers.
 * - _In-file_, replace all `---` and the other Pages block stuff.
 * - Tidy up the stuff at the front.
 * - Replace `## Emoji[\n\s\S]*?# ` with `# `.
 * - Fold the doc and make sure it all looks good.
 * - At the command line:
 *   node src/scripts/generateSbMarkdownFilesFromPagesExport.js \
 *        name_of_large_pages_output.md
 * - `npm run generate-sb` to turn those files in to TypeScript.
 */

// Import the 'fs' module to interact with the file system
import fs from "fs";
import readline from "readline";

// Function to write an array of lines to a file
function writeLinesToFile(filePath, linesArray) {
  // Join the array of lines into a single string with newline characters
  const fileContent = linesArray.join("\n");

  // Write the string to the specified file
  fs.writeFileSync(filePath, fileContent, "utf8");
}

// Function to parse a Markdown file and extract H1 headers and their content
function generateArrayOfEntries(filePath) {
  return new Promise((resolve, reject) => {
    // Create a readable stream from the file
    const fileStream = fs.createReadStream(filePath);

    // Create an interface to read the file line-by-line
    const lineReader = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity, // Recognize all instances of CR LF ('\r\n') as a single line break
    });

    let arrayOfEntries = [];
    let currentEntry = [];

    lineReader.on("line", (line) => {
      const currentLine = line.split(" ");
      if (currentLine[0] === "#" && currentLine[1].match(/^\d\d/)) {
        if (currentEntry.length) {
          arrayOfEntries.push(currentEntry);
          currentEntry = [];
        }
        currentEntry.push(line);
      } else {
        currentEntry.push(line);
      }
    });

    lineReader.on("close", () => {
      if (currentEntry.length) {
        arrayOfEntries.push(currentEntry);
      }
      console.log("~~ EOF ~~");
      resolve(arrayOfEntries);
    });

    lineReader.on("error", (err) => {
      reject(err);
    });
  });
}

// Call the function with the path to your Markdown file
const inputFilePath = process.argv[2] || "path/to/your/markdown/file.md";

function processArrayOfEntries(arrayOfEntries) {
  let furtherReadings = [];
  let entryWithoutFR = [];
  arrayOfEntries.forEach((entry) => {
    // entry is an array of lines

    // Figure out this entry's title
    const number = entry[0].split(" ")[1];
    const title = entry[0].split(" ").slice(2);
    const fileTitle = title
      .join("-")
      .toLowerCase()
      .replaceAll("-&-", "-and-")
      .replaceAll("■-", "")
      .replaceAll(",", "");
    const fileName = `${number}-${fileTitle}.md`;

    // Use the fileName to create the full path
    const fullPath = `./src/data/sb_markdown/${fileName}`;

    // Extract any Further Reading text
    let furtherReading = [];
    let inFRSection = false;
    entry.forEach((line) => {
      if (!inFRSection) {
        if (line.startsWith("## Further reading")) {
          furtherReading.push(`${entry[0]}`);
          // furtherReading.push(line); // We don't need it
          inFRSection = true;
        } else {
          entryWithoutFR.push(line);
        }
      } else {
        // We're in a FR section
        if (line.startsWith("## Ops manual")) {
          inFRSection = false;
        } else {
          furtherReading.push(line);
        }
      }
    });

    // Write the entry to the file
    writeLinesToFile(fullPath, entryWithoutFR);
    // Push this further reading on to our global further readings
    furtherReadings.push(furtherReading);
    entryWithoutFR = [];

    // Return further readings for future handling
  });
  return furtherReadings;
}

/**
 * @param {string[][]} furtherReadings
 */
function processFurtherReadings(furtherReadings) {
  furtherReadings.forEach((frBlock) => {
    // frBlock is a whole block from the original text. It starts with the
    // # ID Title of the item it relates to, then follows with one or more
    // # Further reading... sections

    // Get its parent entry details
    const entryNumber = frBlock[0].split(" ")[1];

    // We're done with it now, get rid of it
    frBlock.shift();

    // Start processing the remaining lines
    let frId = 1;
    let inFR = false;
    let thisFR = [];
    let thisFRFileTitle = "";
    // For every line
    frBlock.forEach((line) => {
      if (line.startsWith("# ")) {
        if (!inFR) {
          // We've found the first header
          // Write it
          thisFR.push(line);
          thisFRFileTitle = line
            .split(" ")
            .slice(1)
            .join("-")
            .replaceAll("?", "")
            .replaceAll(",", "")
            .replaceAll("‘", "")
            .replaceAll("’", "")
            .toLowerCase();
          inFR = true;
        } else {
          // We've found a subsequent header
          // Write out our current entry
          writeLinesToFile(
            `src/data/sb_markdown/${entryNumber}+FR${frId}-${thisFRFileTitle}.md`,
            thisFR
          );
          // Increment the FR
          frId++;
          thisFR = [];
          thisFR.push(line);
          thisFRFileTitle = line
            .split(" ")
            .slice(1)
            .join("-")
            .replaceAll("?", "")
            .replaceAll(",", "")
            .replaceAll("‘", "")
            .replaceAll("’", "")
            .toLowerCase();
        }
      } else {
        // This line isn't a header
        // We must be in an FR
        // Write it
        thisFR.push(line);
      }
    });
    // And close out the final in-buffer FR
    if (thisFR.length !== 1) {
      writeLinesToFile(
        `src/data/sb_markdown/${entryNumber}+FR${frId}-${thisFRFileTitle}.md`,
        thisFR
      );
    }
  });
}

const arrayOfEntries = await generateArrayOfEntries(inputFilePath);
const furtherReadings = processArrayOfEntries(arrayOfEntries);
// console.log("🚀 ~ furtherReadings:", furtherReadings);

processFurtherReadings(furtherReadings);
