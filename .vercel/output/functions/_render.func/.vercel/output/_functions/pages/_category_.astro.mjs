import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, u as unescapeHTML, e as addAttribute } from "../chunks/astro/server_3DE6TPSA.mjs";
import "kleur/colors";
import { marked } from "marked";
import { $ as $$Layout, s as smallBusiness } from "../chunks/smallbusiness_C5kqAMVe.mjs";
import { renderers } from "../renderers.mjs";
const $$Astro = createAstro("https://example.com");
async function getStaticPaths() {
  const pageData = [];
  const areas = Object.keys(smallBusiness.areas);
  for (const area of areas) {
    if (smallBusiness.areas[area].categories) {
      const categories = Object.keys(smallBusiness.areas[area].categories);
      for (const category of categories) {
        const categoryId = smallBusiness.areas[area].categories[category].id;
        const categoryTitle = smallBusiness.areas[area].categories[category].title;
        const categoryDescription = smallBusiness.areas[area].categories[category].description;
        const ids = smallBusiness.areas[area].categories[category].ids || {};
        const idData = Object.keys(ids).map((id) => ({
          idNumber: id,
          idTitle: ids[id].title,
          idDescription: ids[id].description || ""
        }));
        pageData.push({
          params: { category: categoryId },
          props: { categoryId, categoryTitle, categoryDescription, idData }
        });
      }
    }
  }
  return pageData;
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category: categoryId } = Astro2.params;
  const { categoryTitle, categoryDescription, idData = [] } = Astro2.props;
  const mdCategoryDescription = await marked.parse(categoryDescription);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${categoryId} ${categoryTitle}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 id="jd-id">${categoryId} ${categoryTitle}</h1> <button id="copy-jd-id">Copy</button> <div class="category-description">${unescapeHTML(mdCategoryDescription)}</div> <div> ${idData.map((i) => renderTemplate`<li> <a${addAttribute(i.idNumber, "href")}> ${i.idNumber} ${i.idTitle} </a> </li>`)} </div> ` })}  `;
}, "/Users/john/dev/decimal.business/memberwww.decimal.business/src/pages/[category].astro", void 0);
const $$file = "/Users/john/dev/decimal.business/memberwww.decimal.business/src/pages/[category].astro";
const $$url = "/[category]";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
