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
            "11.12": {
              id: "11.12",
              title: "Licences, permits, & accreditations",
              description:
                "Documents that you apply for, or are earned via training, so you can legally provide a service or operate in a particular location.",
              metadata: {
                createdDate: "2024-11-18",
                updatedDate: "2024-11-18",
              },
              extensions: {
                smallBusiness: {
                  examples:
                    "Liquor licence; safe food handling certificate; truck or taxi licence; police check; zoning permit; government security clearance; market stall holder permit; working with children check; tradesperson licence; responsible service of alcohol certificate; environmental permit; any other legally-required core qualification.",
                  moreInfo:
                    "This ID is for storing copies of any licence, permit, or accreditation that your business cannot trade without. First, you registered your business. Now you need the legal proof that you can provide a product or service.\n\nThis ‘proof’ will vary considerably depending on what you do. If you run a bar, you’ll need a liquor licence. If you’re a healthcare provider in private practice, you must have a degree, as well as any other required accreditations.\n\nYou might be thinking, “hey Johnny.Decimal, you’ve always said not to have copies of things in different places”. Absolutely – for documents that change, like your budget spreadsheet. You should never have multiple copies of things like that because someone will inevitably update the wrong version.\n\nHowever, licences, permits, and accreditations are static documents. Probably a PDF or a piece of paper. It’s okay to put copies of them where it’s helpful and makes sense to do so. They’re not going to change unless they are renewed.\n\nThis is an important ID to keep up-to-date in your JDex and to set reminders for to ensure nothing expires.",
                  alsoSee:
                    "Manage ongoing training or education in [[11.50]], but store a copy of the proof of completion here if it’s essential to your ability to trade.",
                  rationale:
                    "If an inspector turns up at your door, having copies of these core documents in one place will be very handy. They’re also highly visible at the top of your system so they’re not lost or forgotten.",
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
