// Auto-generated from 14.33-support-contracts.md
import type { IdEntry } from "@data/smallBusinessFlat";
const entry: IdEntry = {
  number: "14.33",
  title: "Support contracts",
  description:
    "Any paid agreement that means you can contact a human for technical support.",
  type: "id",
  isPublic: true,
  isHeader: false,
  metadata: {
    createdDate: "2025-02-17T04:34:36.780Z",
    updatedDate: "2025-02-17T04:34:36.780Z",
  },
  extensions: {
    smallBusiness: {
      overview:
        "This ID is for any paid technical support that _you_ can access.\n\nIt might be a contract or service level agreement (SLA) with a real-world IT support business. Or perhaps you’ve paid for a higher level of support from an online service, such as Google Workspace or Microsoft 365.\n\nEither way, keep any relevant official documents and/or notes on how to access help here.",
      exceptions:
        "This is not for internal troubleshooting instructions that you have written, those live with the device or service they relate to.\n\nThis is not for customer management and support, that’s over in [[20-29]]. But if you use some sort of ‘technology’ that creates tickets to deal with customer feedback (e.g. Zendesk), that’s a third-party service, so note it in [[14.32]].",
    },
  },
};
export default entry;
