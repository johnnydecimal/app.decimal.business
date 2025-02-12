// Auto-generated from 12.34-keep-the-front-office-well-equipped.md
import type { IdEntry } from "@data/smallBusinessFlat";
const entry: IdEntry = {
  "number": "12.34",
  "title": "Keep the front office well equipped",
  "description": "Supplies and equipment that help us deliver our product or service.",
  "type": "id",
  "isPublic": false,
  "isHeader": false,
  "metadata": {
    "createdDate": "2025-02-12T05:47:44.762Z",
    "updatedDate": "2025-02-12T05:47:44.762Z"
  },
  "extensions": {
    "smallBusiness": {
      "examples": "Free-standing furniture that isn’t part of a fit-out; branded items like napkins and paper shopping bags; ongoing lease and maintenance contracts for specialised equipment; electrical appliances; payment equipment like tills and handheld ‘tap and go’ units; general office supplies and stationery.",
      "overview": "This is for any kind of equipment and supplies that you use to run the front office and deliver your product or service to customers.\n\nWhat’s in this ID is going to vary widely for different businesses.\n\nFor instance, we would classify a personal trainer’s exercise equipment, a gardener’s lawnmower, and a hairdresser’s scissors as front office equipment. These items _support_ the products they sell – fitness, cut grass, and hair cuts, respectively.\n\nA photographer’s screens, cameras, and lights are front office – they support the delivery of their product, the photographs.\n\nA plumber’s tools and logo-bearing work shirt are front office – they support the delivery of their product, the unblocked toilet.\n\nHowever, if the plumber replaces a broken part in a toilet with a spare from their van, then that would be classified under ‘product’ – they are on-selling the spare part, so that gets tracked in [[20-29]].",
      "exceptions": "Furniture that is a permanent fixture built during a fit-out goes in [[12.14]].\n\nIf you lease any IT equipment like computers, printers, or photocopiers, put it here. If you buy it, put it in [[14.10]].\n\nAny item that you sell goes in [[20-29]]. So if you’re a retail shop, that’s your product inventory and that does not go here (your branded shopping bags do though).",
      "rationale": "We made a decision to separate lease-as-service IT equipment versus one-off purchases. A supplier is providing an ongoing service to you, so managing that becomes part of daily operations.\n\nBut if you buy computers, printers, or other IT gadgets outright, store the records and product manuals with your other technology in [[14.10]]."
    }
  }
};
export default entry;
