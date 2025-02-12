// Auto-generated from 13.24-passive-income.md
import type { IdEntry } from "@data/smallBusinessFlat";
const entry: IdEntry = {
  "number": "13.24",
  "title": "Passive income",
  "description": "The place to file processed investment returns.",
  "type": "id",
  "isPublic": false,
  "isHeader": false,
  "metadata": {
    "createdDate": "2025-02-12T04:13:58.346Z",
    "updatedDate": "2025-02-12T04:13:58.346Z"
  },
  "extensions": {
    "smallBusiness": {
      "examples": "Interest; dividends; rental payments.",
      "overview": "If you receive any kind of passive income, store the formal records here after they’ve been processed as income. For instance, the statements and letters that say you’ve earned money from a cash investment or other asset.",
      "exceptions": "This is not for ownership paperwork – that lives with the asset/investment itself (i.e. don’t store share certificates here, those go in [[13.43]]).",
      "rationale": "We decided to separate the ownership records for assets/investments and their earnings for clarity and neatness. In this ID we’re only interested in filing the processed income earned.\n\nFor instance:\n\n```\nASSET/INVESTMENT      PASSIVE INCOME\n(stored in 13.40)     (stored here)\n═════════════════════════════════════\nCash term deposit     Interest\nShares                Dividend\nProperty              Rent\n```"
    }
  }
};
export default entry;
