import type { IdEntry } from "@data/smallBusinessFlat";

export const sb_11_11: IdEntry = {
  number: "11.11",
  parentNumber: "11",
  type: "id",
  title: "Structure & registrations",
  description:
    "Proof of the business’ existence, trading structure, and name – where it all begins!",
  metadata: {
    createdDate: "2024-11-19",
    updatedDate: "2024-11-19",
  },
  extensions: {
    smallBusiness: {
      examples:
        "Business entity registrations; trading name registrations; income and sales tax registrations; trademark records for trading names; company director identity applications.",
      moreInfo:
        "This ID is about your business being born. Think of it like your birth certificate and proof of name. Deciding on a trading structure and name are the first steps to starting a business. This affects how you will operate and the various obligations you will have, especially government taxes.\n\nWhether you want to trade alone under your own name, or as a company with staff and its own name, you will have to complete certain registrations to ‘exist’. The more complicated the structure, the more paperwork there will be. But for many people with simple structures, once you’re set up, this ID should be pretty quiet (apart from ensuring registrations stay active). ",
      exceptions:
        "Put product or brand-related patents, trademarks, and copyrights in [[20-29]].",
      alsoSee:
        "Using as an example of an &lt;ol&gt;.\n\n1. First item, which is long enough to flow over not just one but two lines.\n2. Second item.\n3. Third item.\nThe list is finished.",
      rationale:
        "This ID is not related to your product or service. You might conduct different types of business under one entity. Hence, we recommend that any trademark records for the business name should go here. And if you have other patents, trademarks, or copyrights, they should live with the things they protect.",
    },
  },
};
