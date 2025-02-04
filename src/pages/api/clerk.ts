import pkg from "@clerk/clerk-js";
const { Clerk } = pkg;

const publishableKey = import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY;
console.log("Clerk public key", publishableKey);

const clerk = new Clerk(publishableKey);
await clerk.load({
  // Set load options here
});

console.log(clerk);
