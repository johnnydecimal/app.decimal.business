// Auto-generated from 13.54-bills.md
import type { IdEntry } from "@data/smallBusinessFlat";
const entry: IdEntry = {
  "number": "13.54",
  "title": "Bills",
  "description": "The place to file processed bills.",
  "type": "id",
  "isPublic": true,
  "isHeader": false,
  "isHidden": false,
  "noLabel": false,
  "metadata": {
    "createdDate": "2025-02-28T05:44:44.448Z",
    "updatedDate": "2025-02-28T05:44:44.448Z"
  },
  "extensions": {
    "smallBusiness": {
      "overview": "We’ve defined a ‘bill’ as something you must make time to pay. It’s outstanding and requires action, probably by a due date. As opposed to expenses that you have already paid for either on the spot (i.e. with a card), or via an automatic payment (i.e. a direct debit).\n\nAs per the ops manual, once you’ve processed the bill in [[13.51]], store it here. For example, you have a food truck and receive a one-off bill for extra gas bottles delivered for an event. Put the bill in the liabilities inbox until you process it. Then permanently file it here and, if you want, add a copy to [[12.31]].\n\nWe recommend using the year-month method when saving this kind of paperwork so everything sorts neatly. And subfolder by bill issuer.",
      "exceptions": "These are not expenses that are paid on the spot or automatically, manage those in [[13.30]].",
      "alsoSee": "[We say there is one in the text]"
    }
  }
};
export default entry;
