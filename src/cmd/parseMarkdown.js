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
    const fullPath = `./src/data/sb_markdown/parsed/${fileName}`;

    // Extract any Further Reading text
    let furtherReading = [];
    let inFRSection = false;
    entry.forEach((line) => {
      if (!inFRSection) {
        if (line.startsWith("## Further reading")) {
          furtherReading.push(line);
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
    entryWithoutFR = [];
  });
}

generateArrayOfEntries(inputFilePath)
  .then((arrayOfEntries) => {
    processArrayOfEntries(arrayOfEntries);
  })
  .catch((error) => {
    console.error("Error reading file:", error);
  });
