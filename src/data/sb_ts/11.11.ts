// Auto-generated from 11.11.md
import type { IdEntry } from "@data/smallBusinessFlat";
const entry: IdEntry = {
  number: "11.11",
  title: "Structure & registrations",
  description:
    "Proof of the business’ existence, trading structure, and name – where it all begins!",
  parentNumber: "",
  type: "id",
  metadata: {
    createdDate: "2025-02-11T22:13:41.586Z",
    updatedDate: "2025-02-11T22:13:41.587Z",
  },
  extensions: {
    smallBusiness: {
      examples:
        "Business entity registrations; trading name registrations; income and sales tax registrations; trademark records for trading names; company director identity applications.",
      moreInfo:
        "This ID is about your business being born. Think of it like your birth certificate and proof of name. Deciding on a trading structure and name are the first steps to starting a business. This affects how you will operate and the various obligations you will have, especially government taxes.\n\nWhether you want to trade alone under your own name, or as a company with staff and its own name, you will have to complete certain registrations to ‘exist’. The more complicated the structure, the more paperwork there will be. But for many people with simple structures, once you’re set up, this ID should be pretty quiet (apart from ensuring registrations stay active).",
      exceptions:
        "Put product or brand-related patents, trademarks, and copyrights in [[20-29]].",
      rationale:
        "This ID is not related to your product or service. You might conduct different types of business under one entity. Hence, we recommend that any trademark records for the business name should go here. And if you have other patents, trademarks, or copyrights, they should live with the things they protect.",
    },
  },
};
export default entry;
