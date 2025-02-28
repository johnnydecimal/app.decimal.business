// Auto-generated from 13.32-accounts-that-handle-expenses.md
import type { IdEntry } from "@data/smallBusinessFlat";
const entry: IdEntry = {
  "number": "13.32",
  "title": "Accounts that handle expenses",
  "description": "The formal statements and paperwork for accounts or platforms that are primarily used to pay expenses.",
  "type": "id",
  "isPublic": false,
  "isHeader": false,
  "isHidden": false,
  "noLabel": false,
  "metadata": {
    "createdDate": "2025-02-28T06:53:49.128Z",
    "updatedDate": "2025-02-28T06:53:49.128Z"
  },
  "extensions": {
    "smallBusiness": {
      "examples": "Online payment processors like PayPal or Payoneer; ‘buy now, pay later’ services like Afterpay or Klarna; digital wallet services like WeChat Pay or Grab; money-transfer services like Western Union; a standard bank account.",
      "overview": "This is a place for any accounts whose primary function is _spending_ money.\n\nAs per the note in [[13.22]], ignore this ID if it’s not relevant to you. We don’t have an account like this, but we wanted to leave room for those that do.\n\nPerhaps you use a service like Payoneer to handle payments to international suppliers. Or maybe you buy things via a platform like Afterpay\\*. Manage your relationship with those organisations here. Or maybe you have a bank account that is only for outgoings. Store those formal statements here too.\n\nWe recommend using the year-month method when saving paperwork and statements so everything sorts neatly. And subfolder by account issuer.\n\n\\*Note that if you become an Afterpay merchant one day, you could 'promote' it up to [[13.22]]).",
      "exceptions": "If you just use a standard bank account for both incomings and outgoings, that goes in [[13.42]]."
    }
  }
};
export default entry;
