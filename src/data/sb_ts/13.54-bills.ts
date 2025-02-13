// Auto-generated from 13.54-bills.md
import type { IdEntry } from "@data/smallBusinessFlat";
const entry: IdEntry = {
  "number": "13.54",
  "title": "Bills",
  "description": "The place to file processed bills.",
  "type": "id",
  "isPublic": false,
  "isHeader": false,
  "metadata": {
    "createdDate": "2025-02-13T03:34:05.414Z",
    "updatedDate": "2025-02-13T03:34:05.414Z"
  },
  "extensions": {
    "smallBusiness": {
      "overview": "We’ve defined a ‘bill’ as something you must make time to pay. It’s outstanding and requires action, probably by a due date. As opposed to expenses that you have already paid for either on the spot (i.e. with a card), or via an automatic payment (i.e. a direct debit).\n\nAs per the ops manual, once you’ve processed the bill in [[13.51]], store it here. We recommend using the year-month method when saving this kind of paperwork so everything sorts neatly. And subfolder by bill issuer.\n\nFor instance, let’s say you have a food truck and receive a one-off bill from someone who delivered extra gas bottles for an event. Put the bill in the liabilities inbox until you process it. Then permanently file it here and, if you want, add a copy to [[12.31]].\n\n### How to be a small hero\n\nIf you can, consider paying invoices from sole traders on the day they’re received. One company used to do this for Lucy. She didn’t ask them to, they just did it. Every time. It was an amazing gesture towards the smallest of business owners and made a huge difference to her cashflow and ability to trade.",
      "exceptions": "These are not expenses that are paid on the spot or automatically, manage those in [[13.30]].",
      "rationale": "### Classifying automated bill payments as expenses\n\nNormally we think of the bills that we receive by email or post as liabilities. But we made a decision here to classify things like _direct debits_ of bill payments as going ‘straight to expenses’. They’re paid automatically and you don’t need to plan a time to physically transfer money. Those types of liabilities tend to recur predictably, either monthly or quarterly.\n\nFor instance, you’ve set up direct debits for your utility bills. They’re paid automatically on the due date. Now they’re just expense transactions on your bank statement that you process and file in [[13.30]].\n\nCompare this to other bills that arrive unpredictably that you must pay manually. During one month you receive invoices from a carpenter, a car mechanic, and a new supplier who serviced your front office coffee machine.\n\nThese are standalone bills for specific jobs. They all have different payment terms. As they arrive, put them in the liabilities inbox. Then set aside time later to pay them in order of urgency. The processed invoices are permanently filed here. And you might decide to add copies of them to [[12.14]], [[12.45]], and [[12.34]], respectively."
    }
  }
};
export default entry;
