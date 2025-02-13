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
  // Create a readable stream from the file
  const fileStream = fs.createReadStream(filePath);

  // Create an interface to read the file line-by-line
  const lineReader = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity, // Recognize all instances of CR LF ('\r\n') as a single line break
  });

  let arrayOfEntries = [];
  let currentEntry = [];

  // Step 1: take this one monster input and split it in to a bunch of more
  // manageable sections.
  // arrayOfEntries will end up being an array of arrays containing lines from
  // the file. In another function we'll iterate over that, and do the bits
  // where we calculate filenames etc.
  lineReader.on("line", (line) => {
    const currentLine = line.split(" ");
    if (currentLine[0] === "#" && currentLine[1].match(/^\d\d/)) {
      // We're starting a new entry. If there's a current entry, write it to
      // the output array and clear it.
      if (currentEntry.length) {
        arrayOfEntries.push(currentEntry);
        currentEntry = [];
      }

      // Push this line to currentEntry
      currentEntry.push(line);
    } else {
      currentEntry.push(line);
    }
  });

  lineReader.on("close", () => {
    console.log("~~ EOF ~~");
    arrayOfEntries.push(currentEntry);
    console.log("🚀 ~ parseMarkdownFile ~ arrayOfEntries", arrayOfEntries);
    return arrayOfEntries;
  });
}

// Call the function with the path to your Markdown file
const inputFilePath = process.argv[2] || "path/to/your/markdown/file.md";
const arrayOfEntries = generateArrayOfEntries(inputFilePath);

function processArrayOfEntries(arrayOfEntries) {
  arrayOfEntries.forEach((entry) => {
    // entry is an array of lines

    // Figure out this entry's title
    const number = entry[0].split(" ")[1];
    const title = entry[0].split(" ").slice(2);
    const fileTitle = title.join("-").toLowerCase().replaceAll("-&-", "-and-");
    const fileName = `${number}=${fileTitle}.md`;

    writeLinesToFile("src/data/sb_markdown/parsed", entry);
  });
}

processArrayOfEntries(arrayOfEntries);
