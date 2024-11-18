import type { JohnnyDecimalSystem } from "../../types/jd_schema";

const smallBusiness: JohnnyDecimalSystem = {
  systemId: "J92",
  systemTitle: "Small Business",
  schemaVersion: "1.0",
  areas: {
    "10-19": {
      id: "10-19",
      title: "Company administration",
      metadata: {
        createdDate: "2024-11-18",
        updatedDate: "2024-11-18",
      },
      categories: {
        "11": {
          id: "11",
          title: "The business & its people",
          metadata: {
            createdDate: "2024-11-18",
            updatedDate: "2024-11-18",
          },
          ids: {
            "11.00": {
              id: "11.00",
              title: "The business & its people category management",
              emoji: "⚙️", // gear
              isHeader: true,
              metadata: {
                createdDate: "2024-11-18",
                updatedDate: "2024-11-18",
              },
            },
            "11.10": {
              id: "11.10",
              title: "Official documents",
              description:
                "The official paperwork that you need in order to start and maintain a business.",
              emoji: "🗂️", // card index dividers
              isHeader: true,
              metadata: {
                createdDate: "2024-11-18",
                updatedDate: "2024-11-18",
              },
            },
            "11.11": {
              id: "11.11",
              title: "Structure & registrations",
              description:
                "Proof of the business’ existence, trading structure, and name – where it all begins!",
              metadata: {
                createdDate: "2024-11-18",
                updatedDate: "2024-11-18",
              },
              extensions: {
                smallBusiness: {
                  examples:
                    "Business entity registrations; trading name registrations; income and sales tax registrations; trademark records for trading names; company director identity applications.",
                  moreInfo:
                    "This ID is about your business being born. Think of it like your birth certificate and proof of name. Deciding on a trading structure and name are the first steps to starting a business. This affects how you will operate and the various obligations you will have, especially government taxes.\n\nWhether you want to trade alone under your own name, or as a company with staff and its own name, you will have to complete certain registrations to ‘exist’. The more complicated the structure, the more paperwork there will be. But for many people with simple structures, once you’re set up, this ID should be pretty quiet (apart from ensuring registrations stay active).",
                  exceptions:
                    "Put product or brand-related patents, trademarks, and copyrights in [[XX.XX]]",
                  rationale:
                    "This ID is not related to your product or service. You might conduct different types of business under one entity. Hence, we recommend that any trademark records for the business name should go here. And if you have other patents, trademarks, or copyrights, they should live with the things they protect.",
                },
              },
            },
          },
        },
      },
    },
    "20-29": {
      id: "20-29",
      title: "Product & customers",
      metadata: {
        createdDate: "2024-11-18",
        updatedDate: "2024-11-18",
      },
    },
  },
};

export default smallBusiness;
