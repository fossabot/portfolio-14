var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Page
});
module.exports = __toCommonJS(stdin_exports);
var import_chunks = require("../../chunks/index.js");
const Atropos_svelte = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_chunks.k)($$props, [
    "class",
    "scaleClass",
    "rotateClass",
    "innerClass",
    "eventsEl",
    "alwaysActive",
    "activeOffset",
    "shadowOffset",
    "shadowScale",
    "duration",
    "rotate",
    "rotateTouch",
    "rotateXMax",
    "rotateYMax",
    "rotateXInvert",
    "rotateYInvert",
    "stretchX",
    "stretchY",
    "stretchZ",
    "commonOrigin",
    "shadow",
    "highlight"
  ]);
  let { class: className = "" } = $$props;
  let { scaleClass = "" } = $$props;
  let { rotateClass = "" } = $$props;
  let { innerClass = "" } = $$props;
  let { eventsEl = void 0 } = $$props;
  let { alwaysActive = void 0 } = $$props;
  let { activeOffset = void 0 } = $$props;
  let { shadowOffset = void 0 } = $$props;
  let { shadowScale = void 0 } = $$props;
  let { duration = void 0 } = $$props;
  let { rotate = void 0 } = $$props;
  let { rotateTouch = void 0 } = $$props;
  let { rotateXMax = void 0 } = $$props;
  let { rotateYMax = void 0 } = $$props;
  let { rotateXInvert = void 0 } = $$props;
  let { rotateYInvert = void 0 } = $$props;
  let { stretchX = void 0 } = $$props;
  let { stretchY = void 0 } = $$props;
  let { stretchZ = void 0 } = $$props;
  let { commonOrigin = true } = $$props;
  let { shadow = true } = $$props;
  let { highlight = true } = $$props;
  (0, import_chunks.l)();
  let elRef = null;
  const cls = (...args) => {
    return args.filter((c) => !!c).join(" ");
  };
  (0, import_chunks.o)(() => {
  });
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.scaleClass === void 0 && $$bindings.scaleClass && scaleClass !== void 0)
    $$bindings.scaleClass(scaleClass);
  if ($$props.rotateClass === void 0 && $$bindings.rotateClass && rotateClass !== void 0)
    $$bindings.rotateClass(rotateClass);
  if ($$props.innerClass === void 0 && $$bindings.innerClass && innerClass !== void 0)
    $$bindings.innerClass(innerClass);
  if ($$props.eventsEl === void 0 && $$bindings.eventsEl && eventsEl !== void 0)
    $$bindings.eventsEl(eventsEl);
  if ($$props.alwaysActive === void 0 && $$bindings.alwaysActive && alwaysActive !== void 0)
    $$bindings.alwaysActive(alwaysActive);
  if ($$props.activeOffset === void 0 && $$bindings.activeOffset && activeOffset !== void 0)
    $$bindings.activeOffset(activeOffset);
  if ($$props.shadowOffset === void 0 && $$bindings.shadowOffset && shadowOffset !== void 0)
    $$bindings.shadowOffset(shadowOffset);
  if ($$props.shadowScale === void 0 && $$bindings.shadowScale && shadowScale !== void 0)
    $$bindings.shadowScale(shadowScale);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.rotate === void 0 && $$bindings.rotate && rotate !== void 0)
    $$bindings.rotate(rotate);
  if ($$props.rotateTouch === void 0 && $$bindings.rotateTouch && rotateTouch !== void 0)
    $$bindings.rotateTouch(rotateTouch);
  if ($$props.rotateXMax === void 0 && $$bindings.rotateXMax && rotateXMax !== void 0)
    $$bindings.rotateXMax(rotateXMax);
  if ($$props.rotateYMax === void 0 && $$bindings.rotateYMax && rotateYMax !== void 0)
    $$bindings.rotateYMax(rotateYMax);
  if ($$props.rotateXInvert === void 0 && $$bindings.rotateXInvert && rotateXInvert !== void 0)
    $$bindings.rotateXInvert(rotateXInvert);
  if ($$props.rotateYInvert === void 0 && $$bindings.rotateYInvert && rotateYInvert !== void 0)
    $$bindings.rotateYInvert(rotateYInvert);
  if ($$props.stretchX === void 0 && $$bindings.stretchX && stretchX !== void 0)
    $$bindings.stretchX(stretchX);
  if ($$props.stretchY === void 0 && $$bindings.stretchY && stretchY !== void 0)
    $$bindings.stretchY(stretchY);
  if ($$props.stretchZ === void 0 && $$bindings.stretchZ && stretchZ !== void 0)
    $$bindings.stretchZ(stretchZ);
  if ($$props.commonOrigin === void 0 && $$bindings.commonOrigin && commonOrigin !== void 0)
    $$bindings.commonOrigin(commonOrigin);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.highlight === void 0 && $$bindings.highlight && highlight !== void 0)
    $$bindings.highlight(highlight);
  return `<div${(0, import_chunks.b)(
    [
      {
        class: (0, import_chunks.p)(cls("atropos", className))
      },
      (0, import_chunks.e)($$restProps)
    ],
    {}
  )}${(0, import_chunks.f)("this", elRef, 0)}><span${(0, import_chunks.f)("class", cls("atropos-scale", scaleClass), 0)}><span${(0, import_chunks.f)("class", cls("atropos-rotate", rotateClass), 0)}><span${(0, import_chunks.f)("class", cls("atropos-inner", innerClass), 0)}>${slots.default ? slots.default({}) : ``}
        ${highlight || typeof highlight === "undefined" ? `<span class="${"atropos-highlight"}"></span>` : ``}</span>
      ${slots.rotate ? slots.rotate({}) : ``}
      ${shadow || typeof shadow === "undefined" ? `<span class="${"atropos-shadow"}"></span>` : ``}</span>
    ${slots.scale ? slots.scale({}) : ``}</span>
  ${slots.root ? slots.root({}) : ``}</div>`;
});
const Atropos = Atropos_svelte;
const Hero_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".atropos-container.svelte-v9b92{margin-bottom:2.5rem}.btn-seemywork.svelte-v9b92{background-color:var(--primary);color:var(--black)}.btn-seemywork.svelte-v9b92:hover{background-color:var(--primary-hover)}.hero.svelte-v9b92{background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\r\n			url('/images/fuji.svg');width:100%;height:600px;background-position:center;background-repeat:no-repeat;background-size:cover;display:flex;justify-content:center;align-items:center}.hero-text.svelte-v9b92{display:flex;flex-direction:column;justify-content:center;align-items:center;color:var(--white)}",
  map: null
};
const Hero = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"atropos-container svelte-v9b92"}">${(0, import_chunks.v)(Atropos, "Atropos").$$render(
    $$result,
    {
      highlight: "false",
      shadow: "false",
      rotateTouch: "scroll-y",
      rotateXMax: 5,
      rotateYMax: 5
    },
    {},
    {
      default: () => {
        return `<div class="${"hero svelte-v9b92"}"><div class="${"hero-text svelte-v9b92"}"><h1 data-atropos-offset="${"-5"}">Hi! I&#39;m Khoa</h1>
				<p data-atropos-offset="${"-3"}">I code and design.</p>
				<a data-atropos-offset="${"10"}" class="${"btn btn-seemywork svelte-v9b92"}" href="${"/project"}">See my work</a></div></div>`;
      }
    }
  )}
</div>`;
});
const fpt = "/_app/immutable/assets/fpt-b5af5518.png";
const nashtech = "/_app/immutable/assets/nashtech-c104f948.png";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".past-clients.svelte-izz2tr{width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;margin-bottom:2.5rem}.past-clients__logo.svelte-izz2tr{display:flex;justify-content:center;align-items:center;flex-direction:row}.logo.svelte-izz2tr{width:100px;height:100px;object-fit:cover;margin-left:1rem}",
  map: null
};
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Khoa&#39;s Portfolio</title>`, ""}`, ""}

${(0, import_chunks.v)(Hero, "Hero").$$render($$result, {}, {}, {})}

<div class="${"past-clients svelte-izz2tr"}"><p class="${"past-clients__text base-text svelte-izz2tr"}">I have worked for</p>
	<div class="${"past-clients__logo svelte-izz2tr"}"><img height="${"100"}" width="${"100"}" loading="${"lazy"}" decoding="${"async"}" class="${"logo svelte-izz2tr"}"${(0, import_chunks.f)("src", fpt, 0)} alt="${"FPT Software"}">
		<img height="${"100"}" width="${"100"}" loading="${"lazy"}" decoding="${"async"}" class="${"logo svelte-izz2tr"}"${(0, import_chunks.f)("src", nashtech, 0)} alt="${"NashTech"}"></div></div>



<div></div>`;
});
