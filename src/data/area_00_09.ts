import type { FlattenedData } from "./smallBusinessFlat";

export const area_00_09: FlattenedData = {
  "00-09": {
    number: "00-09",
    title: "About the system",
    type: "area",
    parentNumber: "J82",
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
    parentNumber: "00-09",
    description:
      "This category contains information about the system, its help pages, and your user settings.",
    metadata: {
      createdDate: "2025-01-01",
      updatedDate: "2025-01-01",
    },
  },
  "00.00": {
    number: "00.00",
    title: "System index",
    type: "id",
    parentNumber: "00",
    description: "This section contains a list of every ID in the system.",
    isHeader: true,
    metadata: {
      createdDate: "2025-01-01",
      updatedDate: "2025-01-01",
    },
  },
  "00.10": {
    number: "00.10",
    title: "Help",
    type: "id",
    parentNumber: "00",
    description: "This section contains the system's help pages.",
    isHeader: true,
    metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
  },
  "00.11": {
    number: "00.11",
    title: "Welcome & where to find help",
    type: "adHoc",
    parentNumber: "00",
    description: "Welcome to the system. Here's where to find help.",
    metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
  },
  "00.20": {
    number: "00.20",
    title: "Settings",
    type: "id",
    parentNumber: "00",
    description: "This section contains your user settings.",
    isHeader: true,
    metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
  },
  "00.21": {
    number: "00.21",
    title: "User settings",
    type: "adHoc",
    parentNumber: "00",
    description: "This section contains your user settings.",
    metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
  },
};
