import type { FlattenedData } from "./smallBusinessFlat";

import id_00_01 from "@data/sb_ts/00.01-sign-up";
import id_00_11 from "@data/sb_ts/00.11-contact-us";
import id_00_13 from "@data/sb_ts/00.13-forum-discord";
import id_00_21 from "@data/sb_ts/00.21-welcome";
import id_00_22 from "@data/sb_ts/00.22-about-numbers";
import id_00_23 from "@data/sb_ts/00.23-community";
import id_00_31 from "@data/sb_ts/00.31-terms-of-service";
import id_00_32 from "@data/sb_ts/00.32-privacy-policy";
import sb_00_99 from "@data/sb_ts/00.99-test-standard-page";
import id_02_11 from "@data/sb_ts/02.11-user-stories";
import id_02_12 from "@data/sb_ts/02.12-definitions";
import fr_02_11_FR1 from "@data/sb_ts/02.11+FR1-jeff";
import fr_02_11_FR2 from "@data/sb_ts/02.11+FR2-gardener";
import fr_02_11_FR3 from "@data/sb_ts/02.11+FR3-accountant";
import fr_02_11_FR4 from "@data/sb_ts/02.11+FR4-software";

export const area_00_09: FlattenedData = {
  "00-09": {
    number: "00-09",
    title: "About the system",
    type: "area",
    isPublic: true,
    description:
      "This area is used to manage the system. Find information, help, support, and your user settings here.",
    metadata: {
      createdDate: "2025-01-01",
      updatedDate: "2025-01-01",
    },
  },
  "00": {
    number: "00",
    title: "System information & support",
    type: "category",
    description:
      "This category contains information about the system, tells you where to get help & support, and contains the legal stuff.",
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
    description: "A simple list of every ID in the system.",
    isHeader: true,
    isPublic: true,
    metadata: {
      createdDate: "2025-01-01",
      updatedDate: "2025-01-01",
    },
    extensions: { smallBusiness: {} },
  },
  "00.01": {
    ...id_00_01,
  },
  "00.10": {
    number: "00.10",
    title: "Help & support",
    type: "id",
    description: "Where to get help & support.",
    isHeader: true,
    isPublic: true,
    metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
    extensions: { smallBusiness: {} },
  },
  "00.11": {
    ...id_00_11,
  },
  "00.12": {
    number: "00.12",
    title: "Get started",
    type: "adHoc",
    description:
      "Here’s how to get everything set up and running. A step-by-step guide.",
    isPublic: true,
    metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
    extensions: { smallBusiness: {} },
  },
  "00.13": {
    ...id_00_13,
  },
  // "00.12": {
  //   // ...id_00_12,
  //   number: "00.12",
  //   title: "User stories",
  //   type: "adHoc",
  //   description:
  //     "This page lists four 'user stories'. We've imagined the _types_ of business that might exist, and explained how each of them might use the various categories here.",
  //   metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
  //   extensions: { smallBusiness: {} },
  // },
  // "00.12+FR1": {
  //   ...fr_00_12_FR1,
  // },
  // "00.12+FR2": {
  //   ...fr_00_12_FR2,
  // },
  // "00.12+FR3": {
  //   ...fr_00_12_FR3,
  // },
  // "00.12+FR4": {
  //   ...fr_00_12_FR4,
  // },
  // "05": {
  //   number: "05",
  //   title: "Templates & downloads",
  //   type: "category",
  //   description: "Get your file system folders & JDex files here.",
  //   metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
  //   extensions: { smallBusiness: {} },
  // },
  // "00.90": {
  //   number: "00.90",
  //   title: "Public pages",
  //   type: "id",
  //   isHeader: true,
  //   isPublic: true,
  //   description:
  //     "These pages describe the system to visitors who haven't signed up yet.",
  //   metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
  //   extensions: {
  //     smallBusiness: {
  //       alsoSee:
  //         "- [00.91 Welcome to the small business system](/00.91)\n- [00.92 A community based around standards](/00.92)\n- [00.93 About those numbers](/00.93)",
  //     },
  //   },
  // },
  "00.20": {
    number: "00.20",
    title: "The 'home page' for new visitors",
    type: "id",
    description:
      "These pages describe the system to new visitors. Start here if you've no idea what you're looking at.",
    isHeader: true,
    isPublic: true,
    metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
    extensions: { smallBusiness: {} },
  },
  "00.21": {
    ...id_00_21,
  },
  "00.22": {
    ...id_00_22,
  },
  "00.23": {
    ...id_00_23,
  },
  "00.30": {
    number: "00.30",
    title: "Legal stuff",
    type: "id",
    description: "Important legal stuff.",
    isHeader: true,
    isPublic: true,
    metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
    extensions: { smallBusiness: {} },
  },
  "00.31": {
    ...id_00_31,
  },
  "00.32": {
    ...id_00_32,
  },
  "01": {
    number: "01",
    title: "Settings & downloads",
    type: "category",
    description: "Your user settings, and the download links for the system.",
    metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
    extensions: { smallBusiness: {} },
  },
  "01.01": {
    number: "01.01",
    title: "Account management",
    type: "id",
    description: "Manage your account here.",
    isPublic: false, // allows signup if exposed
    metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
    extensions: {
      smallBusiness: {
        overview:
          "For now, this is at [Clerk](https://accounts.johnnydecimal.com/user).",
      },
    },
  },
  "01.02": {
    number: "01.02",
    title: "User settings",
    type: "adHoc",
    isPublic: true,
    description: "This ID contains your user settings.",
    metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
    extensions: { smallBusiness: {} },
  },
  "01.03": {
    number: "01.03",
    title: "System downloads",
    type: "adHoc",
    isPublic: true,
    description: "Get your file system folders & JDex files here.",
    metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
    extensions: { smallBusiness: {} },
  },
  "02": {
    number: "02",
    title: "Education & resources",
    type: "category",
    description: "Learn how to use the system.",
    metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
    extensions: { smallBusiness: {} },
  },
  "02.10": {
    number: "02.10",
    title: "Education",
    type: "id",
    description: "Learn how to use the system.",
    isHeader: true,
    isPublic: true,
    metadata: { createdDate: "2025-01-01", updatedDate: "2025-01-01" },
    extensions: { smallBusiness: {} },
  },
  "02.11": { ...id_02_11 },
  "02.11+FR1": { ...fr_02_11_FR1 },
  "02.11+FR2": { ...fr_02_11_FR2 },
  "02.11+FR3": { ...fr_02_11_FR3 },
  "02.11+FR4": { ...fr_02_11_FR4 },
  "02.12": { ...id_02_12 },
  "00.99": {
    // The test page with every element. Needs to be hidden.
    ...sb_00_99,
  },
};
