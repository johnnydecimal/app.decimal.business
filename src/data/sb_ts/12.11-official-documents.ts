// Auto-generated from 12.11-official-documents.md
import type { IdEntry } from "@data/smallBusinessFlat";
const entry: IdEntry = {
  "number": "12.11",
  "title": "Official documents",
  "description": "The important documents associated with owning, leasing, or selling a business premises with an address.",
  "type": "id",
  "isPublic": true,
  "isHeader": false,
  "metadata": {
    "createdDate": "2025-02-12T02:55:28.326Z",
    "updatedDate": "2025-02-12T02:55:28.326Z"
  },
  "extensions": {
    "smallBusiness": {
      "examples": "Leases and renewals; security deposits; inspection reports; purchasing contracts; property deeds; co-working space agreements.",
      "moreInfo": "This ID is for business premises with an address where you work privately, trade with the public, or just use as storage. It could be a building or land.\n\nYou might have more than one fixed location – that’s fine, just use subfolders labelled with the address to separate them. And remember to name files consistently and use the year-month-day method so everything sorts neatly.\n\nThis can also include the future, so store your lease applications or property searches here too.",
      "exceptions": "If your business ‘premises’ is mobile, like a food truck, van, or trailer, manage it down in [[12.40]].",
      "rationale": "Many businesses do their work out of multiple locations, which might be fixed or mobile.\n\nFor instance, an electrician might have a home office and a van. A cafe might have a retail space and a food truck. A personal trainer might have a home office, a van, and a storage unit for their equipment.\n\nSo we suggest keeping the fixed locations here and anything mobile below in [[12.40]], even if you mentally lump them together.\n\nMotor vehicles or anything else that can move or be towed have their own types of documentation, so it felt more logical to keep them separate."
    }
  }
};
export default entry;
