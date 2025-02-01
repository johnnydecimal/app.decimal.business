import type { FlattenedData } from "./smallBusinessFlat";

const flattenedData: FlattenedData = {
  J82: {
    number: "J82",
    title: "Small business test data",
    description: "The best small business system's test data set.",
    type: "system",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
  },
  "10-19": {
    number: "10-19",
    title: "Short",
    type: "area",
    parentNumber: "J82",
    description:
      "In [[10-19]], our goal is that these categories could be the foundation of _any_ business, regardless of the product or service you offer.",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
    extensions: {
      smallBusiness: {
        exceptions:
          "Just some text in an exceptions field so we can **see** _how_ `it` renders with a [[11.11]] wiki-link for good measure.",
        rationale:
          "It helps us design these pages if there's more than one descriptive item.",
      },
    },
  },
  "11": {
    number: "11",
    parentNumber: "10-19",
    title: "The business & its people is a longer title that wraps",
    type: "category",
    description:
      "This category is all about the business entity and everyone who keeps it going, including staff, professional bodies, and support services.",
    emoji: "🙋",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
    extensions: {
      smallBusiness: {
        alsoSee: "Just an 'also see' to test rendering'.",
        rationale:
          "Some rationale so that we have a little more to go on, and the rationale is that more is better right?\n\n- A simple.\n- Bullet.",
      },
    },
  },
  "11.11": {
    number: "11.11",
    parentNumber: "11",
    type: "id",
    title: "Structure & registrations",
    description:
      "Proof of the business’ existence, **trading MODIFIED TEST structure**, `and name` -- where it all begins! LINK> [[11.12]] <LINK",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      smallBusiness: {
        examples:
          "Business entity registrations; trading name registrations; income and sales tax registrations; trademark records for trading names; company director identity applications.",
        moreInfo:
          "This ID is about your business being born. Think of it like your birth certificate and proof of name. Deciding on a trading structure and name are the first steps to starting a business. This affects how you will operate and the various obligations you will have, especially government taxes.\n\nWhether you want to trade alone under your own name, or as a company with staff and its own name, you will have to complete certain registrations to ‘exist’. The more complicated the structure, the more paperwork there will be. But for many people with simple structures, once you’re set up, this ID should be pretty quiet (apart from ensuring registrations stay active). ",
        exceptions:
          "Put product or brand-related patents, trademarks, and copyrights in [[XX.XX]]. ",
        alsoSee:
          "Using as an example of an &lt;ol&gt;.\n\n1. First item, which is long enough to flow over not just one but two lines.\n2. Second item.\n3. Third item.\nThe list is finished.",
        rationale:
          "This ID is not related to your product or service. You might conduct different types of business under one entity. Hence, we recommend that any trademark records for the business name should go here. And if you have other patents, trademarks, or copyrights, they should live with the things they protect. ",
        links: "",
      },
    },
  },
  "11.12": {
    number: "11.12",
    parentNumber: "11",
    type: "id",
    title: "Licences, permits, & accreditations",
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
          "This ID is for storing copies of any licence, permit, or accreditation that your business cannot trade without. First, you registered your business. Now you need the legal proof that you can provide a product or service.\n\nThis ‘proof’ will vary considerably depending on what you do. If you run a bar, you’ll need a liquor licence. If you’re a healthcare provider in private practice, you must have a degree, as well as any other required accreditations.\n\nYou might be thinking, “hey Johnny.Decimal, you’ve always said not to have copies of things in different places”. Absolutely – for documents that change, like your budget spreadsheet. You should never have multiple copies of things like that because someone will inevitably update the wrong version.\n\nHowever, licences, permits, and accreditations are static documents. Probably a PDF or a piece of paper. It’s okay to put copies of them where it’s helpful and makes sense to do so. They’re not going to change unless they are renewed.\n\nThis is an important ID to keep up-to-date in your JDex and to set reminders for to ensure nothing expires. ",
        exceptions: "",
        alsoSee:
          "Manage ongoing training or education in [[11.50]], but store a copy of the proof of completion here if it’s essential to your ability to trade. ",
        rationale:
          "If an inspector turns up at your door, having copies of these core documents in one place will be very handy. They’re also highly visible at the top of your system so they’re not lost or forgotten. ",
        links: "",
      },
    },
  },
  "11.13": {
    number: "11.13",
    parentNumber: "11",
    type: "id",
    title: "Compliance",
    description:
      "Any laws, codes, or standards relevant to your business, including inspections and audits that may be required. ",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      smallBusiness: {
        examples:
          "Workplace health and safety compliance; environmental laws; industry manufacturing standards; payroll governance, building standards and safety inspections; retail fair trading laws; codes of conduct for advertising and marketing; food safety inspections; financial audits; local and international import/export regulations; laws around the supply of alcohol; employment and unfair dismissal laws. ",
        moreInfo:
          "You have a registered business and the legal permission to provide a product or service. Now you must adhere to the regulatory environment that you are trading in. Again, this will depend entirely on what you do. There may be many different local, state, national, or international laws or requirements to be aware of.\n\nAnd who knows, if you run a fishing business, things like the ‘law of the sea’ may apply.\n\nCompliance might mean that:\n- Your business must obey certain laws, regulations, or codes of practice.\n- Your business must undergo one-off or ongoing inspections or audits.\n- You and your staff must do ongoing training.\n- The products you sell or manufacture must meet certain standards.\nEither way, store copies of regulations and proof that you’re complying with them here. This is an important ID to keep up-to-date in your JDex and to set reminders for to ensure you stay above board.\n\nUsing as an example of an &lt;ol&gt;.\n\n1. First item, which is long enough to flow over not just one but two lines.\n2. Second item.\n3. Third item.\nThe list is finished.",
        exceptions: "",
        alsoSee:
          "Manage ongoing training or education in [[11.50]], but store a copy of the proof of completion here if it helps you meet compliance obligations. ",
        rationale: "",
        links: "",
      },
    },
  },
  "12": {
    type: "category",
    number: "12",
    title: "Where I trade & how I get around",
    parentNumber: "10-19",
    description:
      "This category is all about the business entity and everyone who keeps it going, including staff, professional bodies, and support services.",
    emoji: "🗺️",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
  },
  "12.01": {
    type: "id",
    number: "12.01",
    title: "Twelve oh-one",
    description: "Twelve oh-one",
    parentNumber: "12",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
  },
  "20-29": {
    type: "area",
    number: "20-29",
    parentNumber: "J82",
    title: "A longer area title that definitely wraps",
    description: "The twenties",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
  },
};

export default flattenedData;
