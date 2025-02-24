/**
 * Just run me from the command line node ./...
 *
 * Adds the isPublic: true to the top of the files listed below.
 */
import * as fs from "fs";
import * as path from "path";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

// Specify the array of IDs
const ids = [
  // "11.12-licences-permits-and-accreditations",
  // "11.22-business-insurance-incidents-and-claims",
  // "11.33-dispute-resolution",
  // "11.41-hiring",
  // "11.53-other-learning-and-self-improvement",
  // "11.62-seeking-advice-and-support",
  // "12.12-office-insurance-incidents-and-claims",
  // "12.22-keep-us-secure",
  // "12.33-keep-it-nice-for-our-customers",
  // "12.43-permits-tolls-fees-and-other-running-expenses-(formal)",
  // "12.51-your-business-and-local-neighbourhood",
  // "13.13-reports-and-reviews",
  // "13.23-invoices-and-sales-for-your-work",
  // "13.31-inbox-and-processing-of-expenses",
  // "13.43-investments",
  // "13.54-bills",
  // "13.62-accounts-that-handle-tax",
  // "14.13-network-devices",
  // "14.22-data",
  // "14.33-support-contracts",
  // "14.42-technical-cybersecurity",
  // "14.51-domain-and-dns-management",
]; // Replace with your actual IDs

// Directory containing the markdown files
const directoryPath = path.join("src/data/sb_markdown");

// Frontmatter to add
const frontmatter = `---
isPublic: true
---\n\n`;

// Function to add frontmatter to a file
function addFrontmatterToFile(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}:`, err);
      return;
    }

    // Prepend the frontmatter
    const updatedContent = frontmatter + data;

    // Write the updated content back to the file
    fs.writeFile(filePath, updatedContent, "utf8", (err) => {
      if (err) {
        console.error(`Error writing file ${filePath}:`, err);
      } else {
        console.log(`Updated file: ${filePath}`);
      }
    });
  });
}

// Process each ID
ids.forEach((id) => {
  const filePath = path.join(directoryPath, `${id}.md`);
  if (fs.existsSync(filePath)) {
    addFrontmatterToFile(filePath);
  } else {
    console.warn(`File not found: ${filePath}`);
  }
});
