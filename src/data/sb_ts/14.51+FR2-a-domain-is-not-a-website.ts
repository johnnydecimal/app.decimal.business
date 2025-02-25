// Auto-generated from 14.51+FR2-a-domain-is-not-a-website.md
import type { FurtherReadingEntry } from "@data/smallBusinessFlat";
const entry: FurtherReadingEntry = {
  "number": "14.51+FR2",
  "title": "A domain is not a website",
  "type": "furtherReading",
  "isPublic": false,
  "metadata": {
    "createdDate": "2025-02-25T00:57:51.080Z",
    "updatedDate": "2025-02-25T00:57:51.080Z"
  },
  "extensions": {
    "furtherReading": {
      "text": "This is a little technical, but it’s handy to know about. If your eyes are glazing over, stay with us.\n\n_A domain is separate to any services that you run on it._ Whether that’s a website, blog, forum, email, or a bunch of other stuff like remote logins, VPNs, or file servers. So once you’ve registered your domain, you can use it for all sorts.\n\n## A big one for business owners is email\n\nWe often see vans proudly displaying their website (e.g. carolscupcakes.com) and email (e.g. carolscupcakes@gmail.com) in big letters down the side.\n\nUnfortunately Carol doesn’t know that she can easily set up a personalised email (e.g. hello@carolscupcakes.com) using her domain and her existing gmail account. As a sole trader, Lucy didn’t know this either. Until Johnny came along, tapped a few keys, and did some DNS magic.\n\n## Domain name service\n\nSo that’s what DNS means: domain name service. All the services that can run on your domain. For example, the domain, johnnydecimal.com, is registered at Porkbun. And we use other services to provide the website, email, and blog. But Porkbun is where we _point our domain to those services_.\n\nIt’s like the most important address book. So when someone wants to visit our website at johnnydecimal.com, we’ve told Porkbun to send them to our web hosting service. When someone wants to send us an email to hello@johnnydecimal.com, we’ve told Porkbun to send them to our email service.\n\nIn the future, we could make an ops manual to help with this kind of thing. Let us know if that’s something you’d like."
    }
  }
};
export default entry;
