import type { FlattenedData } from "./smallBusinessFlat";

import id_00_12 from "@data/sb_ts/00.12-user-stories";
import fr_00_12_FR1 from "@data/sb_ts/00.12+FR1-jeff";
import fr_00_12_FR2 from "@data/sb_ts/00.12+FR2-gardener";
import fr_00_12_FR3 from "@data/sb_ts/00.12+FR3-accountant";
import fr_00_12_FR4 from "@data/sb_ts/00.12+FR4-software";

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
    type: "adHoc",
    description: "This section contains a list of every ID in the system.",
    isHeader: true,
    isPublic: true,
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
  "00.12": {
    ...id_00_12,
  },
  "00.12+FR1": {
    ...fr_00_12_FR1,
  },
  "00.12+FR2": {
    ...fr_00_12_FR2,
  },
  "00.12+FR3": {
    ...fr_00_12_FR3,
  },
  "00.12+FR4": {
    ...fr_00_12_FR4,
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
  "00.90": {
    number: "00.90",
    title: "Public pages",
    type: "id",
    isHeader: true,
    isPublic: true,
    description:
      "These pages describe the system to visitors who haven't signed up yet.",
    metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
    extensions: {
      smallBusiness: {
        alsoSee:
          "- [00.91 Welcome to the small business system](/00.91)\n- [00.92 A community based around standards](/00.92)\n- [00.93 About those numbers](/00.93)",
      },
    },
  },
  "00.91": {
    number: "00.91",
    title: "Welcome to the small business system",
    type: "adHoc",
    isPublic: true,
    description: "A framework and global standard for every small business.",
    metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
    extensions: { smallBusiness: {} },
  },
  "00.92": {
    number: "00.92",
    title: "A community based around standards",
    type: "adHoc",
    isPublic: true,
    description:
      "An open community sharing a common language makes us all more effective.",
    metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
    extensions: { smallBusiness: {} },
  },
  "00.93": {
    number: "00.93",
    title: "About those numbers",
    type: "adHoc",
    isPublic: true,
    description:
      "Yeah, there are a lot of numbers. Here's why they're so useful (and why you shouldn't be afraid of them).",
    metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
    extensions: { smallBusiness: {} },
  },
};
