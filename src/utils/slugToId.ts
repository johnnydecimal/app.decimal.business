function slugToId(slug: string | undefined): string {
  if (slug === undefined || slug === "index.html") {
    return "J82";
  } else if (slug === "favicon.svg") {
    // Firefox preloading it?
    // BUG probably needs fixing
    // If you remove this as a return path, and load the home page in Firefox,
    // you'll see an error.
    return "J82";
  } else {
    return slug;
  }
}

export default slugToId;
