import { renderers } from "./renderers.mjs";
import { c as createExports } from "./chunks/entrypoint_DUWqWC6r.mjs";
import { manifest } from "./manifest_DR08K0_f.mjs";
import "./_astro-internal_middleware.mjs";
const _page0 = () => import("./pages/_image.astro.mjs");
const _page1 = () => import("./pages/about.astro.mjs");
const _page2 = () => import("./pages/blog.astro.mjs");
const _page3 = () => import("./pages/blog/_---slug_.astro.mjs");
const _page4 = () => import("./pages/rss.xml.astro.mjs");
const _page5 = () => import("./pages/_area_.astro.mjs");
const _page6 = () => import("./pages/_category_.astro.mjs");
const _page7 = () => import("./pages/_id_.astro.mjs");
const _page8 = () => import("./pages/index.astro.mjs");
const pageMap = /* @__PURE__ */ new Map([
  ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
  ["src/pages/about.astro", _page1],
  ["src/pages/blog/index.astro", _page2],
  ["src/pages/blog/[...slug].astro", _page3],
  ["src/pages/rss.xml.js", _page4],
  ["src/pages/[area].astro", _page5],
  ["src/pages/[category].astro", _page6],
  ["src/pages/[id].astro", _page7],
  ["src/pages/index.astro", _page8]
]);
const serverIslandMap = /* @__PURE__ */ new Map();
const _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  middleware: () => import("./_astro-internal_middleware.mjs")
});
const _args = {
  "middlewareSecret": "d179167c-d135-49bc-a05b-eca42c5dacbe",
  "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
export {
  __astrojsSsrVirtualEntry as default,
  pageMap
};
