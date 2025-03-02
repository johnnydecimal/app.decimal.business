function slugToId(slug: string | undefined): string {
  if (slug === undefined || slug === "index.html") {
    return "J82";
  } else {
    return slug;
  }
}

export default slugToId;
