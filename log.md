# 2024

- a796e9f94a9b8ae9545c9e05ab22630fad246973
  - bare-bones static functionality
  - next: turn in to SSR while keeping what we've got
  - deploy to netlify
  - `npx astro add netlify` for the adapter
  - change the config option to `hybrid` from `server`
  - build
  - warnings about Astro.request.headers; but you don't use them (yet)
- 0f2c5179c18ace14b27195b31262704c0176d1b4
  - pushed
  - deploys OK
  - i think we need to go React now ... the Astro docs themselves say that if you're doing auth, you need React. so why don't we just bite the bullet
  - let's kick the tyres of Preact first...
  - https://docs.astro.build/en/guides/integrations-guide/preact/#why-preact
  - ...but before we do, let's re-check Clerk's doco to make sure this is the right path. we want to introduce as little new stuff as possible
  - first, let's go back to `server` config to see what difference it makes IRL
  - well the main difference is that none of your pages builds! which is expected
  - let's force them to prebuild and see what happens
  - add `export const prerender = true;` to [id].astro
    - not to [category] or [area] yet
  - deploy this and see how Netlify treats it
- cdf6973a390862621433b202bf82d83671e09bd1
  - deploys fine, static pages exist, is as quick/light as before; no change
  - okay so now let's install the basic Clerk config, as minimal as possible
  - https://clerk.com/docs/quickstarts/astro
  - `npm install @clerk/astro`
  - check .env.local keys
  - update astro.config
    - **side-note**: if things are funky, try building locally then doing a `netlify deploy` https://docs.astro.build/en/guides/integrations-guide/netlify/#usage
  - add middleware.ts
  - [the docs](https://clerk.com/docs/quickstarts/astro#add-clerk-middleware-to-your-app) note that this isn't actually protecting any routes yet
  - add TS declarations
  - add a new layout component layouts/SiteLayout.astro
  - change index _but not [id]_ to use the new layout
  - does it build locally ... yep, with expected warnings
  - does netlify dev work
    - /11.11 renders fine, as expected (isn't wrapped)
    - / is protected, but the button doesn't work (and there's no style)
  - let's do a `netlify deploy`
- 79bb2d4a8425b2deaa1a7bf5ea350f9269bd726d
  - index page is now a 404
  - your IDs render but now they're 250KB
  - calls to clerk.com fail because domains don't match: deploying to app.johnnydecimal.com (Netlify config)
  - done. okay so none of the static pages render, they're all 404
  - ripping everything out of index.astro and replacing with the bare-bones example
  - sign in button still isn't working. checking all config
  - aha, works when deployed. no console errors :-)
  - you can only sign-in ... no sign-up, because of that setting you set
  - send yourself an invitation
  - okay signed up. so now let's see if we can protect one of our ID pages using the middleware
  - let's just copy this https://clerk.com/docs/references/astro/read-session-data#server-side
  - and we're just building and netlify deploying here; not pushing to github
  - let's do that
- ac15a9e8c6f5f408244f2ec7fd107f70c8cc6198
  - src/pages/me.astro exists but doesn't render when deployed. _does_ render when running with netlify dev locally...
  - was it the site: property?...
  - no change when building locally. let's try a good ole git push
  - aha! doofus. you need to `netlify build` and `netlify deploy`, not `npm run build`
  - so all the components are there but they're not hanging together quite right. feels like we need to go back to basics and read the clerk docs
  - ooh let's clone the quickstart repo https://github.com/clerk/clerk-astro-quickstart ... okay that was super rudimentary
  - our app isn't protecting /AC.ID. let's see if we can do that with a route matcher
    - https://clerk.com/docs/references/astro/clerk-middleware#create-route-matcher
  - nawp, that just 404s your page now! ffs
  - let's go and watch a bunch of youtube
  - commit because we're going to try pure client-side as per ChatGPT's instructions
- 36f65732b3dded39c8c5645a553edae2f97780f8
  - let's rip out any of the weird shit
  - oh we're going back to a static site by the way in config
  - don't even need the Clerk integration!
  - delete middleware
  - npm install @clerk/clerk-js
  - create layouts/ClerkAuth.astro
  - nah also janky, let's pull all of _that_ out again. i think we can just reset back to the start
- git reset --hard a796e9f94a9b8ae9545c9e05ab22630fad246973
  - ooh careful doing that, you almost lost this file!
  - let's commit and do shit on branches from now on
- alright, from `main` we're now on branch `one`
  - first step: install the Netlify dingus but use hybrid routing so nothing actually changes; great
  - now the Astro quickstart, which doesn't mention React at all
  - https://clerk.com/docs/quickstarts/astro
  - then don't forget https://clerk.com/docs/references/astro/hybrid-rendering#hybrid-output-mode **no** actually nothing to do
  - errrrr ... okay that basically works. let's commit
- 2d2fdb852ef772964b3f35e3617ab4105b19505f
  - now, nothing is protected. but we expected that
  - let's protect some routes https://clerk.com/docs/references/astro/clerk-middleware
  - let's do anything starting /11 so we can test that /12+ still works
  - add our .env vars to Netlify
  - then we might need envs for SIGN_IN etc.
  - aha yeah that's why we're in that nasty loop
  - added vars, does it need a redeploy?
  - protecting routes futzed it right up. unprotect
  - you idiot. routes 12.x don't exist. okay let's protect 11.1\*, idea is just to see if that works at a very basic level
  - does. and in local dev it seems to redirect nicely from /11.11 also...

# 2025

- 70a222f9ee9cd4568c476f4c6c8f81b63bd74a07
  - start with the weird issue where 'Missing Clerk Secret Key'
  - but it works after you reload astro.config so meh

# Clerk auth stuff

- Frontend
  - JavaScript
  - https://clerk.com/docs/quickstarts/javascript
  - Definitely interesting. JS, talks about bundling with Vite which we know we can do.
  - `npm install @clerk/clerk-js` then set your .env keys
  - So could this happen in an /api/\_ file? Like your download handler?
  - Because then this page talks about building a vanilla HTML app with <script> tags
- But the clerk.load method might be interesting
  https://clerk.com/docs/references/javascript/clerk/clerk#load
- Okay we're not loving that code when pasted as-is to /api/clerk.ts.
- What about in an .astro component?
  - Nah
- Let's keep going with the doco. Chatty-G recommends @clerk/backend instead.
  - https://clerk.com/docs/references/backend/overview
  - _For example, if you wanted to get a list of all users in your application, instead of creating a fetch to https://api.clerk.com/v1/users endpoint, you can use the users.getUserList() method provided by the JavaScript Backend SDK._
  - `npm i @clerk/backend`
  - Okay and now the basic code works in an Astro component, and logs `clerkClient` as an object
  - It notes that you need to [error handle](https://clerk.com/docs/references/backend/overview#error-handling) with `try/catch`

## Got it!

- So Astro.locals.auth() contains the user's ID
  - https://clerk.com/docs/references/astro/locals
- And clerkClient.users.getUser(userId) now works hunky-dory

- This should be really useful but let's focus on getting the actual API call working first, _then_ worry about how we call it and react to the result.
  - https://docs.astro.build/en/recipes/call-endpoints/

## Recap what we've figured out

- Don't lose this train of thought!

```js
<script>
  // document.addEventListener('DOMContentLoaded', () => {
  import { actions } from "astro:actions";
  const checkbox = document.getElementById("firstRunCompleteCheckbox");

  const button = document.querySelector("button");
  button?.addEventListener("click", async () => {
    console.log("You clicked the button");
    const { data, error } = await actions.flipFirstRun({});
    if (!error) {
      // alert(data);
      (checkbox as HTMLInputElement)!.checked = data as boolean;
    }
  });
</script>
```
