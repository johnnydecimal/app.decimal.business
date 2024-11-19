import { a as createComponent, c as createAstro, r as renderTemplate, b as renderComponent, f as renderSlot, J as defineScriptVars, u as unescapeHTML, F as Fragment, e as addAttribute, m as maybeRenderHead, d as renderHead } from "../chunks/astro/server_3DE6TPSA.mjs";
import "kleur/colors";
import "@clerk/shared/underscore";
import { customAlphabet, urlAlphabet } from "nanoid";
import "clsx";
import { renderers } from "../renderers.mjs";
const $$Astro$e = createAstro("https://example.com");
const $$SignedInCSR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$SignedInCSR;
  const { class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "clerk-signed-in", "clerk-signed-in", { "class": className, "hidden": true }, { "default": () => renderTemplate` ${renderSlot($$result, $$slots["default"])} ` })} `;
}, "/Users/john/dev/decimal.business/memberwww.decimal.business/node_modules/@clerk/astro/components/control/SignedInCSR.astro", void 0);
const $$Astro$d = createAstro("https://example.com");
const $$SignedInSSR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$SignedInSSR;
  const { userId } = Astro2.locals.auth();
  return renderTemplate`${userId ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : null}`;
}, "/Users/john/dev/decimal.business/memberwww.decimal.business/node_modules/@clerk/astro/components/control/SignedInSSR.astro", void 0);
const configOutput = "server";
function isStaticOutput(forceStatic) {
  if (forceStatic !== void 0) {
    return forceStatic;
  }
  return configOutput === "static";
}
const $$Astro$c = createAstro("https://example.com");
const $$SignedIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$SignedIn;
  const { isStatic, class: className } = Astro2.props;
  const SignedInComponent = isStaticOutput(isStatic) ? $$SignedInCSR : $$SignedInSSR;
  return renderTemplate`${renderComponent($$result, "SignedInComponent", SignedInComponent, { "class": className }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/john/dev/decimal.business/memberwww.decimal.business/node_modules/@clerk/astro/components/control/SignedIn.astro", void 0);
const $$Astro$b = createAstro("https://example.com");
const $$SignedOutCSR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$SignedOutCSR;
  const { class: className } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "clerk-signed-out", "clerk-signed-out", { "class": className, "hidden": true }, { "default": () => renderTemplate` ${renderSlot($$result, $$slots["default"])} ` })} `;
}, "/Users/john/dev/decimal.business/memberwww.decimal.business/node_modules/@clerk/astro/components/control/SignedOutCSR.astro", void 0);
const $$Astro$a = createAstro("https://example.com");
const $$SignedOutSSR = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$SignedOutSSR;
  const { userId } = Astro2.locals.auth();
  return renderTemplate`${!userId ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : null}`;
}, "/Users/john/dev/decimal.business/memberwww.decimal.business/node_modules/@clerk/astro/components/control/SignedOutSSR.astro", void 0);
const $$Astro$9 = createAstro("https://example.com");
const $$SignedOut = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$SignedOut;
  const { isStatic, class: className } = Astro2.props;
  const SignedOutComponent = isStaticOutput(isStatic) ? $$SignedOutCSR : $$SignedOutSSR;
  return renderTemplate`${renderComponent($$result, "SignedOutComponent", SignedOutComponent, { "class": className }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/john/dev/decimal.business/memberwww.decimal.business/node_modules/@clerk/astro/components/control/SignedOut.astro", void 0);
var generateSafeId = (defaultSize = 10) => customAlphabet(urlAlphabet, defaultSize)();
function addUnstyledAttributeToFirstTag(html, attributeValue) {
  return html.replace(/(<[^>]+)>/, `$1 data-clerk-unstyled-id="${attributeValue}">`);
}
var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$8 = createAstro("https://example.com");
const $$SignInButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SignInButton;
  const safeId = generateSafeId();
  if ("as" in Astro2.props) ;
  const {
    as: Tag = "button",
    asChild,
    forceRedirectUrl,
    fallbackRedirectUrl,
    signUpFallbackRedirectUrl,
    signUpForceRedirectUrl,
    mode,
    ...elementProps
  } = Astro2.props;
  const signInOptions = {
    forceRedirectUrl,
    fallbackRedirectUrl,
    signUpFallbackRedirectUrl,
    signUpForceRedirectUrl
  };
  let htmlElement = "";
  if (asChild) {
    htmlElement = await Astro2.slots.render("default");
    htmlElement = addUnstyledAttributeToFirstTag(htmlElement, safeId);
  }
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", "<script>(function(){", '\n  const btn = document.querySelector(`[data-clerk-unstyled-id="${safeId}"]`);\n\n  btn.addEventListener("click", () => {\n    const clerk = window.Clerk\n\n    if (mode === \'modal\') {\n      return clerk.openSignIn(signInOptions);\n    }\n\n    return clerk.redirectToSignIn({\n      ...signInOptions,\n      signInFallbackRedirectUrl: signInOptions.fallbackRedirectUrl,\n      signInForceRedirectUrl: signInOptions.forceRedirectUrl,\n    });\n  });\n})();<\/script>'], ["", "<script>(function(){", '\n  const btn = document.querySelector(\\`[data-clerk-unstyled-id="\\${safeId}"]\\`);\n\n  btn.addEventListener("click", () => {\n    const clerk = window.Clerk\n\n    if (mode === \'modal\') {\n      return clerk.openSignIn(signInOptions);\n    }\n\n    return clerk.redirectToSignIn({\n      ...signInOptions,\n      signInFallbackRedirectUrl: signInOptions.fallbackRedirectUrl,\n      signInForceRedirectUrl: signInOptions.forceRedirectUrl,\n    });\n  });\n})();<\/script>'])), asChild ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(htmlElement)}` })}` : renderTemplate`${renderComponent($$result, "Tag", Tag, { ...elementProps, "data-clerk-unstyled-id": safeId }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"], renderTemplate`Sign in`)}` })}`, defineScriptVars({ signInOptions, mode, safeId }));
}, "/Users/john/dev/decimal.business/memberwww.decimal.business/node_modules/@clerk/astro/components/unstyled/SignInButton.astro", void 0);
var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$7 = createAstro("https://example.com");
const $$InternalUIComponentRenderer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$InternalUIComponentRenderer;
  const { component, id, ...props } = Astro2.props;
  const safeId = id || generateSafeId();
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", "<div", "></div> <script>(function(){", "\n  /**\n   * Store the id and the props for the Astro component in order to mount the correct UI component once clerk is loaded.\n   * The above is handled by `mountAllClerkAstroJSComponents`.\n   */\n  const setOrCreatePropMap = ({ category, id, props }) => {\n    if (!window.__astro_clerk_component_props) {\n      window.__astro_clerk_component_props = new Map();\n    }\n\n    if (!window.__astro_clerk_component_props.has(category)) {\n      const _ = new Map();\n      _.set(id, props);\n      window.__astro_clerk_component_props.set(category, _);\n    }\n\n    window.__astro_clerk_component_props.get(category)?.set(id, props);\n  };\n\n  setOrCreatePropMap({\n    category: component,\n    id: `clerk-${component}-${safeId}`,\n    props,\n  });\n})();<\/script>"], ["", "<div", "></div> <script>(function(){", "\n  /**\n   * Store the id and the props for the Astro component in order to mount the correct UI component once clerk is loaded.\n   * The above is handled by \\`mountAllClerkAstroJSComponents\\`.\n   */\n  const setOrCreatePropMap = ({ category, id, props }) => {\n    if (!window.__astro_clerk_component_props) {\n      window.__astro_clerk_component_props = new Map();\n    }\n\n    if (!window.__astro_clerk_component_props.has(category)) {\n      const _ = new Map();\n      _.set(id, props);\n      window.__astro_clerk_component_props.set(category, _);\n    }\n\n    window.__astro_clerk_component_props.get(category)?.set(id, props);\n  };\n\n  setOrCreatePropMap({\n    category: component,\n    id: \\`clerk-\\${component}-\\${safeId}\\`,\n    props,\n  });\n})();<\/script>"])), maybeRenderHead(), addAttribute(`clerk-${component}-${safeId}`, "data-clerk-id"), defineScriptVars({ props, component, safeId }));
}, "/Users/john/dev/decimal.business/memberwww.decimal.business/node_modules/@clerk/astro/components/interactive/InternalUIComponentRenderer.astro", void 0);
const $$Astro$6 = createAstro("https://example.com");
const $$UserButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$UserButton;
  return renderTemplate`${renderComponent($$result, "InternalUIComponentRenderer", $$InternalUIComponentRenderer, { ...Astro2.props, "component": "user-button" })} ${renderSlot($$result, $$slots["default"])}`;
}, "/Users/john/dev/decimal.business/memberwww.decimal.business/node_modules/@clerk/astro/components/interactive/UserButton/UserButton.astro", void 0);
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$5 = createAstro("https://example.com");
const $$MenuItemRenderer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$MenuItemRenderer;
  const { label, href, open, clickIdentifier, parent } = Astro2.props;
  let labelIcon = "";
  if (Astro2.slots.has("label-icon")) {
    labelIcon = await Astro2.slots.render("label-icon");
  }
  const isDevMode = false;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<script>(function(){", "\nconst parentElement = document.currentScript.parentElement;\n\n// We used a web component in the `<UserButton.MenuItems>` component.\nconst hasParentMenuItem = parentElement.tagName.toLowerCase() === 'clerk-user-button-menu-items';\nif (!hasParentMenuItem) {\n  if (isDevMode) {\n    throw new Error(\n      `Clerk: <UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored.`\n    );\n  }\n  return\n}\n\n// Get the user button map from window that we set in the `<InternalUIComponentRenderer />`.\nconst userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\nlet userButton\nif (parent) {\n  userButton = document.querySelector(`[data-clerk-id=\"clerk-user-button-${parent}\"]`);\n} else {\n  userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n}\n\nconst safeId = userButton.getAttribute('data-clerk-id');\nconst currentOptions = userButtonComponentMap.get(safeId);\n\nconst reorderItemsLabels = ['manageAccount', 'signOut'];\nconst isReorderItem = reorderItemsLabels.includes(label);\n\nlet newMenuItem = {\n  label,\n}\n\nif (!isReorderItem) {\n  newMenuItem = {\n    ...newMenuItem,\n    mountIcon: (el) => {\n      el.innerHTML = labelIcon\n    },\n    unmountIcon: () => { /* What to clean up? */}\n  }\n\n  if (href) {\n    newMenuItem.href = href;\n  } else if (open) {\n    newMenuItem.open = open.startsWith('/') ? open : `/${open}`;\n  } else if (clickIdentifier) {\n    const clickEvent = new CustomEvent('clerk:menu-item-click', { detail: clickIdentifier });\n    newMenuItem.onClick = () => {\n      document.dispatchEvent(clickEvent);\n    }\n  }\n}\n\nuserButtonComponentMap.set(safeId, {\n  ...currentOptions,\n  customMenuItems: [\n    ...(currentOptions?.customMenuItems ?? []),\n    newMenuItem,\n  ]\n})\n})();<\/script>"], ["<script>(function(){", "\nconst parentElement = document.currentScript.parentElement;\n\n// We used a web component in the \\`<UserButton.MenuItems>\\` component.\nconst hasParentMenuItem = parentElement.tagName.toLowerCase() === 'clerk-user-button-menu-items';\nif (!hasParentMenuItem) {\n  if (isDevMode) {\n    throw new Error(\n      \\`Clerk: <UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored.\\`\n    );\n  }\n  return\n}\n\n// Get the user button map from window that we set in the \\`<InternalUIComponentRenderer />\\`.\nconst userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\nlet userButton\nif (parent) {\n  userButton = document.querySelector(\\`[data-clerk-id=\"clerk-user-button-\\${parent}\"]\\`);\n} else {\n  userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n}\n\nconst safeId = userButton.getAttribute('data-clerk-id');\nconst currentOptions = userButtonComponentMap.get(safeId);\n\nconst reorderItemsLabels = ['manageAccount', 'signOut'];\nconst isReorderItem = reorderItemsLabels.includes(label);\n\nlet newMenuItem = {\n  label,\n}\n\nif (!isReorderItem) {\n  newMenuItem = {\n    ...newMenuItem,\n    mountIcon: (el) => {\n      el.innerHTML = labelIcon\n    },\n    unmountIcon: () => { /* What to clean up? */}\n  }\n\n  if (href) {\n    newMenuItem.href = href;\n  } else if (open) {\n    newMenuItem.open = open.startsWith('/') ? open : \\`/\\${open}\\`;\n  } else if (clickIdentifier) {\n    const clickEvent = new CustomEvent('clerk:menu-item-click', { detail: clickIdentifier });\n    newMenuItem.onClick = () => {\n      document.dispatchEvent(clickEvent);\n    }\n  }\n}\n\nuserButtonComponentMap.set(safeId, {\n  ...currentOptions,\n  customMenuItems: [\n    ...(currentOptions?.customMenuItems ?? []),\n    newMenuItem,\n  ]\n})\n})();<\/script>"])), defineScriptVars({ label, href, open, clickIdentifier, labelIcon, isDevMode, parent }));
}, "/Users/john/dev/decimal.business/memberwww.decimal.business/node_modules/@clerk/astro/components/interactive/UserButton/MenuItemRenderer.astro", void 0);
const $$Astro$4 = createAstro("https://example.com");
const $$UserButtonLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$UserButtonLink;
  const { label, href, parent } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MenuItemRenderer", $$MenuItemRenderer, { "label": label, "href": href, "parent": parent }, { "label-icon": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["label-icon"])}` })}`;
}, "/Users/john/dev/decimal.business/memberwww.decimal.business/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonLink.astro", void 0);
const $$Astro$3 = createAstro("https://example.com");
const $$UserButtonAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$UserButtonAction;
  const { label, open, clickIdentifier, parent } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MenuItemRenderer", $$MenuItemRenderer, { "label": label, "open": open, "clickIdentifier": clickIdentifier, "parent": parent }, { "label-icon": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["label-icon"])}` })}`;
}, "/Users/john/dev/decimal.business/memberwww.decimal.business/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonAction.astro", void 0);
const $$UserButtonMenuItems = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "clerk-user-button-menu-items", "clerk-user-button-menu-items", {}, { "default": () => renderTemplate` ${renderSlot($$result, $$slots["default"])} ` })} `;
}, "/Users/john/dev/decimal.business/memberwww.decimal.business/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro", void 0);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://example.com");
const $$UserButtonUserProfilePage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$UserButtonUserProfilePage;
  const { url, label, parent } = Astro2.props;
  let labelIcon = "";
  let content = "";
  if (Astro2.slots.has("label-icon")) {
    labelIcon = await Astro2.slots.render("label-icon");
  }
  if (Astro2.slots.has("default")) {
    content = await Astro2.slots.render("default");
  }
  return renderTemplate(_a || (_a = __template(["<script>(function(){", "\n// Get the user button map from window that we set in the `<InternalUIComponentRenderer />`.\nconst userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\nlet userButton\nif (parent) {\n  userButton = document.querySelector(`[data-clerk-id=\"clerk-user-button-${parent}\"]`);\n} else {\n  userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n}\n\nconst safeId = userButton.getAttribute('data-clerk-id');\nconst currentOptions = userButtonComponentMap.get(safeId);\n\nconst newCustomPage = {\n  label,\n  url,\n  mountIcon: (el) => {\n    el.innerHTML = labelIcon\n  },\n  unmountIcon: () => { /* What to clean up? */},\n  mount: (el) => {\n    el.innerHTML = content\n  },\n  unmount: () => { /* What to clean up? */},\n}\n\nuserButtonComponentMap.set(safeId, {\n  ...currentOptions,\n  userProfileProps: {\n    customPages: [\n      ...(currentOptions?.userProfileProps?.customPages ?? []),\n      newCustomPage,\n    ]\n  }\n})\n})();<\/script>"], ["<script>(function(){", "\n// Get the user button map from window that we set in the \\`<InternalUIComponentRenderer />\\`.\nconst userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\nlet userButton\nif (parent) {\n  userButton = document.querySelector(\\`[data-clerk-id=\"clerk-user-button-\\${parent}\"]\\`);\n} else {\n  userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n}\n\nconst safeId = userButton.getAttribute('data-clerk-id');\nconst currentOptions = userButtonComponentMap.get(safeId);\n\nconst newCustomPage = {\n  label,\n  url,\n  mountIcon: (el) => {\n    el.innerHTML = labelIcon\n  },\n  unmountIcon: () => { /* What to clean up? */},\n  mount: (el) => {\n    el.innerHTML = content\n  },\n  unmount: () => { /* What to clean up? */},\n}\n\nuserButtonComponentMap.set(safeId, {\n  ...currentOptions,\n  userProfileProps: {\n    customPages: [\n      ...(currentOptions?.userProfileProps?.customPages ?? []),\n      newCustomPage,\n    ]\n  }\n})\n})();<\/script>"])), defineScriptVars({ url, label, content, labelIcon, parent }));
}, "/Users/john/dev/decimal.business/memberwww.decimal.business/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonUserProfilePage.astro", void 0);
const UserButton = Object.assign($$UserButton, {
  MenuItems: $$UserButtonMenuItems,
  Link: $$UserButtonLink,
  Action: $$UserButtonAction,
  UserProfilePage: $$UserButtonUserProfilePage
});
const $$Astro$1 = createAstro("https://example.com");
const $$SiteLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SiteLayout;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderHead()}</head> <body> <header> <h1>title</h1> <nav> ${renderComponent($$result, "SignedOut", $$SignedOut, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SignInButton", $$SignInButton, { "mode": "modal" })} ` })} ${renderComponent($$result, "SignedIn", $$SignedIn, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "UserButton", UserButton, {})} ` })} </nav> </header> <article> ${renderSlot($$result, $$slots["default"])} </article> </body></html>`;
}, "/Users/john/dev/decimal.business/memberwww.decimal.business/src/layouts/SiteLayout.astro", void 0);
const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "SiteLayout", $$SiteLayout, { "title": "Clerk + Astro" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Sign in to try Clerk out!</p> ` })}`;
}, "/Users/john/dev/decimal.business/memberwww.decimal.business/src/pages/index.astro", void 0);
const $$file = "/Users/john/dev/decimal.business/memberwww.decimal.business/src/pages/index.astro";
const $$url = "";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
