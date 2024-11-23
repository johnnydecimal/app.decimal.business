// Common metadata type
type Metadata = {
  createdDate: string;
  updatedDate: string;
};

// Entry types
export type EntryType = "area" | "category" | "id";

// Base interface for common fields
interface BaseEntry {
  title: string;
  type: EntryType;
  description?: string;
  emoji?: string;
  metadata: Metadata;
  parentId?: string; // Optional for top-level entries
}

// Specialized interfaces
interface AreaEntry extends BaseEntry {
  type: "area";
}

interface CategoryEntry extends BaseEntry {
  type: "category";
  parentId: string; // All categories must have a parent area
}

interface IdEntry extends BaseEntry {
  type: "id";
  parentId: string; // All ids must have a parent category
  isHeader?: boolean;
  extensions?: {
    smallBusiness: {
      examples?: string;
      moreInfo?: string;
      exceptions?: string;
      alsoSee?: string;
      rationale?: string;
      links?: string;
    };
  };
}

// Union type for all entries
type FlattenedEntry = AreaEntry | CategoryEntry | IdEntry;

// Flattened data structure type
type FlattenedData = Record<string, FlattenedEntry>;

const flattenedData: FlattenedData = {
  "10-19": {
    title: "Company administration",
    type: "area",
    description:
      "In [[10-19]], our goal is that these categories could be the foundation of _any_ business, regardless of the product or service you offer. In theory, you should be able to keep the same business structure, but completely change your offering and still use this area. Whereas, [[20-29]] is specific to how you create and market what you sell.\n\nFor example, you are a gardener and your registered business structure is ‘sole trader’. After 5 years you decide to trade as a freelance hairdresser, another skill you have. You don’t want or need to change your structure. Sole trader is fine. And all the other IDs in this area are still relevant, you’ll just be saving some revised information in them. The government doesn’t care, as long as you keep sending them those tax dollars.\n\nFor example, over the years our company, Coruscade, has been used to run a dance production, manage an IT contractor business, and now Johnny.Decimal. Coruscade could have used [[10-19]] to administer any of these businesses. But the dance production and Johnny.Decimal need their own product and marketing areas.\n\nFor example, a shell company might have several products and/or operate several business at once. But it just has one batch of government tax reporting. The ‘timber’ business in New Zealand has a similar situation – one entity, several businesses. [[10-19]] is designed to accommodate this scenario.",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
  },
  "11": {
    title: "The business & its people",
    type: "category",
    description:
      "This category is all about the business entity and everyone who keeps it going, including staff, professional bodies, and support services.",
    emoji: "🙋",
    parentId: "10-19",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
  },
  "11.00": {
    title: "Category management",
    type: "id",
    parentId: "11",
    metadata: { createdDate: "2024-11-19", updatedDate: "2024-11-19" },
    extensions: {
      smallBusiness: {
        examples: "Example of category management",
        moreInfo: "More information about this ID",
      },
    },
  },
  "11.10": {
    title: "Official documents",
    type: "id",
    parentId: "11",
    isHeader: true,
    emoji: "🗂️",
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
    title: "Structure & registrations",
    type: "id",
    parentId: "11",
    description:
      "Proof of the business’ existence, **trading MODIFIED TEST structure**, `and name` -- where it all begins! ",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      smallBusiness: {
        examples:
          "Business entity registrations; trading name registrations; income and sales tax registrations; trademark records for trading names; company director identity applications. -- ",
        moreInfo:
          "This ID is about your business being born. Think of it like your birth certificate and proof of name. Deciding on a trading structure and name are the first steps to starting a business. This affects how you will operate and the various obligations you will have, especially government taxes. Whether you want to trade alone under your own name, or as a company with staff and its own name, you will have to complete certain registrations to ‘exist’. The more complicated the structure, the more paperwork there will be. But for many people with simple structures, once you’re set up, this ID should be pretty quiet (apart from ensuring registrations stay active). ",
        exceptions:
          "Put product or brand-related patents, trademarks, and copyrights in [[XX.XX]]. ",
        alsoSee: "",
        rationale:
          "This ID is not related to your product or service. You might conduct different types of business under one entity. Hence, we recommend that any trademark records for the business name should go here. And if you have other patents, trademarks, or copyrights, they should live with the things they protect. ",
        links: "",
      },
    },
  },
  "11.12": {
    title: "Licences, permits, & accreditations",
    type: "id",
    parentId: "11",
    description:
      "Documents that you apply for, or are earned via training, so you can legally provide a service or operate in a particular location. ",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      smallBusiness: {
        examples:
          "Liquor licence; safe food handling certificate; truck or taxi licence; police check; zoning permit; government security clearance; market stall holder permit; working with children check; tradesperson licence; responsible service of alcohol certificate; environmental permit; any other legally-required core qualification. ",
        moreInfo:
          "This ID is for storing copies of any licence, permit, or accreditation that your business cannot trade without. First, you registered your business. Now you need the legal proof that you can provide a product or service. This ‘proof’ will vary considerably depending on what you do. If you run a bar, you’ll need a liquor licence. If you’re a healthcare provider in private practice, you must have a degree, as well as any other required accreditations. You might be thinking, “hey Johnny.Decimal, you’ve always said not to have copies of things in different places”. Absolutely – for documents that change, like your budget spreadsheet. You should never have multiple copies of things like that because someone will inevitably update the wrong version. However, licences, permits, and accreditations are static documents. Probably a PDF or a piece of paper. It’s okay to put copies of them where it’s helpful and makes sense to do so. They’re not going to change unless they are renewed. This is an important ID to keep up-to-date in your JDex and to set reminders for to ensure nothing expires. ",
        exceptions: "",
        alsoSee:
          "Manage ongoing training or education in [[11.50]], but store a copy of the proof of completion here if it’s essential to your ability to trade. ",
        rationale:
          "If an inspector turns up at your door, having copies of these core documents in one place will be very handy. They’re also highly visible at the top of your system so they’re not lost or forgotten. ",
        links: "",
      },
    },
  },
  "12": {
    title: "Where I trade & how I get around",
    type: "category",
    description:
      "This category is all about the business entity and everyone who keeps it going, including staff, professional bodies, and support services.",
    emoji: "🗺️",
    parentId: "10-19",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
  },
  "12.01": {
    title: "Twelve oh-one",
    parentId: "10-19",
    type: "id",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
  },
  "20-29": {
    title: "Company administration",
    type: "area",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
  },
};

export default flattenedData;

// Utility function to get all entries by type
function getAllByType(data: FlattenedData, type: EntryType): FlattenedEntry[] {
  return Object.values(data).filter((entry) => entry.type === type);
}

// Utility function to get all children of a given parent ID
function getChildren(data: FlattenedData, parentId: string): FlattenedEntry[] {
  return Object.values(data).filter((entry) => entry.parentId === parentId);
}

// Utility function to find an entry by key
export function findById(
  data: FlattenedData,
  id: string
): FlattenedEntry | undefined {
  return data[id];
}

// Utility function to validate the entire data structure
function validateStructure(data: FlattenedData): string[] {
  const errors: string[] = [];
  for (const key in data) {
    const entry = data[key];
    if (entry.parentId && !data[entry.parentId]) {
      errors.push(
        `Entry with key ${key} has a non-existent parent ID ${entry.parentId}.`
      );
    }
  }
  return errors;
}

// Example usage
const allAreas = getAllByType(flattenedData, "area");
console.log("All Areas:", allAreas);

const categoryChildren = getChildren(flattenedData, "11");
console.log("Children of Category '11':", categoryChildren);

const specificEntry = findById(flattenedData, "11.00");
console.log("Entry with ID '11.00':", specificEntry);
