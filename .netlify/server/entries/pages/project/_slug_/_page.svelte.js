import { c as create_ssr_component, h as escape, v as validate_component, m as missing_component } from "../../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".date.svelte-1pv09w9{font-weight:300}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>${escape(data.title)}</title>`, ""}`, ""}

<article><h1 class="${"large-text"}">${escape(data.title)}</h1>
	<span class="${"small-text date svelte-1pv09w9"}">Published: ${escape(data.date)}</span>
	${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}
</article>`;
});
export {
  Page as default
};
