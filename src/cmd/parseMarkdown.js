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
function parseMarkdownFile(filePath) {
  // Create a readable stream from the file
  const fileStream = fs.createReadStream(filePath);

  // Create an interface to read the file line-by-line
  const lineReader = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity, // Recognize all instances of CR LF ('\r\n') as a single line break
  });

  // Initialize variables to store the current header and its content
  let currentH1 = null;
  let currentEntry = [];
  let currentNumber = null;
  let currentTitle = null;
  let currentFilename = null;
  let furtherReadingEntry = false;
  let furtherReadingId = 1;

  // Event listener for each line read from the file
  lineReader.on("line", (line) => {
    // console.log("🚀 ~ lineReader.on ~ line:", line);
    const currentLineArray = line
      .toLowerCase()
      .replaceAll("&", "and")
      .replaceAll("■ ", "")
      .replaceAll(",", "")
      .split(" ");

    // Are we in a further reading entry section?
    if (furtherReadingEntry) {
    }

    // Is this line a legitimate header? If so, start a new entry after writing
    // out the current entry and clearing some values
    if (currentLineArray[0] === "#" && currentLineArray[1].match(/^\d\d/)) {
      // Write the current buffer
      writeLinesToFile(
        `src/data/sb_markdown/parsed/${currentFilename}`,
        currentEntry
      );
      // Clear values
      currentEntry = [];
      currentNumber = null;
      currentTitle = null;
      currentFilename = null;

      // Process this entry
      // Add the header line to the entry
      currentEntry.push(line);

      // Figure out our number & title
      currentNumber = currentLineArray[1];
      console.log("🚀 ~ lineReader.on ~ currentNumber:", currentNumber);
      currentTitle = currentLineArray.slice(2).join("-");
      console.log("🚀 ~ lineReader.on ~ currentTitle:", currentTitle);
      currentFilename = `${currentNumber}-${currentTitle}.md`;
      console.log("🚀 ~ lineReader.on ~ currentFilename:", currentFilename);
    } else if (line.startsWith("## Further reading")) {
      // Obviously we've hit a further reading
      // Set the flag so on our next line-loop we know we're looking for it
      furtherReadingEntry = true;
    } else {
      // This is just another line of the entry
      currentEntry.push(line);
    }
  });

  lineReader.on("close", () => {
    writeLinesToFile(
      `src/data/sb_markdown/parsed/${currentFilename}`,
      currentEntry
    );
    console.log("~~ EOF ~~");
  });
}

// Call the function with the path to your Markdown file
const inputFilePath = process.argv[2] || "path/to/your/markdown/file.md";
parseMarkdownFile(inputFilePath);
