// Auto-generated from 13.33-receipts.md
import type { IdEntry } from "@data/smallBusinessFlat";
const entry: IdEntry = {
  "number": "13.33",
  "title": "Receipts",
  "description": "The place to file processed receipts.",
  "type": "id",
  "isPublic": false,
  "isHeader": false,
  "metadata": {
    "createdDate": "2025-02-12T03:25:47.369Z",
    "updatedDate": "2025-02-12T03:25:47.369Z"
  },
  "extensions": {
    "smallBusiness": {
      "moreInfo": "We’ve classified an ‘expense’ as something that you have already paid for either on the spot (i.e. with a card), or via an automatic payment (i.e. a direct debit).\n\nAs per the ops manual, once you’ve processed expenses in [[13.31]], permanently file any receipts here. \n\n### Is the receipt important?\n\nThere’ll probably be lots of receipts that you don’t consider to be that important. Such as everyday consumables like petrol or milk for the office fridge. Just keep them all here for however long you’re required to by law.\n\nBut for ‘important’ receipts for higher-value items and/or anything with a warranty, you might like to add a copy to where the thing lives in the system. \n\nFor instance, you buy a new laptop. The receipt sits in the expenses inbox until you process it. You then permanently file it here and also add a copy to [[14.11]].\n\n### Saving files\n\nWe recommend using the year-month method when saving this kind of paperwork so everything sorts neatly. And subfolder by expense category.",
      "exceptions": "These are not bills that you set aside time to pay manually, manage those in [[13.50]].",
      "rationale": "### Classifying automated bill payments as expenses\n\nNormally we think of the bills that we receive by email or post as liabilities. But as noted in [[13.54]], we made a decision to classify _direct debits_ of bill payments as going ‘straight to expenses’. They’re paid automatically and you don’t need to plan a time to physically transfer money. \n\nFor instance, you’ve set up direct debits for your utility bills. They’re paid automatically on the due date. Now they’re just expense transactions on your bank statement that you process and file here."
    }
  }
};
export default entry;
