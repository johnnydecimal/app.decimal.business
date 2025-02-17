import type { FlattenedData } from "./smallBusinessFlat";

import id_00_91 from "@data/sb_ts/00.91-welcome-to-the-small-business-system";

export const area_00_09: FlattenedData = {
  "00-09": {
    number: "00-09",
    title: "About the system",
    type: "area",
    isPublic: true,
    description: "This area is used to manage the system.",
    metadata: {
      createdDate: "2025-01-01",
      updatedDate: "2025-01-01",
    },
  },
  "00": {
    number: "00",
    title: "System information, help, and settings",
    type: "category",
    description:
      "This category contains information about the system, its help pages, and your user settings.",
    metadata: {
      createdDate: "2025-01-01",
      updatedDate: "2025-01-01",
    },
    extensions: { smallBusiness: {} },
  },
  "00.00": {
    number: "00.00",
    title: "System index",
    type: "id",
    description: "This section contains a list of every ID in the system.",
    isHeader: true,
    metadata: {
      createdDate: "2025-01-01",
      updatedDate: "2025-01-01",
    },
    extensions: { smallBusiness: {} },
  },
  "00.10": {
    number: "00.10",
    title: "Help",
    type: "id",
    description: "This section contains the system's help pages.",
    isHeader: true,
    metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
    extensions: { smallBusiness: {} },
  },
  "00.11": {
    number: "00.11",
    title: "Welcome & where to find help",
    type: "adHoc",
    description: "Welcome to the system. Here's where to find help.",
    metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
    extensions: { smallBusiness: {} },
  },
  "00.20": {
    number: "00.20",
    title: "Settings",
    type: "id",
    description: "This section contains your user settings.",
    isHeader: true,
    metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
    extensions: { smallBusiness: {} },
  },
  "00.21": {
    number: "00.21",
    title: "User settings",
    type: "adHoc",
    description: "This section contains your user settings.",
    metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
  },
  "05": {
    number: "05",
    title: "Templates & downloads",
    type: "category",
    description: "Get your file system folders & JDex files here.",
    metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
    extensions: { smallBusiness: {} },
  },
  "05.11": {
    number: "05.11",
    title: "System downloads",
    type: "adHoc",
    description: "Get your file system folders & JDex files here.",
    metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
    extensions: { smallBusiness: {} },
  },
  "00.91": {
    ...id_00_91,
  },
};
