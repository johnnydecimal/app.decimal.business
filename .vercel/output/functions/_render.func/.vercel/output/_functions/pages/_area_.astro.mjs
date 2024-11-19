import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, e as addAttribute } from "../chunks/astro/server_3DE6TPSA.mjs";
import "kleur/colors";
import { $ as $$Layout, s as smallBusiness } from "../chunks/smallbusiness_C5kqAMVe.mjs";
import { renderers } from "../renderers.mjs";
const $$Astro = createAstro("https://example.com");
async function getStaticPaths() {
  const pageData = [];
  const areas = Object.keys(smallBusiness.areas);
  for (const area of areas) {
    const areaId = smallBusiness.areas[area].id;
    const areaTitle = smallBusiness.areas[area].title;
    const categories = smallBusiness.areas[area].categories || {};
    const categoryData = Object.keys(categories).map((category) => ({
      categoryId: category,
      categoryTitle: categories[category].title
    }));
    pageData.push({
      params: { area: areaId },
      props: { areaId, areaTitle, categoryData }
    });
  }
  return pageData;
}
const $$area = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$area;
  const { area: areaId } = Astro2.params;
  const { areaTitle, categoryData = [] } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${areaId} ${areaTitle}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 id="jd-id">${areaId} ${areaTitle}</h1> <button id="copy-jd-id">Copy</button> <div> ${categoryData.map((c) => renderTemplate`<li> <a${addAttribute(c.categoryId, "href")}> ${c.categoryId} ${c.categoryTitle} </a> </li>`)} </div> ` })}  `;
}, "/Users/john/dev/decimal.business/memberwww.decimal.business/src/pages/[area].astro", void 0);
const $$file = "/Users/john/dev/decimal.business/memberwww.decimal.business/src/pages/[area].astro";
const $$url = "/[area]";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$area,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
