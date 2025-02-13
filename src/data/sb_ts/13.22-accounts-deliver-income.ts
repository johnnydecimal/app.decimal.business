// Auto-generated from 13.22-accounts-deliver-income.md
import type { IdEntry } from "@data/smallBusinessFlat";
const entry: IdEntry = {
  "number": "13.22",
  "title": "Accounts that deliver income",
  "description": "The formal statements and paperwork for accounts or platforms that are primarily used to receive income.",
  "type": "id",
  "isPublic": false,
  "isHeader": false,
  "metadata": {
    "createdDate": "2025-02-13T04:38:41.829Z",
    "updatedDate": "2025-02-13T04:38:41.829Z"
  },
  "extensions": {
    "smallBusiness": {
      "examples": "Standard bank accounts; online payment processors like Stripe, PayPal, or Payoneer; merchant accounts for ‘buy now, pay later’ services like Afterpay or Klarna; digital wallet services like WeChat Pay or Grab; money-transfer services like Western Union; creator support platforms like Patreon; crowdfunding services like Kickstarter.",
      "overview": "This is a place for any accounts whose primary function is _delivering_ money to you.\n\nThis might sound strange, but it’s increasingly common for many businesses. For instance, the accounts that online payment processors or sales channels deliver earnings through. If you sell things on Etsy or eBay, this might be PayPal.\n\nIn our case, we have online courses on a learning platform. They process payments via Stripe. We want to track this account because it contains data that we need to calculate income. And depending on where a customer lives, we may need to pay sales tax on the transaction.\n\nThis account is _only_ incomings, we can’t pay expenses with it. It holds money until they release it to a nominated bank account. Therefore, we would store the formal Stripe account statements here.\n\nOr maybe you have a bank account that is only for deposits. Store those formal statements here too.\n\n### What do you mean by ‘formal’ statements and paperwork?\n\nStatic documents supplied by a platform or bank (e.g. PDFs). As opposed to raw data that you might download into a spreadsheet and manipulate. Do that kind of work in [[13.21]].\n\n### Saving files\n\nWe recommend using the year-month method when saving paperwork and statements so everything sorts neatly. And subfolder by account issuer.",
      "exceptions": "If you just use a standard bank account for both incomings and outgoings, that goes in [[13.42]].",
      "rationale": "Many businesses won’t need this ID if they just use a regular bank account for income and expenses. But we wanted to leave space for other types of ‘one-way’ accounts that bring money in because they’re becoming more common.\n\nWhether you sell things online or in person, these services process payments, collect earnings, and then transfer them to your designated bank account. They are important because they handle income. If you get audited and forget to mention them, the tax man might have something to say about that.\n\nAs per the Johnny.Decimal rule, if it logically fits higher up in the system, put it in the first place that makes sense. So that’s why we recommend differentiating these accounts and storing their paperwork and statements up here.\n\n### A note on crowdfunding\n\nfyi, your accountant might pull a face at our classification of crowdfunding as income. They probably prefer terms such as ‘deferred or unearned revenue’ and think it should live down in [[13.50]].\n\nLet them pull their face and then do what they need to do on the balance sheet. As we’ve said, we’re not accountants, we’re here to help you find stuff. And we think many people would think of crowdfunding as income and look for it here."
    }
  }
};
export default entry;
