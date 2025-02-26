// Auto-generated from 13.22+FR2-an-example-of-an-income-only-account.md
import type { FurtherReadingEntry } from "@data/smallBusinessFlat";
const entry: FurtherReadingEntry = {
  "number": "13.22+FR2",
  "title": "An example of an income-only account",
  "type": "furtherReading",
  "isPublic": false,
  "metadata": {
    "createdDate": "2025-02-26T23:51:12.721Z",
    "updatedDate": "2025-02-26T23:51:12.721Z"
  },
  "extensions": {
    "furtherReading": {
      "text": "At JDHQ, we have online courses on a learning platform. They process payments via Stripe. We want to track this account because it contains data that we need to calculate income. And depending on where a customer lives, we may need to pay sales tax on the transaction.\n\nThis account is _only_ incomings, we can’t pay expenses with it. It holds money until they release it to a nominated bank account. Therefore, we would store the formal Stripe account statements here."
    }
  }
};
export default entry;
