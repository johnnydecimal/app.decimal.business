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

export interface FurtherReadingEntry {
  // Doesn't extend BaseEntry: no description
  number: string;
  title: string;
  type: "furtherReading";
  isPublic?: boolean;
  metadata: Metadata;
  extensions: {
    furtherReading: {
      text: string; // freeform Markdown; usually just a few paras
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
import { category_11 } from "./category_11";
import { category_12 } from "./category_12";
import { category_13 } from "./category_13";
import { category_14 } from "./category_14";

import fr_15_90_FR1 from "@data/sb_ts/15.90+FR1-why-are-there-no-ids-here";
import fr_15_90_FR2 from "@data/sb_ts/15.90+FR2-leave-yourself-jdex-notes";

// TODO you could add a testEnv: property and filter those out in prod -- two entries at the top here you can use to test (make them an unused area?)
const flattenedData: FlattenedData = {
  J82: {
    number: "J82",
    title: "Small business system",
    description: "A framework and global standard for every small business.",
    type: "system",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
  },
  // "11+FR1": {
  //   number: "11+FR1",
  //   title: "Cat11 TEST FR",
  //   type: "furtherReading",
  //   isPublic: true,
  //   metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
  //   extensions: {
  //     furtherReading: {
  //       text: "yeah",
  //     },
  //   },
  // },
  // "10-19+FR1": {
  //   number: "10-19+FR1",
  //   title: "Area10-19 TEST FR",
  //   type: "furtherReading",
  //   isPublic: true,
  //   metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
  //   extensions: {
  //     furtherReading: {
  //       text: "yeah",
  //     },
  //   },
  // },
  ...area_00_09,
  "10-19": {
    number: "10-19",
    title: "Company administration",
    type: "area",
    description:
      "In [[10-19]], our goal is that these categories could be the foundation of _any_ business, regardless of the product or service you offer.",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
    extensions: {
      smallBusiness: {},
    },
  },
  ...category_11,
  ...category_12,
  ...category_13,
  ...category_14,
  "15.90+FR1": { ...fr_15_90_FR1 },
  "15.90+FR2": { ...fr_15_90_FR2 },

  "20-29": {
    type: "area",
    number: "20-29",
    title: "Product, marketing, customers, & sales",
    description:
      "Everything to do with _your_ product: suppliers, product, manufacturing, marketing, and sales.",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
  },
  "21": {
    number: "21",
    title: "Products",
    type: "category",
    description: "What they are, and how you make them.",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
    extensions: {
      smallBusiness: {
        overview: "This area is still in production.",
      },
    },
  },
  "22": {
    number: "22",
    title: "Suppliers",
    type: "category",
    description: "Where you buy the stuff you need.",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
    extensions: {
      smallBusiness: {
        overview: "This area is still in production.",
      },
    },
  },
  "23": {
    number: "23",
    title: "Equipment & tools",
    type: "category",
    description: "The gear you need to make your product.",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
    extensions: {
      smallBusiness: {
        overview: "This area is still in production.",
      },
    },
  },
  "24": {
    number: "24",
    title: "Inventory & stock",
    type: "category",
    description: "What you have on hand to sell.",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
    extensions: {
      smallBusiness: {
        overview: "This area is still in production.",
      },
    },
  },
  "25": {
    number: "25",
    title: "Marketing",
    type: "category",
    description: "How you get the word out about your product.",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
    extensions: {
      smallBusiness: {
        overview: "This area is still in production.",
      },
    },
  },
  "26": {
    number: "26",
    title: "Channels",
    type: "category",
    description: "Where you sell your product.",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
    extensions: {
      smallBusiness: {
        overview: "This area is still in production.",
      },
    },
  },
  "27": {
    number: "27",
    title: "Customers",
    type: "category",
    description: "Who buys your product.",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
    extensions: {
      smallBusiness: {
        overview: "This area is still in production.",
      },
    },
  },
  "28": {
    number: "28",
    title: "Sales",
    type: "category",
    description: "It's why we're all here, right?",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
    extensions: {
      smallBusiness: {
        overview: "This area is still in production.",
      },
    },
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
        (entry.type === "id" ||
          entry.type === "furtherReading" ||
          entry.type === "adHoc") &&
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
