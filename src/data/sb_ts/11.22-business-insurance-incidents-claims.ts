// Auto-generated from 11.22-business-insurance-incidents-claims.md
import type { IdEntry } from "@data/smallBusinessFlat";
const entry: IdEntry = {
  "number": "11.22",
  "title": "Business insurance, incidents, & claims",
  "description": "Policies, coverage details, incident reports, and claim forms for your business entity and people.",
  "type": "id",
  "isPublic": false,
  "isHeader": false,
  "metadata": {
    "createdDate": "2025-02-13T03:34:05.374Z",
    "updatedDate": "2025-02-13T03:34:05.374Z"
  },
  "extensions": {
    "smallBusiness": {
      "examples": "Public liability insurance; professional indemnity insurance; workers compensation insurance.",
      "overview": "This is a place for any insurance that covers the business entity interacting with the world. And overall coverage for staff while they are at work.\n\nSome of these insurances may be required by law. For instance, in Australia public liability and workers compensation insurance is compulsory.\n\nWe’ve noted in our research that insurance companies often have commercial policies that are specifically designed for certain occupations. So it might pay to look around to see if that’s an option for you.\n\nThis is also where to store incident reports that might become part of a claim. For example, if a staff member is injured at work put the details and medical report here.\n\n### There’s a lot of insurance out there\n\nWe’re not insurance brokers, so we can’t advise you on what to get. But one of the things we’ve learned in our research for this system is that there is _a lot_ of insurance options for businesses. It’s a bit overwhelming. We now understand the value of a trustworthy insurance professional to provide sensible, tailored advice.",
      "exceptions": "Staff health insurance as part of a salary package goes in [[13.34]].\n\nBuilding (structural and/or contents) or land insurance goes in [[12.12]].\n\nVehicle insurance goes in [[12.42]].\n\nFinancial insurance goes in [[13.12]].\n\nCyber insurance goes in [[14.44]].\n\nProduct insurance goes in [[20-29]].",
      "rationale": "We recommend that insurance details should live next to the thing that is being insured. This will help your brain find things, and ensure other relevant information is nearby if you’re dealing with a claim or policy renewal. Hence, business insurance goes up here and there’s room allocated for other insurances in the categories below.",
      "links": "An overview of all the [types of insurances](https://business.gov.au/risk-management/insurance/types-of-business-insurance) a business might have. Some policies would go here, others would fit in the categories below.\n\nThis is not an endorsement, just an example of a company that offers policies for different occupations – [NRMA business insurance](https://www.nrma.com.au/business-insurance#)."
    }
  }
};
export default entry;
