// Common metadata type
type Metadata = {
  createdDate: string;
  updatedDate: string;
};

// Entry types
export type EntryType = "area" | "category" | "id" | "ops";

// Base interface for common fields
interface BaseEntry {
  number: string;
  title: string;
  type: EntryType;
  description: string; // Late change: everything must have a description; document the rationale later
  emoji?: string;
  metadata: Metadata;
}

// Specialized interfaces
export interface AreaEntry extends BaseEntry {
  type: "area";
  parentNumber?: string; // Optional for top-level entries
}

export interface CategoryEntry extends BaseEntry {
  type: "category";
  parentNumber: string; // All categories must have a parent area
}

export interface IdEntry extends BaseEntry {
  type: "id";
  parentNumber: string; // All ids must have a parent category
  isHeader?: boolean;
  extensions?: {
    smallBusiness?: {
      examples?: string;
      moreInfo?: string;
      exceptions?: string;
      alsoSee?: string;
      rationale?: string;
      links?: string;
    };
  };
}

export interface OpsEntry extends BaseEntry {
  type: "ops";
  parentNumber: string; // All ids must have a parent category
  // isHeader?: boolean;
  extensions: {
    smallBusinessOpsManual: {
      overview: string; // remember the ID has a description
      diagram?: string;
      trigger: string;
      inputs: string;
      process: string;
      outputs: string;
    };
  };
}

// Union type for all entries
export type FlattenedEntry = AreaEntry | CategoryEntry | IdEntry | OpsEntry;

// Flattened data structure type
type FlattenedData = Record<string, FlattenedEntry>;

const flattenedData: FlattenedData = {
  "10-19": {
    number: "10-19",
    title: "Company administration",
    type: "area",
    description:
      "In [[10-19]], our goal is that these categories could be the foundation of _any_ business, regardless of the product or service you offer. In theory, you should be able to keep the same business structure, but completely change your offering and still use this area. Whereas, [[20-29]] is specific to how you create and market what you sell.\n\nFor example, you are a gardener and your registered business structure is ‘sole trader’. After 5 years you decide to trade as a freelance hairdresser, another skill you have. You don’t want or need to change your structure. Sole trader is fine. And all the other IDs in this area are still relevant, you’ll just be saving some revised information in them. The government doesn’t care, as long as you keep sending them those tax dollars.\n\nFor example, over the years our company, Coruscade, has been used to run a dance production, manage an IT contractor business, and now Johnny.Decimal. Coruscade could have used [[10-19]] to administer any of these businesses. But the dance production and Johnny.Decimal need their own product and marketing areas.\n\nFor example, a shell company might have several products and/or operate several business at once. But it just has one batch of government tax reporting. The ‘timber’ business in New Zealand has a similar situation – one entity, several businesses. [[10-19]] is designed to accommodate this scenario.",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
  },
  "11": {
    number: "11",
    parentNumber: "10-19",
    title: "The business & its people",
    type: "category",
    description:
      "This category is all about the business entity and everyone who keeps it going, including staff, professional bodies, and support services.",
    emoji: "🙋",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
  },
  "11.00": {
    number: "11.00",
    parentNumber: "11",
    type: "id",
    description: "The 'standard zero' ID for category management.",
    title: "Category management",
    isHeader: true,
    metadata: { createdDate: "2024-11-19", updatedDate: "2024-11-19" },
    extensions: {
      smallBusiness: {
        examples: "Example of category management",
        moreInfo: "More information about this ID",
      },
    },
  },
  "11.03+OPS1": {
    number: "11.01+OPS1",
    parentNumber: "11",
    type: "ops",
    title: "Saving invoices, receipts, or bills in an inbox",
    description: "A one-liner.",
    metadata: { createdDate: "2024-11-19", updatedDate: "2024-11-19" },
    extensions: {
      smallBusinessOpsManual: {
        overview:
          "This manual explains how to record:\n\n- income, e.g. invoices you issue,\n- expenses, e.g. receipts for things you buy,\n- liabilities, e.g. bills you receive.\n\nIn this first phase, you store the invoice, receipt, or bill -- the 'artefact' -- in an **inbox** until it is time to process it. Processing occurs in the next phase.",
        diagram: `
        flowchart TD
    A(("[A] Start")) --> B("[B] An income, expense, or
    liability event")
    B --> C["[C] The invoice, receipt, or bill"]
    C --> D["[D] Save it for
    later processing"] & H["[H] Process the invoice,
    receipt, or bill"]
    C -.-> E["*(Bills only)*
    [E] Pay it immediately"]
    D --> F["[F] One of your inboxes"]
    F --o G["[G] ⏯️
    Every month/quarter,
    process your inboxes"]
    G --> H
    H --> I["[I] A specific JD ID for
    the thing you have processed"]
    E --> H
    I --> J((("[J] Stop")))

    C@{ shape: doc}
    D@{ shape: proc}
    F@{ shape: db}
    G@{ shape: delay}
    I@{ shape: db}
        `,
        trigger:
          "Whenever you generate or receive an invoice, receipt, or bill.",
        inputs:
          "1. The invoice, receipt, or bill.\n2. Your [[list of inboxes]].",
        process: "This is the process. We haven't documented this yet.",
        outputs: "This is the outputs. We haven't documented this yet.",
      },
    },
  },
  "11.10": {
    number: "11.10",
    parentNumber: "11",
    type: "id",
    title: "Official documents",
    emoji: "🗂️",
    isHeader: true,
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
        alsoSee: "A blank also see value.",
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
          "You have a registered business and the legal permission to provide a product or service. Now you must adhere to the regulatory environment that you are trading in. Again, this will depend entirely on what you do. There may be many different local, state, national, or international laws or requirements to be aware of. And who knows, if you run a fishing business, things like the ‘law of the sea’ may apply. Compliance might mean that: - Your business must obey certain laws, regulations, or codes of practice.\n- Your business must undergo one-off or ongoing inspections or audits.\n- You and your staff must do ongoing training.\n- The products you sell or manufacture must meet certain standards.\nEither way, store copies of regulations and proof that you’re complying with them here. This is an important ID to keep up-to-date in your JDex and to set reminders for to ensure you stay above board. ",
        exceptions: "",
        alsoSee:
          "Manage ongoing training or education in [[11.50]], but store a copy of the proof of completion here if it helps you meet compliance obligations. ",
        rationale: "",
        links: "",
      },
    },
  },
  "11.14": {
    number: "11.14",
    parentNumber: "11",
    type: "id",
    title: "Other legal matters",
    description:
      "A place for any other legal matters or ‘serious’ documents related to the business entity that a lawyer may have prepared, were issued by the government, or certified by a public official. ",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      smallBusiness: {
        examples:
          "Statutory declarations; affidavits; documents related to proof of ownership; non-disclosure or confidentiality agreements; change of company director paperwork; contracts that don’t fit elsewhere; court appearances. ",
        moreInfo:
          "It’s hard to predict what other core documents a business may have around the world. Or any legal matters that may need to be dealt with. But if it’s important and doesn’t fit elsewhere, put it here and note its location in your JDex. ",
        exceptions:
          "We’re still dealing with the business entity here, not employees, products, or suppliers. Any legal matters or ‘serious’ documents related to those things live with them. ",
        alsoSee: "",
        rationale: "",
        links: "",
      },
    },
  },
  "11.15": {
    number: "11.15",
    parentNumber: "11",
    type: "id",
    title: "Selling it or closing it",
    description:
      "Whether you sell the business, pass it on to a family member, or close it down, this is a place to work out the details. ",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      smallBusiness: {
        examples: "",
        moreInfo:
          "Businesses can end for many reasons, happy, sad, or indifferent. You might want to retire or just try something new. Or perhaps another business is interested in a merger or acquisition. Or there may be involuntary reasons like bankruptcy or a natural disaster. We haven’t seen Succession, the TV show, but we get the gist. This kind of planning would also be something to consider here. Hopefully your situation is less dramatic. And even if you’re a sole trader with a simple set up, there might be things for you to store here. For instance, you decide to return to regular employment and want to deregister or pause your business entity to avoid ongoing fees or tax obligations. ",
        exceptions: "",
        alsoSee:
          "Don’t forget to include this Johny.Decimal small business system in [[13.34]]. ",
        rationale: "",
        links: "",
      },
    },
  },
  "11.20": {
    number: "11.20",
    parentNumber: "11",
    type: "id",
    title: "Planning, contingencies, & insurance",
    isHeader: true,
    emoji: "🧭",
    description:
      "The documents you write to guide the business in the short and longer term, what to do when something bad happens, and insurance for the entity and its people. ",
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
  "11.21": {
    number: "11.21",
    parentNumber: "11",
    type: "id",
    title: "Business plan",
    description:
      "The indispensable guide to where you are, where you want to be, and what to do to get there. ",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      smallBusiness: {
        examples: "",
        moreInfo:
          "This may be less relevant if you’re, say, a freelance graphic designer working on a project-by-project basis. But for most other businesses, whether new or existing, this is something you shouldn’t skip. A business plan contains all the good stuff like your mission and vision statements, goals, risk analysis, and financial position. Do periodic reviews and remember to save the previous version of the document when updating it. And if you have innovative services or practices, you may wish to protect the plan with a confidentiality agreement. If you’ve never written one, government business websites often have handy templates to get you started. ",
        exceptions: "",
        alsoSee:
          "If you have a confidentiality agreement to protect your business plan, store it in [[11.14]]. When it’s time to update your business plan, don’t forget to review [[11.23]]. ",
        rationale: "",
        links: "Business plan resources and templates from the: ",
      },
    },
  },
  "11.22": {
    number: "11.22",
    parentNumber: "11",
    type: "id",
    title: "Business insurance, incidents, & claims",
    description:
      "Policies, coverage details, incident reports, and claim forms for your business entity and people. ",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      smallBusiness: {
        examples:
          "Public liability insurance; professional indemnity insurance; workers compensation insurance. ",
        moreInfo:
          "This is a place for any insurance that covers the business entity interacting with the world. And overall coverage for staff while they are at work. This is also where to store incident reports that might become part of a claim. For example, if a staff member is injured at work put the details and medical report here. ",
        exceptions:
          "Staff medical insurance as part of a salary package goes in [[XX.XX]]. Building (structural and/or contents) or land insurance goes in [[12.12]]. Vehicle insurance goes in [[12.42]]. Financial insurance goes in [[13.XX]]. IT insurance goes in [[14.XX]]. Product insurance goes in [[2X.XX]]. ",
        alsoSee: "",
        rationale:
          "We recommend that insurance details should live next to the thing that is being insured. This will help your brain find things, and ensure other relevant information is nearby if you’re dealing with a claim or policy renewal. Hence, business insurance goes up here and there’s room allocated for other insurances in the categories below. ",
        links: "",
      },
    },
  },
  "11.23": {
    number: "11.23",
    parentNumber: "11",
    type: "id",
    title: "Risk & emergency management plans",
    description:
      "Awareness of the risks that can affect your business and instructions for what to do if they occur. ",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      smallBusiness: {
        examples:
          "- If you sell croissants, your risk management plan might include what to do if the price of butter rises.\n- If your business is next to a river, your emergency management plan might include flood evacuation procedures.\n",
        moreInfo:
          "It’s important to identify events that can negatively impact your business. And then plan how to make decisions and operate during the event, and recover afterwards (often referred to as ‘business continuity and disaster recovery’). A business risk might be specific to your service or product. While emergencies might be location-specific natural disasters, human-caused events like crime, or technological events like a water main rupturing. Either way, your future self will thank you for having a process in place if disaster strikes. And don’t forget to securely store contact numbers for local emergency, police, fire, and ambulance services, as well as recovery contacts for things like insurance, banking, and suppliers. ",
        exceptions: "",
        alsoSee: "",
        rationale: "",
        links: "",
      },
    },
  },
  "11.24": {
    number: "11.24",
    parentNumber: "11",
    type: "id",
    title: "Collected wisdom & analysis",
    description:
      "A place to record and analyse what’s working, what needs improvement, and ideas for making it happen. ",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      smallBusiness: {
        examples:
          "What went well today/this week/this month/this year; ‘lessons learned’ to avoid repeat mistakes; miscellaneous anecdotes from staff meetings; and any other notes, dreams, or ideas related to the business. ",
        moreInfo: "",
        exceptions: "",
        alsoSee:
          "When it’s time to update [[11.21]], this ID should be a gold mine. ",
        rationale: "",
        links: "",
      },
    },
  },
  "11.30": {
    number: "11.30",
    parentNumber: "11",
    type: "id",
    title: "Behaviours, ethics, & culture",
    isHeader: true,
    emoji: "👍",
    description:
      "The things we do to be a good business to work in or deal with. ",
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
  "11.31": {
    number: "11.31",
    parentNumber: "11",
    type: "id",
    title: "Internal policies",
    description:
      "How the business will behave towards staff and expectations for staff behaviour. ",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      smallBusiness: {
        examples:
          "Company values; enterprise or other registered agreements between employers and employees; formal policies that staff will be assessed against during reviews; how you communicate news and updates; dress code and grooming expectations; buddy systems for new staff; culture-related policies on things like working from home, pets or kids in the workplace, or social activities. ",
        moreInfo:
          "What sort of workplace do you want to have? This is a place for figuring this out and writing it down. For instance, official policies for how staff can expect to be treated and should behave. General processes around internal communications or managing a team. Staff-retention strategies to help everyone feel comfortable, get along, and enjoy their work. If you’re a sole trader, maybe you decide on some internal policies with yourself (why not!). Such as what your working hours are, how often you will check email or other channels, taking regular days off to avoid burn out, or making time for business admin each week. Anything that maintains morale and keeps you motivated. ",
        exceptions: "",
        alsoSee:
          "Be sure to make any formal policies clear to staff before doing [[11.43]]. ",
        rationale: "",
        links: "",
      },
    },
  },
  "11.32": {
    number: "11.32",
    parentNumber: "11",
    type: "id",
    title: "External policies",
    description:
      "How the business will behave towards customers, suppliers, and the wider world. ",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      smallBusiness: {
        examples:
          "Customer service policy; refund policy; retail terms and conditions; privacy policy; disclaimers; timely payment process for suppliers; environmental and sustainability policy; equal opportunity employer statement; anti-slavery or land acknowledgement statements. ",
        moreInfo:
          "How do you want your business to be perceived by others? This is a place for figuring this out and writing it down. We’re not talking about operations as such, or nice things your business might do for the community. It’s for any official policies or statements, or personal stances on how the business will behave. For instance, on your website you might have administrative policies or social, ethical, or environmental statements. Or maybe you have a policy to use local suppliers and pay their invoices early because you want to support others like you. ",
        exceptions:
          "This is not related to front office operations, that’s at [[12.30]]. This is not related to being part of a community, that’s at [[12.50]]. ",
        alsoSee: "",
        rationale: "",
        links: "",
      },
    },
  },
  "11.33": {
    number: "11.33",
    parentNumber: "11",
    type: "id",
    title: "Dispute resolution",
    description: "Solving problems and complaints professionally and calmly. ",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      smallBusiness: {
        examples:
          "Procedures for managing customer complaints or negative feedback; guidelines for replying to social media comments and online reviews; strategies for disputes with suppliers. ",
        moreInfo:
          "How do you solve problems and deal with sticky situations? This is a place for anything to do with figuring this out. It’s hard to predict what can go wrong. But having some guidelines in place for how you approach disputes can help you stay calm and in control, represent the business well, and hopefully get a good outcome. ",
        exceptions: "",
        alsoSee: "",
        rationale: "",
        links: "",
      },
    },
  },
  "11.40": {
    number: "11.40",
    parentNumber: "11",
    type: "id",
    title: "Our people",
    isHeader: true,
    emoji: "🦸",
    description: "Getting, keeping, & farewelling staff. ",
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
  "11.41": {
    number: "11.41",
    parentNumber: "11",
    type: "id",
    title: "Hiring",
    description:
      "Anything to do with finding, choosing, & onboarding new staff. ",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      smallBusiness: {
        examples:
          "Recruitment agencies or online employment platforms you use’ role descriptions for job ads; CVs/resumes received; the interview process and questions; candidate shortlists; the onboarding process; information for new employees; a checklist that covers the entire hiring process. ",
        moreInfo: "",
        exceptions: "",
        alsoSee:
          "[[11.42] for creating a new staff record template when someone is hired. [[14.XX]] for assigning and setting up new devices and accounts. ",
        rationale: "",
        links: "",
      },
    },
  },
  "11.42": {
    number: "11.42",
    parentNumber: "11",
    type: "id",
    title: "Staff record keeping",
    description:
      "The official staff records that a business must keep for a certain period of time, neatly templated. ",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      smallBusiness: {
        examples: "",
        moreInfo:
          "In Australia, staff records must be kept for up to 7 years. Your government may have different requirements. We suggest storing the records in this ID as per the image below. Each employee has a subfolder labelled with the year-month-day they joined (so it sorts neatly) and their name. Inside that is a standard template. We have provided an example template in the folder system. Adjust this to your needs as required, just remember to be consistent.\n\n```\n2014-07-08 Slydell, Bob\n2017-08-21 Bolton, Michael\n2019-02-14 Lumbergh, Bill\n        10 Personal details\n20 Payments and deductions\n30 Work hours and overtime\n40 Leave taken and accrued\n50 Pension contributions\n60 Training completed\n70 Ending the employment\n``` \n\nOther records you might consider keeping include: CVs/resumes, job applications and pre-employment checks, employment contracts, performance reviews, trade or registration certificates, details of uniforms and equipment allocated, roles held and promotions. ",
        exceptions: "",
        alsoSee: "",
        rationale: "",
        links: "",
      },
    },
  },
  "11.43": {
    number: "11.43",
    parentNumber: "11",
    type: "id",
    title: "Formal reviews",
    description: "How’s everybody doing? ",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      smallBusiness: {
        examples:
          "Performance review templates; completed forms from staff; the follow-up process; resources and strategies for managing underperformance or misconduct; how you deliver warnings and disciplinary action. ",
        moreInfo:
          "Getting the best out of your people includes being open about your expectations for their performance, periodically reviewing it, and ensuring they have an opportunity to speak freely about how things are for them. Conducting formal reviews against pre-defined criteria is now commonplace. Most people expect to be reviewed during their employment and might think it was odd if they weren’t. Plus if a relationship sours, having evidence that the employee had opportunities to voice concerns and they were taken seriously can be an important protection for business owners. ",
        exceptions: "",
        alsoSee: "Ensure staff are clear on anything relevant at [[11.31]]. ",
        rationale: "",
        links: "",
      },
    },
  },
  "11.44": {
    number: "11.44",
    parentNumber: "11",
    type: "id",
    title: "Farewells",
    description:
      "Anything to do with ending employment and offboarding staff. ",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      smallBusiness: {
        examples:
          "The offboarding process and paperwork; checklists for handing things back; exit interview templates; handover documents and meetings; notice periods for resignations, redundancies, or dismissals. ",
        moreInfo:
          "When staff move on it’s important to have a process in place leading up to their last day – the opposite of onboarding. Clearly communicate your expectations of what they need to achieve before they go and what you will do in return. This includes handing the role over to another staff member in a timely manner if required. While this is a normal part of running a business, it can sometimes be sad or stressful. Review your local employment laws if you have to deal with a dismissal or redundancy. And remember to seek advice or support if you need help. ",
        exceptions:
          "Calculate final payouts over in [[13.XX]] and record the details in [[11.42]] to close the loop. If you want to organise a farewell social gathering or gift, that’s in [[15.XX]]. ",
        alsoSee: "[[14.XX]] for collecting devices and closing accounts. ",
        rationale: "",
        links: "",
      },
    },
  },
  "11.45": {
    number: "11.45",
    parentNumber: "11",
    type: "id",
    title: "Animals as staff",
    description: "For all (working) creatures, great and small. ",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      smallBusiness: {
        examples:
          "Dogs or horses that work in tourism or muster livestock; birds who help with biological pest control; dogs trained for a service such as companionship or search and rescue; truffle pigs or dogs. ",
        moreInfo:
          "We’re not experts so it’s hard to predict what subfolders you might need. It will depend on the animals you have, what they do, and where you live. Some basic things to consider include: - Health records, registrations, and other important documents.\n- Insurance and claims.\n- Nutrition and exercise.\n- Pest control and grooming.\n- Training and discipline.\n- Equipment and shelter.\n- First aid and contacts for general healthcare and medical emergencies.\nIf this is integral to your business and you need more room, feel free to use the spare IDs in this section. We’d love it if you chat to us first on the Discord so we can help you get the best result (which will help other people who need this). ",
        exceptions:
          "If you’re a farmer and sell livestock or other animal products such as wool, milk, eggs, or genetic material for breeding, then how you manage all of that should be in [[20-29]] or another area that you create yourself (or we can help!). ",
        alsoSee: "",
        rationale:
          "This ID was included to accommodate animals in exactly the same way as humans – in the delivery of a business’ product or service. But we appreciate that there’ll be some grey areas here depending on what you do. And we don’t want things to get confusing. For instance, if you run a sheep property or dairy farm and sell the wool/milk, it would probably be impractical to classify these animals as staff. But if you run, say, a Hansom cab or sled dog tourism business, you might classify the horses and dogs as staff and manage them here. The thing you’re selling is the experience of riding around New York’s Central Park or a snowscape in northern Canada, which is managed elsewhere. As always, do what works for you. If you need this ID, you know who you are. If you don’t, it’s highly unlikely you ever will, so just ignore it. ",
        links: "",
      },
    },
  },
  "11.50": {
    number: "11.50",
    parentNumber: "11",
    type: "id",
    title: "Training & professional development",
    isHeader: true,
    emoji: "🎓",
    description:
      "Anything to do with maintaining or updating skills and credentials, or other self-improvement. ",
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
  "11.51": {
    number: "11.51",
    parentNumber: "11",
    type: "id",
    title: "Mandatory training",
    description:
      "The basic, compulsory training that must be done, including general training common to many workplaces or that is specific to yours. ",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      smallBusiness: {
        examples:
          "Fire drills and general safety training; job-specific software or equipment training; keeping a first aid qualification up-to-date; getting a safe food handling certificate; how to run the reception desk of a dental surgery; on-the-job training during an apprenticeship; how to open and close a cafe or set up a food truck; any other mandatory role-based training, certifications, or competencies. ",
        moreInfo:
          "This kind of training has an ‘end’. There’s a list of things to tick off and achieve. And what’s mandatory for some staff may not be for others. Everyone might need to show they can lift a box safely, but only the IT person has to have a particular Microsoft certification. Some mandatory training will need to be maintained or renewed. For example, demonstrating first aid skills periodically to keep a qualification. ",
        exceptions: "",
        alsoSee:
          "If the training is core to the business operating legally, add the proof of completion to [[11.12]]. If the training helps meet compliance obligations, add the proof of completion to [[11.13]]. Consider adding these details to official employee records at [[11.42]]. If you have preferred in-person or online training suppliers, store their details at [[12.0X)]]. If the training is based on any ops manuals in [[12.20]] or [[12.30]], ensure any changes are reflected here. ",
        rationale:
          "We’ve called this ‘mandatory’ as it’s the kind of training you tend to be given as a new employee. Or it might be required due to workplace compliance laws. Or it’s related to how you or staff are expected to do their job. Either way, it must be done. ",
        links: "",
      },
    },
  },
  "11.52": {
    number: "11.52",
    parentNumber: "11",
    type: "id",
    title: "Optional training",
    description:
      "Extra training to gain or maintain a credential that is nice to have, but not mandatory. ",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      smallBusiness: {
        examples:
          "Doing an Excel or Xero course to improve your skills; attending an advanced hairdressing or bar tending course to learn new techniques; completing an MBA or specialist dental qualification; gaining the project management professional (PMP) certification. ",
        moreInfo: "",
        exceptions: "",
        alsoSee:
          "Consider adding these details to official employee records at [[11.42]]. If you have preferred in-person or online training suppliers, store their details at [[12.0X)]]. If the training is based on any ops manuals in [[12.20]] or [[12.30]], ensure any changes are reflected here. ",
        rationale:
          "We’ve called this ‘optional’ as it’s the kind of training or credential you might add on to basic requirements. It’s nice to have, it might make you better at your job, but it’s not required by the business or the law. If you have multiple staff, everyone might do different things depending on their role and skill set. And it may be a formal qualification that is recognised anywhere, as opposed to training that is specific to your business. ",
        links: "",
      },
    },
  },
  "11.53": {
    number: "11.53",
    parentNumber: "11",
    type: "id",
    title: "Other learning & self-improvement",
    description:
      "A place to record any other general learning that doesn’t fit elsewhere. ",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      smallBusiness: {
        examples:
          "Materials you collect at industry conferences; notes in your JDex from YouTube software tutorials; a list of business-related books you plan to read; presentations from webinars or Meetups you attended; paid media subscriptions like specialty podcasts, blogs, newsletters, journals, periodicals, and magazines. ",
        moreInfo:
          "A place for anything you might classify as learning or self-improvement that doesn’t fit elsewhere. It’s not related to your business operating legally and/or doesn’t lead to a formal credential. You don’t have to do it, it’s extracurricular. But it might help you be a better business owner or staff member. For instance, informal courses, conferences or workshops, coaching programs, webinars, talks, or general reading and media consumption that keeps you informed. As an aside, we know some businesses that include budgets for this kind of thing in salary packages. Staff can then spend this on whatever learning they choose. Nice. ",
        exceptions: "",
        alsoSee: "",
        rationale: "",
        links: "",
      },
    },
  },
  "11.60": {
    number: "11.60",
    parentNumber: "11",
    type: "id",
    title: "Other people & organisations",
    isHeader: true,
    emoji: "🤝",
    description:
      "External people and organisations that you interact with in a business capacity who are not suppliers or customers. ",
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
  "11.61": {
    number: "11.61",
    parentNumber: "11",
    type: "id",
    title: "Professional bodies",
    description:
      "Any kind of industry association, professional body, union, society, or similar group that you deal with. ",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      smallBusiness: {
        examples:
          "Certified Practising Accountants Australia; Australian Computer Society; Australasian Medical Writers’ Association; Media Entertainment & Arts Alliance; Australian Physiotherapy Association; Personal Trainers Association of Australia. ",
        moreInfo:
          "A place for any documents or notes related to your interactions with professional organisations. This might include membership records, literature they send you, meeting or event reminders, contact details, and website or social links. ",
        exceptions: "",
        alsoSee: "",
        rationale: "",
        links: "",
      },
    },
  },
  "11.62": {
    number: "11.62",
    parentNumber: "11",
    type: "id",
    title: "Seeking advice & support",
    description:
      "Where to go for help with running the business or your wellbeing as a business owner. ",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      smallBusiness: {
        examples:
          "Government small business or finance websites; helplines; mentors; peers/other business owners; professional bodies; unions; ombudsman and watchdogs; mental health organisations. ",
        moreInfo:
          "This might include the contact details of anyone you know personally, or a list of websites that you have used previously or have been recommended. Or perhaps a library of useful downloads that you’ve saved on different topics. ",
        exceptions: "",
        alsoSee: "",
        rationale: "",
        links:
          "Advice and wellbeing resources designed for small business: - \n- [Ahead for Business](https://aheadforbusiness.org.au/]\n",
      },
    },
  },
  "11.63": {
    number: "11.63",
    parentNumber: "11",
    type: "id",
    title: "Networking & new business",
    description:
      "Anyone you meet that you might develop a business relationship with one day. ",
    metadata: {
      createdDate: "2024-11-19",
      updatedDate: "2024-11-19",
    },
    extensions: {
      smallBusiness: {
        examples: "",
        moreInfo:
          "Whether you meet in person or online, jot down anything important and save it here. For instance, their name, contact details, what they do, what you discussed, and their social, LinkedIn, or website links. If they gave you their business card, you could take a photo of it and add it to your JDex note or file system. Consider linking these people to an ID. For example, if they’re a potential front office supplier, add a link in your JDex to [[12.0X]]. If they’re a graphic designer, add a link to [[XX.XX]]. ",
        exceptions: "",
        alsoSee: "",
        rationale: "",
        links: "",
      },
    },
  },
  "11.70": {
    number: "11.70",
    parentNumber: "11",
    type: "id",
    title: "Library",
    isHeader: true,
    emoji: "Books📚",
    description: "",
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
  "11.71": {
    number: "11.71",
    parentNumber: "11",
    type: "id",
    title: "My business & people library",
    description: "xxx ",
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
    title: "Company administration",
    description: "The twenties",
    metadata: { createdDate: "2024-11-18", updatedDate: "2024-11-18" },
  },
};

export default flattenedData;

// Utility function to get all entries by type
function getAllByType(data: FlattenedData, type: EntryType): FlattenedEntry[] {
  return Object.values(data).filter((entry) => entry.type === type);
}

// Utility function to get all children of a given parent ID
export function getChildren(
  data: FlattenedData,
  parentNumber: string
): FlattenedEntry[] {
  return Object.values(data).filter(
    (entry): entry is CategoryEntry | IdEntry =>
      "parentNumber" in entry && entry.parentNumber === parentNumber
  );
}

// Utility function to find an entry by key
export function findById(
  data: FlattenedData,
  number: string
): FlattenedEntry | undefined {
  return data[number];
}

// Utility function to validate the entire data structure
export function validateStructure(data: FlattenedData): string[] {
  const errors: string[] = [];
  for (const key in data) {
    const entry = data[key];
    if (entry.parentNumber && !data[entry.parentNumber]) {
      errors.push(
        `Entry with key ${key} has a non-existent parent ID ${entry.parentNumber}.`
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
