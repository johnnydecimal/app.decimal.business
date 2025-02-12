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
  | "ops"
  | "howTo"
  | "moreInfo"
  | "adHoc";

// Base interface for common fields
interface BaseEntry {
  number: string;
  title: string;
  type: EntryType;
  description: string; // Late change: everything must have a description; document the rationale later
  emoji?: string;
  metadata: Metadata;
  extensions?: {};
}

// Specialized interfaces
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
  extensions?: {
    smallBusiness?: SmallBusinessExtension;
  };
}

interface SmallBusinessExtension {
  examples?: string;
  moreInfo?: string;
  exceptions?: string;
  alsoSee?: string;
  rationale?: string;
  links?: string;
}

export interface IdEntry extends BaseEntry {
  type: "id";
  isHeader?: boolean;
  isPublic?: boolean;
  extensions: {
    smallBusiness: SmallBusinessExtension;
  };
}

export interface OpsEntry extends BaseEntry {
  type: "ops";
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

export interface HowToEntry extends BaseEntry {
  type: "howTo";
  isPublic?: boolean;
  extensions: {
    howTo: {
      text: string; // freeform
    };
  };
}

export interface MoreInfoEntry extends BaseEntry {
  // These entries don't need an ID; or rather, we don't _use_ the ID
  // They're just 11.11+ …words, not 11.11+HOW1 or whatever
  type: "moreInfo";
  isPublic?: boolean;
  extensions: {
    moreInfo: {
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
  | HowToEntry
  | MoreInfoEntry
  | AdHocEntry;

// Flattened data structure type
export type FlattenedData = Record<string, FlattenedEntry>;

import { area_00_09 } from "./area_00_09";
import id_11_10 from "@data/sb_ts/11.10";
import id_11_11 from "@data/sb_ts/11.11";
import id_11_12 from "@data/sb_ts/11.12";
import id_11_13 from "@data/sb_ts/11.13";
import id_11_14 from "@data/sb_ts/11.14";
import id_11_15 from "@data/sb_ts/11.15";
import id_11_20 from "@data/sb_ts/11.20";
import id_11_21 from "@data/sb_ts/11.21";
import id_11_22 from "@data/sb_ts/11.22";
import id_11_23 from "@data/sb_ts/11.23";
import id_11_24 from "@data/sb_ts/11.24";
import id_11_30 from "@data/sb_ts/11.30";
import id_11_31 from "@data/sb_ts/11.31";
import id_11_32 from "@data/sb_ts/11.32";
import id_11_33 from "@data/sb_ts/11.33";
import id_11_40 from "@data/sb_ts/11.40";
import id_11_41 from "@data/sb_ts/11.41";
import id_11_42 from "@data/sb_ts/11.42";
import id_11_43 from "@data/sb_ts/11.43";
import id_11_44 from "@data/sb_ts/11.44";
import id_11_45 from "@data/sb_ts/11.45";
import id_11_50 from "@data/sb_ts/11.50";
import id_11_51 from "@data/sb_ts/11.51";
import id_11_52 from "@data/sb_ts/11.52";
import id_11_53 from "@data/sb_ts/11.53";
import id_11_60 from "@data/sb_ts/11.60";
import id_11_61 from "@data/sb_ts/11.61";
import id_11_62 from "@data/sb_ts/11.62";
import id_11_63 from "@data/sb_ts/11.63";
import id_11_90 from "@data/sb_ts/11.90";

const flattenedData: FlattenedData = {
  J82: {
    number: "J82",
    title: "Small business system",
    description: "The best small business system.",
    type: "system",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
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
        rationale:
          "It helps us design these pages if there's more than one descriptive item.",
        // moreInfo:
        //   "In theory, you should be able to keep the same business structure, but completely change your offering and still use this area. Whereas, [[20-29]] is specific to how you create and market what you sell.\n\nFor example, you are a gardener and your registered business structure is ‘sole trader’. After 5 years you decide to trade as a freelance hairdresser, another skill you have. You don’t want or need to change your structure. Sole trader is fine. And all the other IDs in this area are still relevant, you’ll just be saving some revised information in them. The government doesn’t care, as long as you keep sending them those tax dollars.\n\nFor example, over the years our company, Coruscade, has been used to run a dance production, manage an IT contractor business, and now Johnny.Decimal. Coruscade could have used [[10-19]] to administer any of these businesses. But the dance production and Johnny.Decimal need their own product and marketing areas.\n\nFor example, a shell company might have several products and/or operate several business at once. But it just has one batch of government tax reporting. The ‘timber’ business in New Zealand has a similar situation – one entity, several businesses. [[10-19]] is designed to accommodate this scenario.",
      },
    },
  },
  "11": {
    number: "11",
    title: "The business & its people",
    type: "category",
    description:
      "This category is all about the business entity and everyone who keeps it going, including staff, professional bodies, and support services.",
    emoji: "🙋",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
    extensions: {
      smallBusiness: {
        alsoSee: "Just an 'also see' to test rendering'.",
        rationale:
          "Some rationale so that we have a little more to go on, and the rationale is that more is better right?\n\n- A simple.\n- Bullet.",
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
        moreInfo: "More information about this ID",
      },
    },
  },
  "11.10": {
    number: "11.10",
    type: "id",
    title: "Official documents",
    emoji: "🗂️",
    isHeader: true,
    description:
      "The official paperwork that you need in order to start and maintain a business. ",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      smallBusiness: {
        examples: "",
        moreInfo: "",
        exceptions: "",
        alsoSee: "",
        rationale: "",
        links: "",
      },
    },
  },
  "11.11": {
    ...id_11_11,
    // number: "11.11",
    //     // type: "id",
    // title: "Structure & registrations",
    // description:
    //   "Proof of the business’ existence, **trading MODIFIED TEST structure**, `and name` -- where it all begins! LINK> [[11.12]] <LINK",
    // metadata: {
    //   createdDate: "2024-11-19",
    //   updatedDate: "2024-11-19",
    // },
    // extensions: {
    //   smallBusiness: {
    //     examples:
    //       "Business entity registrations; trading name registrations; income and sales tax registrations; trademark records for trading names; company director identity applications.",
    //     moreInfo:
    //       "This ID is about your business being born. Think of it like your birth certificate and proof of name. Deciding on a trading structure and name are the first steps to starting a business. This affects how you will operate and the various obligations you will have, especially government taxes.\n\nWhether you want to trade alone under your own name, or as a company with staff and its own name, you will have to complete certain registrations to ‘exist’. The more complicated the structure, the more paperwork there will be. But for many people with simple structures, once you’re set up, this ID should be pretty quiet (apart from ensuring registrations stay active). ",
    //     exceptions:
    //       "Put product or brand-related patents, trademarks, and copyrights in [[XX.XX]]. ",
    //     alsoSee:
    //       "Using as an example of an &lt;ol&gt;.\n\n1. First item, which is long enough to flow over not just one but two lines.\n2. Second item.\n3. Third item.\nThe list is finished.",
    //     rationale:
    //       "This ID is not related to your product or service. You might conduct different types of business under one entity. Hence, we recommend that any trademark records for the business name should go here. And if you have other patents, trademarks, or copyrights, they should live with the things they protect. ",
    //     links: "",
    //   },
    // },
  },
  "11.11+HOW1": {
    number: "11.11+HOW1",
    type: "howTo",
    title: "How to register a business in Australia",
    description:
      "A simple guide to registering a proprietary company in Australia.",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      howTo: {
        text: "# Why?\n\nThere are many important reasons to register as a proprietary company in Australia.\n\n## It protects you\n\nFrom **demons** no not really, from lawyers!\n\n# How?\n\nProbably speak to an accountant.\n\n## That's a cop-out\n\nDeal with it.\n\n# What does it cost is a long header!\n\nIsn't it.\n\n",
      },
    },
  },
  "11.11+1": {
    number: "11.11+1",
    type: "moreInfo",
    title: "Why would you want to register a business in Australia?",
    isPublic: true,
    description:
      "A simple guide to registering a proprietary company in Australia.",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      moreInfo: {
        text: "# Why?\n\nThere are many important reasons to register as a proprietary company in Australia.\n\n## It protects you\n\nFrom **demons** no not really, from lawyers!\n\n# How?\n\nProbably speak to an accountant.\n\n## That's a cop-out\n\nDeal with it.\n\n# What does it cost is a long header!\n\nIsn't it.\n\n",
      },
    },
  },
  "11.11+2": {
    number: "11.11+2",
    type: "moreInfo",
    title:
      "Some other more info article whose title I can't be bothered making up",
    description:
      "A simple guide to registering a proprietary company in Australia.",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      moreInfo: {
        text: "# Why?\n\nThere are many important reasons to register as a proprietary company in Australia.\n\n## It protects you\n\nFrom **demons** no not really, from lawyers!\n\n# How?\n\nProbably speak to an accountant.\n\n## That's a cop-out\n\nDeal with it.\n\n# What does it cost is a long header!\n\nIsn't it.\n\n",
      },
    },
  },
  "11.11+OPS1": {
    number: "11.11+OPS1",
    type: "ops",
    title: "Saving invoices, receipts, or bills in an inbox",
    description: "A one-liner.",
    metadata: { createdDate: "2024-11-19", updatedDate: "2024-11-19" },
    extensions: {
      smallBusinessOpsManual: {
        overview:
          "This manual explains how to record:\n\n- income, e.g. invoices you issue,\n- expenses, e.g. receipts for things you buy,\n- liabilities, e.g. bills you receive.\n\nIn this first phase, you store the invoice, receipt, or bill -- the 'artefact' -- in an **inbox** until it is time to process it. Processing occurs in the next phase.",
        diagram: `
        flowchart TD
    A(("[A] Start")) --> B("[B] An income, expense, or
    liability event")
    B --> C["[C] The invoice, receipt, or bill"]
    C --> D["[D] Save it for
    later processing"] & H["[H] Process the invoice,
    receipt, or bill"]
    C -.-> E["*(Bills only)*
    [E] Pay it immediately"]
    D --> F["[F] One of your inboxes"]
    F --o G["[G] ⏯️
    Every month/quarter,
    process your inboxes"]
    G --> H
    H --> I["[I] A specific JD ID for
    the thing you have processed"]
    E --> H
    I --> J((("[J] Stop")))

    C@{ shape: doc}
    D@{ shape: proc}
    F@{ shape: db}
    G@{ shape: delay}
    I@{ shape: db}
        `,
        triggers:
          "Whenever you generate or receive an invoice, receipt, or bill.",
        inputs:
          "1. The invoice, receipt, or bill.\n2. Your [[list of inboxes]].",
        process: "This is the process. We haven't documented this yet.",
        outputs: "This is the outputs. We haven't documented this yet.",
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
    type: "moreInfo",
    title: "Just an example of a more info for testing",
    isPublic: true,
    description:
      "A simple guide to registering a proprietary company in Australia.",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      moreInfo: {
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
    number: "11.21",
    type: "id",
    title: "Business plan",
    description:
      "The indispensable guide to where you are, where you want to be, and what to do to get there. ",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      smallBusiness: {
        examples: "",
        moreInfo:
          "This may be less relevant if you’re, say, a freelance graphic designer working on a project-by-project basis. But for most other businesses, whether new or existing, this is something you shouldn’t skip. A business plan contains all the good stuff like your mission and vision statements, goals, risk analysis, and financial position. Do periodic reviews and remember to save the previous version of the document when updating it. And if you have innovative services or practices, you may wish to protect the plan with a confidentiality agreement. If you’ve never written one, government business websites often have handy templates to get you started. ",
        exceptions: "",
        alsoSee:
          "If you have a confidentiality agreement to protect your business plan, store it in [[11.14]]. When it’s time to update your business plan, don’t forget to review [[11.23]]. ",
        rationale: "",
        links: "Business plan resources and templates from the: ",
      },
    },
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
    type: "category",
    number: "12",
    title: "Where I trade & how I get around",
    description:
      "This category is all about the business entity and everyone who keeps it going, including staff, professional bodies, and support services.",
    emoji: "🗺️",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
  },
  "12.01": {
    type: "id",
    number: "12.01",
    title: "Twelve oh-one",
    description: "Twelve oh-one",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
    extensions: { smallBusiness: {} },
  },
  "20-29": {
    type: "area",
    number: "20-29",
    title: "A longer area title that definitely wraps",
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
export function getChildren(
  data: FlattenedData,
  parentNumber: string
): FlattenedEntry[] | undefined {
  if (parentNumber.match(/[A-Z]\d\d/)) {
    // System provided. Get areas.
    return Object.values(data).filter((entry) => entry.type === "area");
  } else if (parentNumber.match(/\d0-\d9/)) {
    // Area provided. Get categories that match.
    console.log("Area number:", parentNumber);
    // This is an area. Find all entries whose number starts with the first
    // two digits of the area number.
    return Object.values(data).filter(
      (entry) =>
        entry.type === "category" &&
        entry.number.charAt(0) === parentNumber.charAt(0)
    );
  } else if (parentNumber.match(/^\d\d$/)) {
    // Category provided. Get IDs that match.
    console.log("Category number:", parentNumber);
    return Object.values(data).filter(
      (entry) => entry.type === "id" && entry.number.startsWith(parentNumber)
    );
  } else if (parentNumber.match(/^\d\d\.\d\d$/)) {
    // ID provided. Get all sub-IDs.
    return Object.values(data).filter(
      (entry) =>
        (entry.type === "moreInfo" ||
          entry.type === "howTo" ||
          entry.type === "ops") &&
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
