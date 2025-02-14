// Common metadata type
type Metadata = {
  createdDate: string;
  updatedDate: string;
};

// Entry types
export type EntryType =
  | "system"
  | "area"
  | "category"
  | "id"
  | "furtherReading"
  | "opsManual"
  | "adHoc"; // Each of these is a unique Astro component

// Base interface for common fields
interface BaseEntry {
  number: string;
  title: string;
  type: EntryType;
  description: string; // Late change: everything must have a description; document the rationale later
  emoji?: string;
  isPublic?: boolean;
  isHeader?: boolean; // Really only applies to IDs but KISS
  metadata: Metadata;
  extensions?: {};
}

interface SmallBusinessExtension {
  examples?: string;
  overview?: string;
  exceptions?: string;
  alsoSee?: string;
  links?: string;
}
export interface SystemEntry extends BaseEntry {
  type: "system";
  extensions?: {
    smallBusiness?: SmallBusinessExtension;
  };
}

export interface AreaEntry extends BaseEntry {
  type: "area";
  extensions?: {
    smallBusiness?: SmallBusinessExtension;
  };
}

export interface CategoryEntry extends BaseEntry {
  type: "category";
  extensions: {
    smallBusiness?: SmallBusinessExtension;
  };
}

export interface IdEntry extends BaseEntry {
  type: "id";
  extensions: {
    smallBusiness: SmallBusinessExtension;
  };
}

export interface OpsEntry extends BaseEntry {
  type: "opsManual";
  // isHeader?: boolean;
  extensions: {
    // TODO these are too restrictive: just use the HOWTO pattern
    smallBusinessOpsManual: {
      overview: string; // remember the ID has a description
      diagram?: string;
      triggers: string;
      inputs: string;
      process: string;
      outputs: string;
    };
  };
}

export interface FurtherReadingEntry extends BaseEntry {
  // These entries don't need an ID; or rather, we don't _use_ the ID
  // They're just 11.11+ …words, not 11.11+HOW1 or whatever
  type: "furtherReading";
  extensions: {
    furtherReading: {
      text: string; // freeform
    };
  };
}

export interface AdHocEntry extends BaseEntry {
  type: "adHoc";
  // Every page is a unique Astro component. We don't define it in the object
}

// Union type for all entries
export type FlattenedEntry =
  | SystemEntry
  | AreaEntry
  | CategoryEntry
  | IdEntry
  | OpsEntry
  | FurtherReadingEntry
  | AdHocEntry;

// Flattened data structure type
export type FlattenedData = Record<string, FlattenedEntry>;

import { area_00_09 } from "./area_00_09";

import cat_11 from "@data/sb_ts/11-🙋-the-business-and-its-people";
import id_11_10 from "@data/sb_ts/11.10-official-documents-🗂️";
import id_11_11 from "@data/sb_ts/11.11-structure-and-registrations";
import id_11_12 from "@data/sb_ts/11.12-licences-permits-and-accreditations";
import id_11_13 from "@data/sb_ts/11.13-compliance";
import id_11_14 from "@data/sb_ts/11.14-other-legal-matters";
import id_11_15 from "@data/sb_ts/11.15-selling-it-or-closing-it";
import id_11_20 from "@data/sb_ts/11.20-planning-contingencies-and-insurance-🧭";
import id_11_21 from "@data/sb_ts/11.21-business-plan";
import id_11_22 from "@data/sb_ts/11.22-business-insurance-incidents-and-claims";
import id_11_23 from "@data/sb_ts/11.23-risk-and-emergency-management-plans";
import id_11_24 from "@data/sb_ts/11.24-collected-wisdom-and-analysis";
import id_11_30 from "@data/sb_ts/11.30-behaviours-ethics-and-culture-👍";
import id_11_31 from "@data/sb_ts/11.31-internal-policies";
import id_11_32 from "@data/sb_ts/11.32-external-policies";
import id_11_33 from "@data/sb_ts/11.33-dispute-resolution";
import id_11_40 from "@data/sb_ts/11.40-our-people-🦸";
import id_11_41 from "@data/sb_ts/11.41-hiring";
import id_11_42 from "@data/sb_ts/11.42-staff-record-keeping";
import id_11_43 from "@data/sb_ts/11.43-formal-reviews";
import id_11_44 from "@data/sb_ts/11.44-farewells";
import id_11_45 from "@data/sb_ts/11.45-animals-as-staff";
import id_11_50 from "@data/sb_ts/11.50-training-and-professional-development-🎓";
import id_11_51 from "@data/sb_ts/11.51-mandatory-training";
import id_11_52 from "@data/sb_ts/11.52-optional-training";
import id_11_53 from "@data/sb_ts/11.53-other-learning-and-self-improvement";
import id_11_60 from "@data/sb_ts/11.60-other-people-and-organisations-🤝";
import id_11_61 from "@data/sb_ts/11.61-professional-bodies";
import id_11_62 from "@data/sb_ts/11.62-seeking-advice-and-support";
import id_11_63 from "@data/sb_ts/11.63-networking-and-new-business";
import id_11_90 from "@data/sb_ts/11.90-the-business-and-its-people-library-📚";
import cat_12 from "@data/sb_ts/12-🗺️-where-i-trade-and-how-i-get-around";
import id_12_10 from "@data/sb_ts/12.10-fixed-locations-🏢";
import id_12_11 from "@data/sb_ts/12.11-official-documents";
import id_12_12 from "@data/sb_ts/12.12-office-insurance-incidents-and-claims";
import id_12_13 from "@data/sb_ts/12.13-rates-taxes-and-fees";
import id_12_14 from "@data/sb_ts/12.14-fit-outs-renovations-and-improvements";
import id_12_15 from "@data/sb_ts/12.15-repairs-and-maintenance";
import id_12_16 from "@data/sb_ts/12.16-moving";
import id_12_20 from "@data/sb_ts/12.20-back-office-equipment-and-operations-⛔️";
import id_12_21 from "@data/sb_ts/12.21-keep-the-lights-on";
import id_12_22 from "@data/sb_ts/12.22-keep-us-secure";
import id_12_23 from "@data/sb_ts/12.23-keep-it-nice-for-us";
import id_12_24 from "@data/sb_ts/12.24-keep-the-back-office-well-equipped";
import id_12_25 from "@data/sb_ts/12.25-keep-us-fed-and-watered";
import id_12_26 from "@data/sb_ts/12.26-keep-us-posted";
import id_12_30 from "@data/sb_ts/12.30-front-office-equipment-and-operations-🛎️";
import id_12_31 from "@data/sb_ts/12.31-keep-the-lights-on";
import id_12_32 from "@data/sb_ts/12.32-keep-our-customers-secure";
import id_12_33 from "@data/sb_ts/12.33-keep-it-nice-for-our-customers";
import id_12_34 from "@data/sb_ts/12.34-keep-the-front-office-well-equipped";
import id_12_35 from "@data/sb_ts/12.35-keep-our-customers-fed-and-watered";
import id_12_40 from "@data/sb_ts/12.40-getting-around-🚚";
import id_12_41 from "@data/sb_ts/12.41-official-documents-(formal)";
import id_12_42 from "@data/sb_ts/12.42-vehicle-insurance-incidents-and-claims-(formal)";
import id_12_43 from "@data/sb_ts/12.43-permits-tolls-fees-and-other-running-expenses-(formal)";
import id_12_44 from "@data/sb_ts/12.44-fit-outs-renovations-and-improvements-(formal)";
import id_12_45 from "@data/sb_ts/12.45-repairs-and-maintenance-(formal)";
import id_12_46 from "@data/sb_ts/12.46-public-or-shared-transport-and-other-‘informal’-vehicles";
import id_12_50 from "@data/sb_ts/12.50-the-community-🧩";
import id_12_51 from "@data/sb_ts/12.51-your-business-and-local-neighbourhood";
import id_12_52 from "@data/sb_ts/12.52-your-business-and-city-state-and-country";
import id_12_53 from "@data/sb_ts/12.53-your-business-and-planet";
import id_12_90 from "@data/sb_ts/12.90-where-i-trade-and-how-i-get-around-library-📚";
import cat_13 from "@data/sb_ts/13-💰-money-earned-spent-saved-and-owed";
import id_13_10 from "@data/sb_ts/13.10-plan-protect-and-reflect-🧘";
import id_13_11 from "@data/sb_ts/13.11-financial-planning";
import id_13_12 from "@data/sb_ts/13.12-financial-insurance-incidents-and-claims";
import id_13_13 from "@data/sb_ts/13.13-reports-and-reviews";
import id_13_14 from "@data/sb_ts/13.14-financial-catch-all";
import id_13_20 from "@data/sb_ts/13.20-income-🤑";
import id_13_21 from "@data/sb_ts/13.21-inbox-and-processing-of-income";
import id_13_22 from "@data/sb_ts/13.22-accounts-that-deliver-income";
import id_13_23 from "@data/sb_ts/13.23-invoices-and-sales-for-your-work";
import id_13_24 from "@data/sb_ts/13.24-passive-income";
import id_13_25 from "@data/sb_ts/13.25-assistance-grants-and-gifts";
import id_13_26 from "@data/sb_ts/13.26-sale-of-assets";
import id_13_30 from "@data/sb_ts/13.30-expenses-🛍️";
import id_13_31 from "@data/sb_ts/13.31-inbox-and-processing-of-expenses";
import id_13_32 from "@data/sb_ts/13.32-accounts-that-handle-expenses";
import id_13_33 from "@data/sb_ts/13.33-receipts";
import id_13_34 from "@data/sb_ts/13.34-payroll";
import id_13_35 from "@data/sb_ts/13.35-subscriptions-memberships-and-other-recurring-expenses";
import id_13_40 from "@data/sb_ts/13.40-assets-📈";
import id_13_41 from "@data/sb_ts/13.41-inbox-and-processing-of-assets";
import id_13_42 from "@data/sb_ts/13.42-accounts-that-handle-cash";
import id_13_43 from "@data/sb_ts/13.43-investments";
import id_13_44 from "@data/sb_ts/13.44-fixed-assets";
import id_13_45 from "@data/sb_ts/13.45-current-assets";
import id_13_46 from "@data/sb_ts/13.46-intangible-assets";
import id_13_50 from "@data/sb_ts/13.50-liabilities-💸";
import id_13_51 from "@data/sb_ts/13.51-inbox-and-processing-of-liabilities";
import id_13_52 from "@data/sb_ts/13.52-cash-loan-accounts";
import id_13_53 from "@data/sb_ts/13.53-non-cash-loan-accounts";
import id_13_54 from "@data/sb_ts/13.54-bills";
import id_13_55 from "@data/sb_ts/13.55-fines-and-penalties";
import id_13_60 from "@data/sb_ts/13.60-reconciliation-and-returns-🧮";
import id_13_61 from "@data/sb_ts/13.61-inbox-and-processing-of-government-taxes";
import id_13_62 from "@data/sb_ts/13.62-accounts-that-handle-tax";
import id_13_63 from "@data/sb_ts/13.63-dividends";
import id_13_64 from "@data/sb_ts/13.64-equity";
import id_13_90 from "@data/sb_ts/13.90-money-earned-spent-saved-and-owed-library-📚";
import cat_14 from "@data/sb_ts/14-💻-technology";
import id_14_10 from "@data/sb_ts/14.10-computers-and-other-devices-🖥️";
import id_14_11 from "@data/sb_ts/14.11-computers-and-servers";
import id_14_12 from "@data/sb_ts/14.12-mobile-devices";
import id_14_13 from "@data/sb_ts/14.13-network-devices";
import id_14_14 from "@data/sb_ts/14.14-accessories";
import id_14_20 from "@data/sb_ts/14.20-storage-data-and-backups-🗃️";
import id_14_21 from "@data/sb_ts/14.21-storage";
import id_14_22 from "@data/sb_ts/14.22-data";
import id_14_23 from "@data/sb_ts/14.23-backups-and-recovery";
import id_14_30 from "@data/sb_ts/14.30-software-services-and-support-💾";
import id_14_31 from "@data/sb_ts/14.31-internal-software-and-services";
import id_14_32 from "@data/sb_ts/14.32-external-software-and-services";
import id_14_33 from "@data/sb_ts/14.33-support-contracts";
import id_14_40 from "@data/sb_ts/14.40-accounts-cybersecurity-and-policies-🔐";
import id_14_41 from "@data/sb_ts/14.41-accounts-passwords-and-access";
import id_14_42 from "@data/sb_ts/14.42-technical-cybersecurity";
import id_14_43 from "@data/sb_ts/14.43-behavioural-cybersecurity";
import id_14_44 from "@data/sb_ts/14.44-cyber-insurance-incidents-and-claims";
import id_14_50 from "@data/sb_ts/14.50-our-online-presence-🌏";
import id_14_51 from "@data/sb_ts/14.51-domain-and-dns-management";
import id_14_52 from "@data/sb_ts/14.52-websites-blogs-and-communities";
import id_14_53 from "@data/sb_ts/14.53-social-media";
import id_14_54 from "@data/sb_ts/14.54-electronic-mailing-lists-and-updates";
import id_14_90 from "@data/sb_ts/14.90-technology-library-📚";
import id_14_91 from "@data/sb_ts/14.91-curated-lists-of-online-resources";

const flattenedData: FlattenedData = {
  J82: {
    number: "J82",
    title: "Small business system",
    description: "The best small business system.",
    type: "system",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
  },
  "J82+FR1": {
    number: "J82+FR1",
    type: "furtherReading",
    title: "Where do I get help?",
    description: "The system help pages.",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
    extensions: {
      furtherReading: {
        text: "The system help pages.",
      },
    },
  },
  ...area_00_09,
  "10-19": {
    number: "10-19",
    title: "Company administration",
    type: "area",
    description:
      "In [[10-19]], our goal is that these categories could be the foundation of _any_ business, regardless of the product or service you offer.",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
    extensions: {
      smallBusiness: {
        exceptions:
          "Just some text in an exceptions field so we can **see** _how_ `it` renders with a [[11.11]] wiki-link for good measure.",
      },
    },
  },
  "10-19+FR1": {
    number: "10-19+FR1",
    type: "furtherReading",
    title: "A further reading in area 10-19",
    description:
      "Just an example of a further reading for testing. This is a longer description that should wrap. This is in area 10-19.",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
    extensions: {
      furtherReading: {
        text: "Just an example of a further reading for testing",
      },
    },
  },
  "11": {
    ...cat_11,
  },
  "11+FR1": {
    number: "11+FR1",
    type: "furtherReading",
    title:
      "Just an example of a further reading attached to a category (11) for testing",
    description:
      "A simple guide to registering a proprietary company in Australia.",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      furtherReading: {
        text: "Just an example of a further reading for testing",
      },
    },
  },
  "11.00": {
    number: "11.00",
    type: "id",
    description: "The 'standard zero' ID for category management.",
    title: "Category management",
    isHeader: true,
    metadata: { createdDate: "2024-11-19", updatedDate: "2024-11-19" },
    extensions: {
      smallBusiness: {
        examples: "Example of category management",
        overview: "More information about this ID",
      },
    },
  },
  "11.10": {
    ...id_11_10,
  },
  "11.11": {
    ...id_11_11,
  },
  "11.11+1": {
    number: "11.11+1",
    type: "furtherReading",
    title: "Why would you want to register a business in Australia?",
    isPublic: true,
    description:
      "A simple guide to registering a proprietary company in Australia.",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      furtherReading: {
        text: "# Why?\n\nThere are many important reasons to register as a proprietary company in Australia.\n\n## It protects you\n\nFrom **demons** no not really, from lawyers!\n\n# How?\n\nProbably speak to an accountant.\n\n## That's a cop-out\n\nDeal with it.\n\n# What does it cost is a long header!\n\nIsn't it.\n\n",
      },
    },
  },
  "11.11+2": {
    number: "11.11+2",
    type: "furtherReading",
    title:
      "Some other more info article whose title I can't be bothered making up",
    description:
      "A simple guide to registering a proprietary company in Australia.",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      furtherReading: {
        text: "# Why?\n\nThere are many important reasons to register as a proprietary company in Australia.\n\n## It protects you\n\nFrom **demons** no not really, from lawyers!\n\n# How?\n\nProbably speak to an accountant.\n\n## That's a cop-out\n\nDeal with it.\n\n# What does it cost is a long header!\n\nIsn't it.\n\n",
      },
    },
  },
  "11.12": {
    ...id_11_12,
  },
  "11.13": {
    ...id_11_13,
  },
  "11.13+1": {
    number: "11.13+1",
    type: "furtherReading",
    title: "Just an example of a more info for testing",
    isPublic: true,
    description:
      "A simple guide to registering a proprietary company in Australia.",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      furtherReading: {
        text: "# Why?\n\nThere are many important reasons to register as a proprietary company in Australia.\n\n## It protects you\n\nFrom **demons** no not really, from lawyers!\n\n# How?\n\nProbably speak to an accountant.\n\n## That's a cop-out\n\nDeal with it.\n\n# What does it cost is a long header!\n\nIsn't it.\n\n",
      },
    },
  },
  "11.14": {
    ...id_11_14,
  },
  "11.15": {
    ...id_11_15,
  },
  "11.20": {
    ...id_11_20,
  },
  "11.21": {
    ...id_11_21,
  },
  "11.22": {
    ...id_11_22,
  },
  "11.23": {
    ...id_11_23,
  },
  "11.24": {
    ...id_11_24,
  },
  "11.30": {
    ...id_11_30,
  },
  "11.31": {
    ...id_11_31,
  },
  "11.32": {
    ...id_11_32,
  },
  "11.33": {
    ...id_11_33,
  },
  "11.40": {
    ...id_11_40,
  },
  "11.41": {
    ...id_11_41,
  },
  "11.42": {
    ...id_11_42,
  },
  "11.43": {
    ...id_11_43,
  },
  "11.44": {
    ...id_11_44,
  },
  "11.45": {
    ...id_11_45,
  },
  "11.50": {
    ...id_11_50,
  },
  "11.51": {
    ...id_11_51,
  },
  "11.52": {
    ...id_11_52,
  },
  "11.53": {
    ...id_11_53,
  },
  "11.60": {
    ...id_11_60,
  },
  "11.61": {
    ...id_11_61,
  },
  "11.62": {
    ...id_11_62,
  },
  "11.63": {
    ...id_11_63,
  },
  "11.90": {
    ...id_11_90,
  },
  "12": {
    ...cat_12,
  },
  "12.10": {
    ...id_12_10,
  },
  "12.11": {
    ...id_12_11,
  },
  "12.12": {
    ...id_12_12,
  },
  "12.13": {
    ...id_12_13,
  },
  "12.14": {
    ...id_12_14,
  },
  "12.15": {
    ...id_12_15,
  },
  "12.16": {
    ...id_12_16,
  },
  "12.20": {
    ...id_12_20,
  },
  "12.21": {
    ...id_12_21,
  },
  "12.22": {
    ...id_12_22,
  },
  "12.23": {
    ...id_12_23,
  },
  "12.24": {
    ...id_12_24,
  },
  "12.25": {
    ...id_12_25,
  },
  "12.26": {
    ...id_12_26,
  },
  "12.30": {
    ...id_12_30,
  },
  "12.31": {
    ...id_12_31,
  },
  "12.32": {
    ...id_12_32,
  },
  "12.33": {
    ...id_12_33,
  },
  "12.34": {
    ...id_12_34,
  },
  "12.35": {
    ...id_12_35,
  },
  "12.40": {
    ...id_12_40,
  },
  "12.41": {
    ...id_12_41,
  },
  "12.42": {
    ...id_12_42,
  },
  "12.43": {
    ...id_12_43,
  },
  "12.44": {
    ...id_12_44,
  },
  "12.45": {
    ...id_12_45,
  },
  "12.46": {
    ...id_12_46,
  },
  "12.50": {
    ...id_12_50,
  },
  "12.51": {
    ...id_12_51,
  },
  "12.52": {
    ...id_12_52,
  },
  "12.53": {
    ...id_12_53,
  },
  "12.90": {
    ...id_12_90,
  },
  "13": {
    ...cat_13,
  },
  "13.10": {
    ...id_13_10,
  },
  "13.11": {
    ...id_13_11,
  },
  "13.12": {
    ...id_13_12,
  },
  "13.13": {
    ...id_13_13,
  },
  "13.14": {
    ...id_13_14,
  },
  "13.20": {
    ...id_13_20,
  },
  "13.21": {
    ...id_13_21,
  },
  "13.22": {
    ...id_13_22,
  },
  "13.23": {
    ...id_13_23,
  },
  "13.24": {
    ...id_13_24,
  },
  "13.25": {
    ...id_13_25,
  },
  "13.26": {
    ...id_13_26,
  },
  "13.30": {
    ...id_13_30,
  },
  "13.31": {
    ...id_13_31,
  },
  "13.32": {
    ...id_13_32,
  },
  "13.33": {
    ...id_13_33,
  },
  "13.34": {
    ...id_13_34,
  },
  "13.35": {
    ...id_13_35,
  },
  "13.40": {
    ...id_13_40,
  },
  "13.41": {
    ...id_13_41,
  },
  "13.42": {
    ...id_13_42,
  },
  "13.43": {
    ...id_13_43,
  },
  "13.44": {
    ...id_13_44,
  },
  "13.45": {
    ...id_13_45,
  },
  "13.46": {
    ...id_13_46,
  },
  "13.50": {
    ...id_13_50,
  },
  "13.51": {
    ...id_13_51,
  },
  "13.52": {
    ...id_13_52,
  },
  "13.53": {
    ...id_13_53,
  },
  "13.54": {
    ...id_13_54,
  },
  "13.55": {
    ...id_13_55,
  },
  "13.60": {
    ...id_13_60,
  },
  "13.61": {
    ...id_13_61,
  },
  "13.62": {
    ...id_13_62,
  },
  "13.63": {
    ...id_13_63,
  },
  "13.64": {
    ...id_13_64,
  },
  "13.90": {
    ...id_13_90,
  },
  "14": {
    ...cat_14,
  },
  "14.10": {
    ...id_14_10,
  },
  "14.11": {
    ...id_14_11,
  },
  "14.12": {
    ...id_14_12,
  },
  "14.13": {
    ...id_14_13,
  },
  "14.14": {
    ...id_14_14,
  },
  "14.20": {
    ...id_14_20,
  },
  "14.21": {
    ...id_14_21,
  },
  "14.22": {
    ...id_14_22,
  },
  "14.23": {
    ...id_14_23,
  },
  "14.30": {
    ...id_14_30,
  },
  "14.31": {
    ...id_14_31,
  },
  "14.32": {
    ...id_14_32,
  },
  "14.33": {
    ...id_14_33,
  },
  "14.40": {
    ...id_14_40,
  },
  "14.41": {
    ...id_14_41,
  },
  "14.42": {
    ...id_14_42,
  },
  "14.43": {
    ...id_14_43,
  },
  "14.44": {
    ...id_14_44,
  },
  "14.50": {
    ...id_14_50,
  },
  "14.51": {
    ...id_14_51,
  },
  "14.52": {
    ...id_14_52,
  },
  "14.53": {
    ...id_14_53,
  },
  "14.54": {
    ...id_14_54,
  },
  "14.90": {
    ...id_14_90,
  },
  "14.91": {
    ...id_14_91,
  },

  "20-29": {
    type: "area",
    number: "20-29",
    title: "A longer area title that definitely wraps",
    isPublic: true,
    description: "The twenties",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
  },
  "21": {
    type: "category",
    number: "21",
    title: "TESTENV Twenty-one with as long as a word is practicable?",
    description:
      "This category is all about the business entity and everyone who keeps it going, including staff, professional bodies, and support services.",
    emoji: "🗺️",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
    extensions: { smallBusiness: {} },
  },
  "21.11": {
    type: "id",
    number: "21.11",
    title: "TESTENV Twenty-one-eleven-lots-of-hyphens",
    description: "This is a test ID",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
    extensions: { smallBusiness: {} },
  },
};

export default flattenedData;

// Utility function to get all entries by type
export function getAllByType(
  data: FlattenedData,
  type: EntryType
): FlattenedEntry[] {
  return Object.values(data).filter((entry) => entry.type === type);
}

// Utility function to get all children of a given parent ID
// By 'supplemental entries' we mean furtherReading & opsManual, i.e. not a
// core entry.
export function getChildren(
  data: FlattenedData,
  parentNumber: string
): FlattenedEntry[] | undefined {
  if (parentNumber.match(/[A-Z]\d\d/)) {
    // System provided as parent.
    // Return all areas, and any supplemental entries that start with the
    // system number, J82.
    // TODO: system number should be an app-wide constant
    return Object.values(data).filter(
      (entry) =>
        entry.type === "area" ||
        ((entry.type === "furtherReading" || entry.type === "opsManual") &&
          entry.number.match(/^J82/))
    );
  } else if (parentNumber.match(/\d0-\d9/)) {
    // Area provided. Get categories and further readings that match.
    // This is an area. Find all entries whose number starts with the first
    // two digits of the area number.
    return Object.values(data).filter(
      (entry) =>
        (entry.type === "category" &&
          entry.number.charAt(0) === parentNumber.charAt(0)) ||
        (entry.type === "furtherReading" &&
          entry.number.startsWith(parentNumber))
    );
  } else if (parentNumber.match(/^\d\d$/)) {
    // Category provided. Get IDs and further readings that match.
    return Object.values(data).filter(
      (entry) =>
        (entry.type === "id" || entry.type === "furtherReading") &&
        entry.number.slice(0, 2) === parentNumber
    );
  } else if (parentNumber.match(/^\d\d\.\d\d$/)) {
    // ID provided. Get all sub-IDs.
    return Object.values(data).filter(
      (entry) =>
        (entry.type === "furtherReading" || entry.type === "opsManual") &&
        entry.number.startsWith(parentNumber)
    );
  }
}

// Utility function to find an entry by key
export function findById(
  data: FlattenedData,
  number: string
): FlattenedEntry | undefined {
  return data[number];
}

// Utility function to validate the entire data structure
// Doesn't work now that we deleted the parentNumber field.
// export function validateStructure(data: FlattenedData): string[] {
//   const errors: string[] = [];
//   for (const key in data) {
//     const entry = data[key];
//     if (
//       "parentNumber" in entry &&
//       entry.parentNumber &&
//       !data[entry.parentNumber]
//     ) {
//       errors.push(
//         `Entry with key ${key} has a non-existent parent ID ${entry.parentNumber}.`
//       );
//     }
//   }
//   return errors;
// }

// Example usage
// const allAreas = getAllByType(flattenedData, "area");
// console.log("All Areas:", allAreas);

// const categoryChildren = getChildren(flattenedData, "11");
// console.log("Children of Category '11':", categoryChildren);

// const specificEntry = findById(flattenedData, "11.00");
// console.log("Entry with ID '11.00':", specificEntry);
