import { JohnnyDecimalSystem } from "./common/jd_schema";

const lifeAdmin: JohnnyDecimalSystem = {
  systemId: "Z01", // JD:QS:LA reserved
  systemTitle: "Life Admin",
  schemaVersion: "1.0.0",
  areas: {
    "10-19": {
      id: "10-19",
      title: "Life admin",
      metadata: {
        createdDate: "2024-01-10T00:00:00",
        updatedDate: "2024-01-10T00:00:00",
        version: "",
      },
      categories: {
        "10": {
          id: "10",
          title: "Life admin area management",
          metadata: {
            createdDate: "2024-01-10T00:00:00",
            updatedDate: "2024-01-10T00:00:00",
          },
          ids: {
            "10.00": {
              id: "10.00",
              title: "Life admin area management",
              metadata: {
                description:
                  "The standard 'life admin' area. See https://jdcm.al/14.11.",
                createdDate: "2024-01-10T00:00:00",
                updatedDate: "2024-01-10T00:00:00",
              },
            },
          },
        },
        "11": {
          id: "11",
          title: "Me & other living things",
          metadata: {
            emoji: "\uD83D\uDE4B", // person raising hand
            createdDate: "2024-01-10T00:00:00",
            updatedDate: "2024-01-10T00:00:00",
            version: "",
          },
          ids: {
            "11.00": {
              id: "11.00",
              title: "Me & other living things category management",
              metadata: {
                description:
                  "> This **category** is all about you, and other things that have a beating heart: your family, friends, and pets.\n> \n> > If you have a lot going on in this category you might need to expand your system (see the [website](https://jdcm.al), [workbook](https://jdcm.al/14.02), or [workshop](https://jdcm.al/14.03)).\n> > *e.g. your health situation is complicated, managing your children’s care, schooling, and activities takes a lot of effort.*\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in the manual for more information.",
                emoji: "\u2699\uFE0F", // gear
                isHeader: true,
                createdDate: "2024-01-10T00:00:00",
                updatedDate: "2024-01-10T00:00:00",
              },
            },
            "11.01": {
              id: "11.01",
              title: "Inbox",
              metadata: {
                description:
                  "> This is the inbox for category **11 🙋 Me & other living things**. See **00.00 ■ System management** in the manual for more information.\n> \n> Pro tip: when you start to organise your system, move all of your stuff in to the relevant category inbox as a first step. This is a really simple way to go from total chaos to pretty good. Then tackle each category inbox in turn, moving each item to its proper home in an ID.",
                emoji: "\uD83D\uDCE5", // in-tray
                createdDate: "2024-01-10T00:00:00",
                updatedDate: "2024-01-10T00:00:00",
              },
            },
            "11.02": {
              id: "11.02",
              title: "System manual",
              metadata: {
                description:
                  "> We’ve saved the manual in your system for you. Find it here.\n> \n> This is version 1.0.4 of the Quick Start: Life admin pack.",
                emoji: "\uD83D\uDCD9", // orange book
                createdDate: "2024-01-10T00:00:00",
                updatedDate: "2024-01-10T00:00:00",
              },
            },
            "11.09": {
              id: "11.09",
              title: "Archive",
              metadata: {
                description:
                  "> This is the archive for category **11 🙋 Me & other living things**. See **00.00 ■ System management** in the manual for more information.",
                emoji: "\uD83D\uDCE6", // package
                createdDate: "2024-01-10T00:00:00",
                updatedDate: "2024-01-10T00:00:00",
              },
            },
            "11.10": {
              id: "11.10",
              title: "Personal records",
              metadata: {
                description:
                  "> The boring documentation that you need in order to be a human being.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83D\uDDC2\uFE0F", // card index dividers
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.11": {
              id: "11.11",
              title: "Birth certificate & proof of name",
              metadata: {
                description:
                  "> Proof of your birth and name (or change of name) – where it all begins!",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.12": {
              id: "11.12",
              title: "Passports, residency, & citizenship",
              metadata: {
                description:
                  "> Proof of where you were born and/or live.\n> - For trip-specific travel documents and visas, see [[15.50 ■ Longer trips 🛫]].",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.13": {
              id: "11.13",
              title: "Identity cards",
              metadata: {
                description:
                  "> Documents issued by someone else as proof of your association with them.\n> *e.g. your employer or college, the government.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.14": {
              id: "11.14",
              title: "Licenses",
              metadata: {
                description:
                  "> Documents that you apply for so you can legally do an activity.\n> *e.g. driving, fishing, operating a forklift.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.15": {
              id: "11.15",
              title: "Voter registration & elections",
              metadata: {
                description:
                  "> Anything related to being on the electoral roll and voting in local, state, or national/federal elections.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.16": {
              id: "11.16",
              title: "Legal documents & certificates",
              metadata: {
                description:
                  "> ‘Serious’ documents that a lawyer has prepared, or were issued by the government, or witnessed by a public official.\n> *e.g. marriage certificate, will, power of attorney, statutory declaration, affidavit.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.17": {
              id: "11.17",
              title: "Academic records & qualifications",
              metadata: {
                description: "> Proof of your achievements, go you!",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.20": {
              id: "11.20",
              title: "Physical health & wellbeing",
              metadata: {
                description:
                  "> Anything to do with looking after your body.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83E\uDEC0", // anatomical heart
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.21": {
              id: "11.21",
              title: "Health insurance & claims",
              metadata: {
                description:
                  "> A place to put your policy, coverage details, receipts, and claim forms.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.22": {
              id: "11.22",
              title: "Health records & registrations",
              metadata: {
                description:
                  "> Any ‘offical’ paperwork about your health status.\n> *e.g. immunisation records, blood or organ donation registrations, a doctor’s letter confirming a health condition or prescription needed for travel.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.23": {
              id: "11.23",
              title: "Primary care",
              metadata: {
                description:
                  "> Everything related to seeing a ‘day-to-day’ medical provider or clinic, such as general practitioners, nurses, and pharmacists.\n> *e.g. prescriptions, referral letters, test results, scans, information leaflets, appointments and reminders.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.24": {
              id: "11.24",
              title: "Eyes, ears, & teeth",
              metadata: {
                description:
                  "> Similar to [[11.23 Primary care]], but focused on parts of your head!\n> *e.g. eye checks, glasses prescriptions, LASIK, dental checks and quotes, care instructions for braces or mouthguards, hearing tests and audiology.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.25": {
              id: "11.25",
              title: "Immunity",
              metadata: {
                description:
                  "> Anything to do with booking and paying for vaccinations.\n> - Don’t forget any travel vaccines. However, we’ve recommended storing your international certificate of vaccination (a.k.a. the ‘yellow card’) in [[15.21 Important documents & lists]] because it’s an ‘important travel document’.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.26": {
              id: "11.26",
              title: "Physical therapy",
              metadata: {
                description:
                  "> Similar to [[11.23 Primary care]], but focused on recovering from an injury or strain.\n> *e.g. diagrams of the prescribed exercises that you’re supposed to do.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.27": {
              id: "11.27",
              title: "Fitness, nutrition, sleep, & other pro-active wellbeing",
              metadata: {
                description:
                  "> All the things we do (or know we should do) to help stay fit and well.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.28": {
              id: "11.28",
              title: "Reproductive health",
              metadata: {
                description:
                  "> Anything related to trying to get pregnant, being pregnant, trying to not get pregnant, getting ‘the snip’, or menopause.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.29": {
              id: "11.29",
              title: "Surgical & specialist care",
              metadata: {
                description:
                  "> Anything related to seeing a specialist medical provider.\n> *e.g. operations, cosmetic procedures, other specialist investigations and tests.*\n> - It’s hard to predict what the average person might need here, so we’ve just allocated one folder. But if your situation is complicated, you might need more room.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.30": {
              id: "11.30",
              title: "Mental health & wellbeing",
              metadata: {
                description:
                  "> Anything to do with looking after your mind.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83E\uDDE0", // brain
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.31": {
              id: "11.31",
              title: "Psychologist, psychiatrist, & counselling",
              metadata: {
                description:
                  "> Similar to [[11.23 Primary care]], but focused on seeing a mental health provider for talking therapy or medical treatment. This might also include online courses and tools.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.32": {
              id: "11.32",
              title: "My thoughts, journalling, diaries, & other writing",
              metadata: {
                description: "> A place to neatly store all the great words.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.33": {
              id: "11.33",
              title: "Spiritual",
              metadata: {
                description:
                  "> Anything to do with what ‘spiritual’ means to you. Feel free to rename this if you’d prefer something a little more scientific.\n> *e.g. meditation goals and routines.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.34": {
              id: "11.34",
              title: "Habits, routines, & planning",
              metadata: {
                description:
                  "> Things that you do to stay organised and deal with everyday life.\n> *e.g. day planning, check lists, meal prepping, cleaning routines.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.35": {
              id: "11.35",
              title: "Brain training",
              metadata: {
                description:
                  "> Any tools and games that help keep your mind sharp.\n> *e.g. Sudoku, crosswords, a spreadsheet of your amazing Wordle scores.* ;)",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.40": {
              id: "11.40",
              title: "Family",
              metadata: {
                description:
                  "> Anything to do with having (or finding!) loved ones.\n> - If you like to store birthday reminders and gift ideas, we recommend storing them with the individual person in [[11.41 My partner]], [[11.42 My kids]], or [[11.43 My family]]. Rather than in [[11.45 Celebrations & gifting]], which is for larger-scale one-off events. But see what feels right for you.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83D\uDC91", // couple with heart
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.41": {
              id: "11.41",
              title: "My partner",
              metadata: {
                description:
                  "> Anything related to having a partner – maybe a list of all the things you like about them?",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.42": {
              id: "11.42",
              title: "My kids",
              metadata: {
                description:
                  "> Anything related to looking after kids.\n> - This is another one that’s hard to predict. You can fit heaps of information in neatly-sorted subfolders. But if you’re in charge of The Brady Bunch and/or they do a lot of stuff, you might need more room.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.43": {
              id: "11.43",
              title: "My family",
              metadata: {
                description: "> For parents, siblings, and all the others.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.44": {
              id: "11.44",
              title: "Dating & relationships",
              metadata: {
                description: "> Good luck out there!",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.45": {
              id: "11.45",
              title: "Celebrations & gifting",
              metadata: {
                description:
                  "> Planning or attending one-off celebrations for family *and* friends that might also require a gift.\n> *e.g. seasonal holidays, anniversaries, milestone birthdays, life celebrations, reunions, christenings, engagements, weddings, graduations.*\n> - As per the note at [[11.51 My friends]], we made a decision to include friends here. Why? Because there’s so much overlap. We all attend celebrations for both sets of people. [[11.45 Celebrations & gifting]] is closer to the top, so it wins. If you disagree, do what works for you.\n> - This ID should be neatly organised with year-month subfolders and look something like this:\n```\n2015-01-31 Nan & Pop’s 50th wedding anniversary\n2016-04-01 Mick & Mel’s engagement & wedding\n2017-07-07 Mum’s 60th birthday\n2018-11-22 I’m in charge of Thanksgiving this year, eep\n```",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.46": {
              id: "11.46",
              title: "Letters, cards, & mementos",
              metadata: {
                description:
                  "> A place for keepsakes. If they’re digital, date and name them consistently so they sort and are easy to find. If you have a physical ‘memory box’, note its location here.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.50": {
              id: "11.50",
              title: "Friends, clubs, & organisations",
              metadata: {
                description:
                  "> Anything to do with people who aren’t your family, or being an active member of society.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83C\uDFD1", // hockey stick and ball
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.51": {
              id: "11.51",
              title: "My friends",
              metadata: {
                description:
                  "> A place for non-event-related things related to your friends.\n> *e.g. a list of books people have borrowed from you, birthday reminders.* \n> - What this is **not** for:\n> - Planning or attending life events like engagements, weddings, or birthdays. Put those up in [[11.45 Celebrations & gifting]]. Why? Because there’s so much overlap. We all attend similar celebrations for both friends and family. 11.45 is closer to the top, so it wins. If you disagree, do what works for you.\n> - Ticketed events that you attend with friends, they go in [[15.30 ■ Events 🍿]].\n> - Housemates and neighbours, they go in [[12.51 Housemates]] and [[12.52 Neighbours]]. While these people may become friends, they’re often linked to where you live at a given time. At least initially.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.52": {
              id: "11.52",
              title: "Groups, clubs, & volunteering",
              metadata: {
                description:
                  "> Any sort of group activity or volunteer work that you don’t consider a hobby.\n> *e.g. book club, social tennis, mothers’ group, community service.*\n> - If you manage a group or have major hobbies, you might need more room.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.53": {
              id: "11.53",
              title: "Official correspondence",
              metadata: {
                description:
                  "> If you’re a letter writer, store them here for posterity or re-use.\n> *e.g. letters to the editor, government lobbying, causes and petitions, product complaints.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.60": {
              id: "11.60",
              title: "Pets & other animals",
              metadata: {
                description:
                  "> For all creatures, great and small.\n> - This is another structure that’s hard to predict, depending on the animals you look after and where you live. But other things you might need space for include: nutrition, grooming, training and discipline, exercise, shelter, contacts for medical emergencies, first aid, pest prevention, pet sitters, routines and reminders.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83D\uDC14", // rooster
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.61": {
              id: "11.61",
              title: "Pet health insurance & claims",
              metadata: {
                description:
                  "> A place to put your policy, coverage details, receipts, and claim forms.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.62": {
              id: "11.62",
              title: "Pet health records & registrations",
              metadata: {
                description:
                  "> A place to put important documents.\n> *e.g. micro-chip registrations, breeding and pedigree information, veterinary appointments, advice and prescriptions.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.70": {
              id: "11.70",
              title: "My brilliant career",
              metadata: {
                description:
                  "> Anything to do with earning a living.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83E\uDDD1\u200D\uD83C\uDF73", // cook
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.71": {
              id: "11.71",
              title: "My sales pitch",
              metadata: {
                description:
                  "> The documents you use to sell yourself as a potential employee.\n> *e.g. CV/resume, references, portfolio, LinkedIn profile text.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.72": {
              id: "11.72",
              title: "My jobs past, present, & future",
              metadata: {
                description:
                  "> A record of the jobs you’ve had, have, or want, neatly sorted by year-month.\n> *e.g. contracts, salary package details, job searches, applications, cover letters.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.73": {
              id: "11.73",
              title: "My side-hustles",
              metadata: {
                description:
                  "> Those small projects you’re doing for a bit of extra cash or to try and escape the 9 to 5.\n> - If these grow, you might need to expand your system.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.80": {
              id: "11.80",
              title: "Personal development & who I am",
              metadata: {
                description:
                  "> Me, but even better.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83D\uDCDA", // books
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.81": {
              id: "11.81",
              title: "Goals & dreams",
              metadata: {
                description:
                  "> A place for all those lists of ideas and things you want to do in your personal or work life.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.82": {
              id: "11.82",
              title: "Hobbies & learning",
              metadata: {
                description:
                  "> Small hobbies or courses that you do in real life or online.\n> *e.g. coding, sewing, cookery, languages, first aid, music, creative writing.*\n> - If any of these things become a major part of your life, you’ll need to give them more room.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "11.83": {
              id: "11.83",
              title: "My library",
              metadata: {
                description:
                  "> A place to collect all the things you’ve made, found, like, or want to explore.\n> - e.g. mini projects, books to read, podcasts to listen to, documentaries to watch, artists you like, inspirational stories, interesting images, funny memes - whatever you want, you’re the librarian.",
                createdDate: "",
                updatedDate: "",
              },
            },
          },
        },
        "12": {
          id: "12",
          title: "Where I life & how I get around",
          metadata: {
            createdDate: "2024-01-10T00:00:00",
            updatedDate: "2024-01-10T00:00:00",
          },
          ids: {
            "12.00": {
              id: "12.00",
              title: "Where I live & how I get around category management",
              metadata: {
                description:
                  "> This **category** is all about your home and neighbourhood, and how you get from A to B.\n> \n> > If you have a lot going on in this category you might need to expand your system (see the [website](https://jdcm.al), [workbook](https://jdcm.al/14.02), or [workshop](https://jdcm.al/14.03)).\n> > *e.g. you own rental properties, you collect and do up old cars, you’re a farmer and maintain machinery and multiple vehicles.*\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\u2699\uFE0F", // gear
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.01": {
              id: "12.01",
              title: "Inbox",
              metadata: {
                description:
                  "> This is the inbox for category **12 🏡 Where I live & how I get around**. See **00.00 ■ System management** in [[11.02 System manual 📙|the manual]] for more information.\n> \n> Pro tip: when you start to organise your system, move all of your stuff in to the relevant category inbox as a first step. This is a really simple way to go from total chaos to pretty good. Then tackle each category inbox in turn, moving each item to its proper home in an ID.",
                emoji: "\uD83D\uDCE5", // in-tray
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.09": {
              id: "12.09",
              title: "Archive",
              metadata: {
                description:
                  "> This is the archive for category **12 🏡 Where I live & how I get around**. See **00.00 ■ System management** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83D\uDCE6", // package
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.10": {
              id: "12.10",
              title: "Home records",
              metadata: {
                description:
                  "> All the paperwork and instructions related to having a roof over your head.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83D\uDCC4", // page facing up
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.11": {
              id: "12.11",
              title: "Official documents",
              metadata: {
                description:
                  "> The important documents associated with being the current or past resident of an address, neatly sorted by year-month.\n> *e.g. rental leases and renewals, security deposits, inspection reports, rental ledgers, purchasing contracts, property deeds, formal disputes.*\n> - This can also include the future, so store your rental applications or property searches here too.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.12": {
              id: "12.12",
              title: "Home insurance & claims",
              metadata: {
                description:
                  "> A place to put your policy, coverage details, receipts, and claim forms.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.13": {
              id: "12.13",
              title: "Moving",
              metadata: {
                description:
                  "> Anything related to one of the most stressful times of life – at least this folder is under control!\n> *e.g. removalist quotes and contracts, checklists, a list of accounts to update with your new postal address.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.14": {
              id: "12.14",
              title: "Inventory",
              metadata: {
                description:
                  "> A document or spreadsheet that lists all of your stuff, logically grouped by room/theme. Sounds boring but you will love your past self next time you ask for a removalist quote, apply for home insurance, or make a claim.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.15": {
              id: "12.15",
              title: "My home's user manual",
              metadata: {
                description:
                  "> Homes can be complicated beasts – the longer you live in them, the more you learn. Put it all here so you don’t forget (or gift it to the next person who lives there!).\n> *e.g. structural plans, fuse box layout, meter locations, buried pipes/wires to avoid when digging, how to turn the water meter off, any weird quirks.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.16": {
              id: "12.16",
              title: "Appliances, tools, & gadgets",
              metadata: {
                description:
                  "> Anything to do with buying, operating, or repairing an appliance, tool or gadget.\n> *e.g. product research for a new lawnmower, telescope manual, camera warranty, oven repair quote.*\n> - We made a decision to store all receipts in [[13.41 Purchase receipts]] for simplicity, now there’s only one place to search.\n> - And for computer-related gadgets, see [[14.10 ■ Computers & other devices 🖥️]].",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.17": {
              id: "12.17",
              title: "Rates, taxes, & fees",
              metadata: {
                description:
                  "> A place for all those fun bills and levies associated with owning or selling a property.\n> *e.g. local council rates, government land tax, capital gains tax, stamp duty, body corporate fees.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.20": {
              id: "12.20",
              title: "Home services & health",
              metadata: {
                description:
                  "> Anything to do with looking after your home and connected utilities.\n> - This is a great place to practise your new consistent file-naming skills. Don’t save files with the gibberish names from the utility company. Using the year-month method, you can store hundreds of neatly-sorted, easy-to-find documents in these folders.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83D\uDEE0\uFE0F", // hammer and spanner
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.21": {
              id: "12.21",
              title: "Electricity, gas, & water",
              metadata: {
                description:
                  "> All the account paperwork and bills, neatly sorted by year-month.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.22": {
              id: "12.22",
              title: "Internet, phone, TV, & cable",
              metadata: {
                description:
                  "> All the account paperwork and bills, neatly sorted by year-month.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.23": {
              id: "12.23",
              title: "All other utilities & services",
              metadata: {
                description:
                  "> Who knows what else you’ve got – maybe you rent solar panels or pay for services specific to your town or city.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.24": {
              id: "12.24",
              title: "Repairs, maintenance, & upkeep",
              metadata: {
                description:
                  "> Anything related to fixing or taking care of your home.\n> *e.g. quotes from tradespeople, research on how to repair things, recurring tasks to remember like clearing the gutters.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.25": {
              id: "12.25",
              title: "Renovation & improvements",
              metadata: {
                description:
                  "> Anything related to a larger home project that isn’t general upkeep.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.30": {
              id: "12.30",
              title: "Getting around",
              metadata: {
                description:
                  "> When you leave your home, how do you do it?\n> - See [[11.14 Licenses]] for licenses.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83D\uDEB2", // bicycle
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.31": {
              id: "12.31",
              title: "Motor vehicle purchase, leasing, & rental",
              metadata: {
                description:
                  "> Similar to 12.11, all the important documents associated with owning, leasing, or renting a vehicle, neatly sorted by year-month and vehicle name.\n> *e.g. financing, government registrations and taxes, proof of ownership, leases, car-share applications, rent-a-ute from the hardware store, rent-a-loaner while your car is being repaired.*\n> - This isn’t limited to cars and motorbikes - maybe you tow a trailer, or have a boat, jet ski, caravan, or experimental jet pack. This can also include the future, so if your car conks out, store your new vehicle searches here too.\n> - This does **not** include renting a car as part of a trip. Store that with the trip down in **15 Travel, events, & entertainment**.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.32": {
              id: "12.32",
              title: "Motor vehicle insurance & claims",
              metadata: {
                description:
                  "> A place to put your policy, coverage details, receipts, and claim forms.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.33": {
              id: "12.33",
              title: "Mechanics, repairs, & maintenance",
              metadata: {
                description:
                  "> Anything related to fixing or taking care of your vehicle.\n> *e.g. quotes from mechanics, roadworthiness inspection reports, research on how to repair things, recurring tasks to remember like oil top-ups, tyre rotation, booking a service.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.34": {
              id: "12.34",
              title: "Permits & tolls",
              metadata: {
                description:
                  "> Anything that says you have permission to go through, or stay in, a certain area.\n> *e.g. residential or disability parking permits, e-tags and passes for toll roads, national park entry permits, exemption for congestion charge zones.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.35": {
              id: "12.35",
              title: "Bicycles & scooters",
              metadata: {
                description:
                  "> Anything related to buying and taking care of things you pedal, stand, or sit on.\n> - This can include any transport not considered a traditional motor vehicle, like skateboards, Segways, monowheels, mobility scooters.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.36": {
              id: "12.36",
              title: "Public transport",
              metadata: {
                description:
                  "> Anything related to catching public buses and trains.\n> *e.g. travel pass details, concession applications, network maps and timetables.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.40": {
              id: "12.40",
              title: "My kitchen & garden",
              metadata: {
                description:
                  "> All about the things you grow and eat.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83E\uDEB4", // pot plant
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.41": {
              id: "12.41",
              title: "Indoor plants",
              metadata: {
                description:
                  "> Anything related to buying and looking after your indoor plant friends.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.42": {
              id: "12.42",
              title: "Outdoor plants",
              metadata: {
                description:
                  "> Anything related to buying and looking after your outdoor plant friends.\n> - This can include plants in pots or in the ground (trees, lawn, garden beds).",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.43": {
              id: "12.43",
              title: "Growing herbs, vegetables, & fruit",
              metadata: {
                description:
                  "> Anything related to growing things you can eat.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.44": {
              id: "12.44",
              title: "Meals & recipes",
              metadata: {
                description:
                  "> A place for all the delicious things you make or want to make – especially Grandma’s marmalade.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.50": {
              id: "12.50",
              title: "Housemates, neighbours, & the neighbourhood",
              metadata: {
                description:
                  "> The people where you live, and happenings in the surrounding area.\n> - As per the note at [[11.51 My friends]], we made a decision to put housemates and neighbours here. But if you consider these people your friends, feel free to store things related to them there.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\u2615\uFE0F", // hot beverage
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.51": {
              id: "12.51",
              title: "Housemates",
              metadata: {
                description:
                  "> Anything related to the people you (temporarily) share a home with.\n> *e.g. their birthday, contact details for their family or employer in case of emergency, list of who owns what, IOUs.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.52": {
              id: "12.52",
              title: "Neighbours",
              metadata: {
                description:
                  "> Anything related to the people who live in your neighbourhood.\n> *e.g. contact details in case of emergency, quotes for rebuilding a shared fence, list of tools people have borrowed, planning the annual street party.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "12.53": {
              id: "12.53",
              title: "The neighbourhood",
              metadata: {
                description:
                  "> All the doings and happenings in your local area.\n> *e.g. fetes, festivals, markets, local walks, cafes to go to, local issues, native plant and animal guides, garage sales.*",
                createdDate: "",
                updatedDate: "",
              },
            },
          },
        },
        "13": {
          id: "13",
          title: "Money earned, saved, owed, & spent",
          metadata: {
            createdDate: "2024-01-10T00:00:00",
            updatedDate: "2024-01-10T00:00:00",
          },
          ids: {
            "13.00": {
              id: "13.00",
              title: "Money earned, saved, owed, & spent category management",
              metadata: {
                description:
                  "> This **category** is all about keeping track of your finances.\n> \n> > If you have a lot going on in this category you might need to expand your system (see the [website](https://jdcm.al), [workbook](https://jdcm.al/14.02), or [workshop](https://jdcm.al/14.03)).\n> > *e.g. you have a lot of investments, you’re a day trader.*\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\u2699\uFE0F", // gear
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.01": {
              id: "13.01",
              title: "Inbox",
              metadata: {
                description:
                  "> This is the inbox for category **13 💰 Money earned, saved, owed, & spent**. See **00.00 ■ System management** in [[11.02 System manual 📙|the manual]] for more information.\n> \n> Pro tip: when you start to organise your system, move all of your stuff in to the relevant category inbox as a first step. This is a really simple way to go from total chaos to pretty good. Then tackle each category inbox in turn, moving each item to its proper home in an ID.",
                emoji: "\uD83D\uDCE5", // in-tray
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.09": {
              id: "13.09",
              title: "Archive",
              metadata: {
                description:
                  "> This is the archive for category **13 💰 Money earned, saved, owed, & spent**. See **00.00 ■ System management** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83D\uDCE6", // package
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.10": {
              id: "13.10",
              title: "Earned",
              metadata: {
                description:
                  "> The good bit that fills up your coffers.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83E\uDD11", // money-mouth face
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.11": {
              id: "13.11",
              title: "Payslips, invoices, & remittance",
              metadata: {
                description:
                  "> Proof of payment for your hard work, neatly sorted by year-month.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.12": {
              id: "13.12",
              title: "Expenses & claims",
              metadata: {
                description:
                  "> Those work things that you have to pay for yourself and then claim back.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.13": {
              id: "13.13",
              title: "Government services",
              metadata: {
                description:
                  "> Anything related to help you may receive from the government.\n> *e.g. student loans, concessions and grants, social security, veterans’ affairs, disability services, housing assistance, Medicare.*\n> - We made a decision to group this under one umbrella here as it’s neater. But if your situation is complicated, you might need more room.\n> - Note also that your pension is below at [[13.24 Pension]].",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.14": {
              id: "13.14",
              title: "Gifts, prizes, inheritance, & windfalls",
              metadata: {
                description:
                  "> You have won second prize in a beauty contest, collect $10, and store the tax receipt here.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.15": {
              id: "13.15",
              title: "Selling my stuff",
              metadata: {
                description:
                  "> A place to organise anything related to selling your possessions.\n> *e.g. photos and descriptions for clothes to sell on eBay, a ‘for sale’ sign to print and stick in your car’s back window, planning a garage sale.*\n> - For side-hustles, see [[11.73 My side-hustles]].",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.20": {
              id: "13.20",
              title: "Saved",
              metadata: {
                description:
                  "> You didn’t blow it all on pay day, excellent adulting.\n> - Like 12.20, this is another great place to practise your new consistent file-naming skills. Don’t save files with the gibberish names from the banks or investment services. Using the year-month method, you can store hundreds of neatly-sorted, easy-to-find documents in these folders.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83D\uDCC8", // graph with upwards trend
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.21": {
              id: "13.21",
              title: "Budgets & planning",
              metadata: {
                description:
                  "> A place for notes and spreadsheets to help ensure you’re on top of all the money stuff and there’s no surprises.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.22": {
              id: "13.22",
              title: "Bank accounts",
              metadata: {
                description:
                  "> All the account paperwork and statements, neatly sorted by year-month.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.23": {
              id: "13.23",
              title: "Investments & assets",
              metadata: {
                description:
                  "> Anything related to your long-term rainy-day fund.\n> *e.g. shares, term deposits, trusts, managed funds, investment apps, assets like paintings or jewellery, or if you’re a Die Hard fan, German bearer bonds.*\n> - This is more about cash investments or things that are smaller than a house. If you have property investments, consider category **12 Where I live & how I get around**.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.24": {
              id: "13.24",
              title: "Pension",
              metadata: {
                description:
                  "> Either government provided or that you and/or your employer contribute to.\n> *e.g. in Australia this is called ‘superannuation’, the US calls it 401(k), other countries seem to all have their own name for this.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.30": {
              id: "13.30",
              title: "Owed",
              metadata: {
                description:
                  "> Dang.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83D\uDCB8", // money with wings
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.31": {
              id: "13.31",
              title: "Credit cards",
              metadata: {
                description:
                  "> All the account paperwork and statements, neatly sorted by year-month.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.32": {
              id: "13.32",
              title: "Mortgage",
              metadata: {
                description:
                  "> All the account paperwork and statements, neatly sorted by year-month.\n> - We decided to put this here and not category **12 Where I live & how I get around** because this is just an ‘account’ – you can switch mortgage provider, but you have the same home.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.33": {
              id: "13.33",
              title: "Personal loans",
              metadata: {
                description:
                  "> All the account paperwork and statements, neatly sorted by year-month.\n> *e.g. car or holiday loans, those deals where you get 2 years interest free to pay off furniture or a laptop, or maybe a family member loaned you money and you have a repayment agreement.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.34": {
              id: "13.34",
              title: "Tax returns & accounting",
              metadata: {
                description:
                  "> Anything related to having an accountant and/or processing your annual tax return, neatly ordered by year.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.35": {
              id: "13.35",
              title: "Tickets & fines",
              metadata: {
                description:
                  "> It happens to the best of us – pay it, put the receipt here, and move on.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.40": {
              id: "13.40",
              title: "Spent & sent",
              metadata: {
                description:
                  "> Where does it all go? Here’s a place to keep track of some of it.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83D\uDECD\uFE0F", // shopping bags
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.41": {
              id: "13.41",
              title: "Purchase receipts",
              metadata: {
                description:
                  "> Store all the important ones here, rigorously sorted by year-month and with a logical, descriptive name – your future self will thank you for putting them all in one place.\n> - This is especially important for warranties (see [[12.16 Appliances, tools, & gadgets]]) or higher-value items that fail and need to be exchanged or claimed on insurance - keep it all just in case.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.42": {
              id: "13.42",
              title: "Subscriptions, memberships, & donations",
              metadata: {
                description:
                  "> A place to record all the outgoings you’ve signed up for.\n> *e.g. software, apps, web services like hosting and domains, media and streaming services, support and crowd-funding like Patreon and Go Fund Me, food or beverage or household product subscriptions that arrive at your door, memberships for gyms and clubs, recurring charity donations.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.43": {
              id: "13.43",
              title: "Payment services",
              metadata: {
                description:
                  "> Anything to do with online payment platforms or ‘buy now, pay later’ services.\n> *e.g. PayPal, Afterpay, Klarna, Affirm.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.44": {
              id: "13.44",
              title: "Money transfer services",
              metadata: {
                description:
                  "> Anything to do with moving money around locally or internationally.\n> *e.g. Western Union, money orders.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.50": {
              id: "13.50",
              title: "Financial administration",
              metadata: {
                description:
                  "> A place for any ‘bigger picture’ financial records or documents.\n> - Ideally you should have found a place for your thing above. But it’s not uncommon to get financial documents that are one-offs or don’t fit elsewhere. There’s plenty of room to create new folders for them here.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83D\uDCD4", // notebook with decorative cover
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "13.51": {
              id: "13.51",
              title: "My credit rating",
              metadata: {
                description:
                  "> Any official documents related to your credit rating and history.",
                createdDate: "",
                updatedDate: "",
              },
            },
          },
        },
        "14": {
          id: "14",
          title: "My online life",
          metadata: {
            createdDate: "2024-01-10T00:00:00",
            updatedDate: "2024-01-10T00:00:00",
          },
          ids: {
            "14.00": {
              id: "14.00",
              title: "My online life category management",
              metadata: {
                description:
                  "> This **category** is all about living in the digital world.\n> \n> > If you have a lot going on in this category you might need to expand your system (see the [website](https://jdcm.al), [workbook](https://jdcm.al/14.02), or [workshop](https://jdcm.al/14.03)).\n> > *e.g. you’re a computer nerd with a complicated set up, you maintain numerous blogs or websites, you’re an influencer, serious gamer, or Bitcoin miner.*\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\u2699\uFE0F", // gear
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.01": {
              id: "14.01",
              title: "Inbox",
              metadata: {
                description:
                  "> This is the inbox for category **14 💻 My online life**. See **00.00 ■ System management** in [[11.02 System manual 📙|the manual]] for more information.\n> \n> Pro tip: when you start to organise your system, move all of your stuff in to the relevant category inbox as a first step. This is a really simple way to go from total chaos to pretty good. Then tackle each category inbox in turn, moving each item to its proper home in an ID.",
                emoji: "\uD83D\uDCE5", // in-tray
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.09": {
              id: "14.09",
              title: "Archive",
              metadata: {
                description:
                  "> This is the archive for category **14 💻 My online life**. See **00.00 ■ System management** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83D\uDCE6", // package
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.10": {
              id: "14.10",
              title: "Computers & other devices",
              metadata: {
                description:
                  "> All the physical gadgets and gizmos.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83D\uDCBB\uFE0F", // desktop computer
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.11": {
              id: "14.11",
              title: "My computers & servers",
              metadata: {
                description:
                  "> Anything related to purchasing or maintaining a computer.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.12": {
              id: "14.12",
              title: "My mobile devices",
              metadata: {
                description:
                  "> Anything related to purchasing or maintaining a smaller, handheld device.\n> *e.g. phone, tablet, e-reader.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.13": {
              id: "14.13",
              title: "My wi-fi & network devices",
              metadata: {
                description:
                  "> Anything related to purchasing or maintaining the devices that connect you to a home network or the internet.\n> *e.g. modems, routers, portable wifi dongles, home network diagrams you’ve made, troubleshooting instructions for when things go down.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.14": {
              id: "14.14",
              title: "My data storage & backups",
              metadata: {
                description:
                  "> Anything related to the devices and services that keep your data.\n> *e.g. physical storage like hard drives and USB sticks, cloud storage services like Dropbox, iCloud, or OneDrive, notes about what data is where, backup services like Time Machine or Backblaze, notes about backup strategies and tests.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.15": {
              id: "14.15",
              title: "My accessories",
              metadata: {
                description:
                  "> All the other hangers on and pluggers in.\n> *e.g. headphones, ear buds, watches, printers, monitors, keyboards, mice, touch pads, styluses and pencils, cables and connectors, and any other nerdy tools related to being on a computer and/or online.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.20": {
              id: "14.20",
              title: "Software & accounts",
              metadata: {
                description:
                  "> A place to keep track of the non-physical things you buy, install, or sign in to.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83D\uDD11", // key
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.21": {
              id: "14.21",
              title: "My emergency recovery kit",
              metadata: {
                description:
                  "> A little bit of real talk.\n> - We strongly encourage you to organise this if you don’t have one. We can’t tell you what to do, everybody’s situation is different, plus we’re not qualified. ;-)\n> - But it’s basically just a list of instructions, stored in a secure location, that outlines your digital life for future you or a trusted person in an emergency.\n> - This is important for a few reasons. Maybe your house floods or burns down and you lose literally everything – no phone, no wallet, just the shirt on your back. Starting over will be hard. Help yourself by making it easy to regain access to your data and accounts.\n> - Or worse, if something bad happens to you – an accident that really knocks you about. An emergency recovery kit ensures a trusted family member or friend can access your computer and accounts.\n> - Make sure it lists out all the high-priority stuff first, like accounts related to insurance and money. And explain the service or method you use to store your passwords (obviously don’t leave this lying around!).\n> - This may seem like an easy task to put off. But it will save the people most important to you a lot of stress and frustration if you’ve done this amazing gesture for them. And importantly, it will help them carry out your wishes.\n> - Given that we all spend so much time in the digital world these days, this kind of document is arguably just as important as a traditional will.\n> - The team at 1Password released [How to get started with digital estate planning](https://1passwordstatic.com/files/resources/digital-estate-planning-guide.pdf), which is worth a read.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.22": {
              id: "14.22",
              title: "Software, licenses, & downloads",
              metadata: {
                description:
                  "> Anything related to one-time purchasing or downloading software, apps, or anything else.\n> *e.g. receipts, license keys, wallpapers, fonts.*\n> - We’ve suggested keeping recurring subscriptions in one place at [[13.42 Subscriptions, memberships, & donations]], just so it’s easier to keep track of all those outgoings.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.23": {
              id: "14.23",
              title: "Email accounts",
              metadata: {
                description:
                  "> Anything related to email, whether you use a service or configure it yourself.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.24": {
              id: "14.24",
              title: "Social media accounts",
              metadata: {
                description:
                  "> omg, put things related to social media here, lol.\n> *e.g. profile pics or bio text you re-use, the folder of personal data you can download before closing an account like Instagram or Facebook.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.25": {
              id: "14.25",
              title: "Domains & hosting",
              metadata: {
                description:
                  "> Documents related to purchasing domains and giving them a home on the web.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.26": {
              id: "14.26",
              title: "All other accounts",
              metadata: {
                description:
                  "> Any other account details that don’t logically fit into the above IDs.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.30": {
              id: "14.30",
              title: "My online presence",
              metadata: {
                description:
                  "> Maintaining your own little patch of the internet – anything you do online that isn’t social media, here’s a place to organise it.\n> - This is another one that’s hard to predict, so we’ve just left a thought starter here. There’s plenty of room to create new folders for all the things that you do now or ideas for the future.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83C\uDF0F", // globe showing Asia and Australia
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "14.31": {
              id: "14.31",
              title: "My blog",
              metadata: {
                description:
                  "> A place to store all your great words and pictures – send us a link!",
                createdDate: "",
                updatedDate: "",
              },
            },
          },
        },
        "15": {
          id: "15",
          title: "Travel, events, & entertainment",
          metadata: {
            createdDate: "2024-01-10T00:00:00",
            updatedDate: "2024-01-10T00:00:00",
          },
          ids: {
            "15.00": {
              id: "15.00",
              title: "Travel, events, & entertainment category management",
              metadata: {
                description:
                  "> This **category** is all about the fun things that happen when you step outside your front door.\n> \n> > If you have a lot going on in this category you might need to expand your system (see the [website](https://jdcm.al), [workbook](https://jdcm.al/14.02), or [workshop](https://jdcm.al/14.03)).\n> > *e.g. you organise local DJ nights or host pub trivia, you’ve turned travel into a side-hustle and take people on small-group tours.*\n> \n> - What **not** to put here:\n> - If you’re organising something like a family reunion or holiday lunch, put that up in [[11.45 Celebrations & gifting]]. And if you go to a lot of events as part of your job or hobby, it might be more logical to put them there.\n> - Also, we’ve designed this system to be as close to a ‘baseline’ for everyone as possible. But that doesn’t mean you can’t add in something that’s important to you. For instance, we decided that things like cosplay and gaming are probably hobbies and should have their own home. But if you consider them entertainment, then add them here. Just be sure to follow the guidance so far and keep your folders neatly sorted.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\u2699\uFE0F", // gear
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.01": {
              id: "15.01",
              title: "Inbox",
              metadata: {
                description:
                  "> This is the inbox for category **15 ✈️ Travel, events, & entertainment**. See **00.00 ■ System management** in [[11.02 System manual 📙|the manual]] for more information.\n> \n> Pro tip: when you start to organise your system, move all of your stuff in to the relevant category inbox as a first step. This is a really simple way to go from total chaos to pretty good. Then tackle each category inbox in turn, moving each item to its proper home in an ID.",
                emoji: "\uD83D\uDCE5", // in-tray
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.09": {
              id: "15.09",
              title: "Archive",
              metadata: {
                description:
                  "> This is the archive for category **15 ✈️ Travel, events, & entertainment**. See **00.00 ■ System management** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83D\uDCE6", // package
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.10": {
              id: "15.10",
              title: "Inspiration & history",
              metadata: {
                description:
                  "> If you’re anything like us, this is where your mind spends most of its time.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83D\uDCAD", // thought balloon
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.11": {
              id: "15.11",
              title: "Places I've been, or want to go",
              metadata: {
                description:
                  "> A place to keep lists, ideas, and research for upcoming trips, and a log of those you’ve ticked off.\n> - Keeping an accurate record of places you’ve been can come in handy. For instance, completing visa and immigration forms, or work-related background checks and security clearances.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.12": {
              id: "15.12",
              title: "Places I'd like to eat or drink",
              metadata: {
                description:
                  "> A place to keep important lists of delicious places to go, locally or abroad.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.13": {
              id: "15.13",
              title: "Inspirational or useful websites, apps, & guides",
              metadata: {
                description:
                  "> Whatever your go-to resources are, record them here.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.20": {
              id: "15.20",
              title: "Administration & checklists",
              metadata: {
                description:
                  "> A place to keep the high-level stuff that could apply to any trip.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\u2705", // tick symbol
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.21": {
              id: "15.21",
              title: "Important documents & lists",
              metadata: {
                description:
                  "> A place to put important travel-related documents that aren’t specific to a particular trip.\n> *e.g. international drivers license or vaccination certificate (a.k.a. the ‘yellow card’), a printable list of contacts (family, bank, insurance, etc.) to keep in your luggage/day pack for use in an emergency/phone loss.*\n> - Visas **are** trip specific – put them in their trip ID under [[15.40 ■ Short or routine trips 🚉]] or [[15.50 ■ Longer trips 🛫]].",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.22": {
              id: "15.22",
              title: "Going-away checklists",
              metadata: {
                description:
                  "> If you dread packing and preparations, these can change your life – stop re-inventing the wheel and just do what your past self tells you.\n> *e.g. pack, get house or pet sitter/house-plant waterer, check passport expiry, inform bank of overseas travel, set up international eSIM, order foreign currency/payment card, check luggage tags are up to date.*\n> - Pro nerd tip: consider subdividing packing checklists into work trips (domestic and international) and holidays (domestic and international).",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.23": {
              id: "15.23",
              title: "Travel insurance & claims",
              metadata: {
                description:
                  "> A place to put your policy, coverage details, receipts, and claim forms.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.24": {
              id: "15.24",
              title: "Loyalty programs",
              metadata: {
                description:
                  "> Anything related to transport or accommodation programs you’ve signed up to.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.30": {
              id: "15.30",
              title: "Events",
              metadata: {
                description:
                  "> Anything related to paid or free events that require a ticket or reservation.\n> - Many tickets are PDF attachments that can be saved in your system. However, we acknowledge that they’re often just an email.\n> - This is optional, but you might like to create matching folders in your email. For instance, create [[15.31 Eating out]] and move your restaurant reservations there. But don’t forget to note in your **index** that you’ve done this or you’ll forget.\n> - This is common practice in Johnny.Decimal world, so if you find yourself wanting to expand your system to your email, you might be ready to graduate to a more advanced level. :-)\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83C\uDF7F", // popcorn
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.31": {
              id: "15.31",
              title: "Eating out",
              metadata: {
                description:
                  "> A place for restaurant or bar booking confirmations.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.32": {
              id: "15.32",
              title: "Music",
              metadata: {
                description:
                  "> Whatever music means to you, put the tickets and confirmations here.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.33": {
              id: "15.33",
              title: "Movies",
              metadata: {
                description:
                  "> Whether it’s the cinema or a film festival, put the tickets and confirmations here.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.34": {
              id: "15.34",
              title: "The arts",
              metadata: {
                description:
                  "> Whatever the arts means to you, put the tickets and confirmations here.\n> *e.g. theatre, plays, dance, galleries and exhibitions, spoken word.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.35": {
              id: "15.35",
              title: "Sport",
              metadata: {
                description: "> Go team.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.36": {
              id: "15.36",
              title: "Fairs & shows",
              metadata: {
                description:
                  "> All the other kinds of events – if you see a giant pumpkin send us a photo.\n> *e.g. county fairs, flower shows, agricultural or animal shows, local fetes, rodeos, air shows.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.37": {
              id: "15.37",
              title: "Conferences & expos",
              metadata: {
                description:
                  "> The kind of thing that’s in a large exhibition area, probably with sales booths and people handing out leaflets and branded pens.\n> *e.g. wedding expo, camping and outdoors expo, TED, work-related conferences that you attend for career development or education.*",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.40": {
              id: "15.40",
              title: "Short or routine trips",
              metadata: {
                description:
                  "> One ID, [[15.41 All short trips]], for all of your short, simple, or routine trips.\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.",
                emoji: "\uD83C\uDFCD", // station
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.41": {
              id: "15.41",
              title: "All short trips",
              metadata: {
                description:
                  "> For any trip that doesn’t have much paperwork:\n> * Create a new folder inside this ID,\n> * Label it ‘year-month-day destination’,\n> * Save any documents there.\n> \n> *e.g. A spontaneous road trip – you only have a car hire confirmation because you’ll just choose motels along the way. A weekend city break – you only have a train ticket and a hotel booking. A routine monthly work trip to the same place – work takes care of the arrangements, but they email your flight and hotel confirmations.*\n> \n> See the screenshot in the PDF for an example.",
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.50": {
              id: "15.50",
              title: "Longer trips",
              metadata: {
                description:
                  "> This is where the (neatly-templated) magic happens. For each new holiday or work trip just copy-paste an empty set of folders from here into the next available ID. Have fun! (Or if it’s a work trip, sensibly enjoy your expense budget.)\n> - For passports, residency, & citizenship, see [[11.12 Passports, residency, & citizenship]].\n> - For other important documents such as your international vaccination certificate, see [[15.21 Important documents & lists]].\n> \n> This is a **heading**. Don’t store anything here. See **02.03** in [[11.02 System manual 📙|the manual]] for more information.\n\n## ↖ Holiday template\nEach holiday gets an ID with standard folders in it:\n* 10 Planning & ideas\n* 20 Travel documents & visas ← *specific to the trip*\n* 30 Getting there\n* 40 Somewhere to stay\n* 50 Moving around the place\n* 60 Fun things to do\nSee the screenshot in the PDF for an example.\n\n## ↖ Work trip template\nEach work trip gets an ID with standard folders in it:\n* 10 Planning\n* 20 Travel documents & visas ← *specific to the trip*\n* 30 Transport\n* 40 Accommodation\n* 50 Itineraries & schedules\n* 60 Expenses to claim\nSee the screenshot in the PDF for an example.",
                emoji: "\uD83D\uDEEB", // aeroplane taking off
                isHeader: true,
                createdDate: "",
                updatedDate: "",
              },
            },
            "15.51": {
              id: "15.51",
              title: "Longer trips from the past",
              metadata: {
                description:
                  "> A place to keep old trips that you don’t want to create an ID for – just neatly label them by year-month here.",
                createdDate: "",
                updatedDate: "",
              },
            },
          },
        },
      },
    },
  },
};

module.exports = lifeAdmin;
