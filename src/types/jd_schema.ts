export interface JohnnyDecimalSystem {
  systemId: string; // e.g. A01, ref. https://jdcm.al/13.11
  systemTitle: string; // e.g. "Johnny's personal system"
  schemaVersion: string;
  areas: {
    [id: string]: Area;
  };
}

export interface Area {
  id: string;
  title: string;
  metadata: ACMetadata;
  categories?: {
    [id: string]: Category;
  };
  translations?: {
    [languageCode: string]: Translation;
  };
}

export interface Category {
  id: string;
  title: string;
  description?: string; // Remember this is a global standard: you don't _have_ to have a description
  emoji?: string;
  metadata: ACMetadata;
  ids?: {
    [id: string]: ID;
  };
  translations?: {
    [languageCode: string]: Translation;
  };
}

export interface ID {
  id: string;
  title: string;
  description?: string;
  emoji?: string;
  isHeader?: boolean;
  metadata: IDMetadata;
  translations?: {
    [languageCode: string]: Translation;
  };
  extensions?: Extensions;
}

export interface JdIdObjectWithACStrings {
  id: ID;
  areaId: string;
  areaTitle: string;
  categoryId: string;
  categoryTitle: string;
  categoryEmoji: string;
}

interface Dates {
  createdDate: string; // no harm always requiring it; why not?
  updatedDate: string; // allows us to do diffs
}

export interface ACMetadata extends Dates {
  /* TODO: think about AC versioning.
     Is it MAJOR for area, MINOR for category, PATCH?
     1.1.0 = first area release
     1.2.0 = this category updated; categories in area remain stable
     2.1.0 = the categories in this area updated

     …or is the only thing that it makes sense to track a version on
     a category? And areas are just made up of versioned categories?
   */
  version?: string;
}

export interface IDMetadata extends Dates {
  // emoji?: string; // nope, it's just a property
  // isHeader?: boolean; // nope, it's just a property
  // not tags: we _generate_ tags, we don't store them
}

export interface Translation {
  title: string;
  // TODO: work this out when you get to it
  // metadata: Metadata;
}

export interface Extensions {
  smallBusiness?: ExtensionSmallBusiness;
  // operationsManual?: OperationsManual;
  // [key: string]: any; // Allows for future extensibility
}

export interface UserOptions {
  baseFilePath: string;
  hashTagType: "bear" | "generic" | "none";
  headerType: "square" | "hash" | "none";
  jdexFileType: "markdown" | "plaintext" | "html";
  useEmoji: boolean;
}

interface ExtensionSmallBusiness {
  // description: string; is on the base object
  examples?: string;
  moreInfo?: string;
  exceptions?: string;
  alsoSee?: string;
  rationale?: string;
  links?: string;
}
