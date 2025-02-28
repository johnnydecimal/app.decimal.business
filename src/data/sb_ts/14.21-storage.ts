// Auto-generated from 14.21-storage.md
import type { IdEntry } from "@data/smallBusinessFlat";
const entry: IdEntry = {
  "number": "14.21",
  "title": "Storage",
  "description": "The physical devices and cloud services that store your data.",
  "type": "id",
  "isPublic": false,
  "isHeader": false,
  "isHidden": false,
  "noLabel": false,
  "metadata": {
    "createdDate": "2025-02-28T07:32:04.869Z",
    "updatedDate": "2025-02-28T07:32:04.869Z"
  },
  "extensions": {
    "smallBusiness": {
      "examples": "Physical storage devices like hard drives and USB sticks; cloud storage services\nlike Dropbox, iCloud, Google Drive, Amazon Web Services, or OneDrive/SharePoint.",
      "overview": "This is the _places a thing can be_. Probably where you have your classic file structure. In the old days, this might have been some mapped drives on the company network (e.g. G: and J:). But now we commonly use separate storage devices, as well as storage services.\n\nThis ID is where to save important documents that come with a physical storage device, such as manuals, warranties, and duplicates of purchase and repair receipts (from [[13.33]]). And if you use cloud services, include the account details here (not the passwords though, those go in your password manager!).\n\nThis is also a place to keep any troubleshooting notes that you’ve written and settings/configuration you’ve applied.\n\nWe recommend naming subfolders by purchase date and model.",
      "exceptions": "This is for devices and services that you save data to and that you (mostly) control. Third-party software and applications that perform a task _and_ contain data are noted in [[14.22]].",
      "alsoSee": "If you sell a high-value storage device, record the details in [[13.26]] after processing the income.\n\nIf you purchase a high-value storage device, record the details in [[13.44]] after processing the asset.\n\nIf you’re paying off a storage device, process the bills in [[13.30]] or [[13.50]].\n\nSee [[14.31]] for the overall service that a storage device contributes to (e.g. file services, backups and recovery)."
    }
  }
};
export default entry;
