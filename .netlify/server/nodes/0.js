var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  component: () => component,
  file: () => file,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
module.exports = __toCommonJS(stdin_exports);
const index = 0;
const component = async () => (await Promise.resolve().then(() => __toESM(require("../entries/pages/_layout.svelte.js")))).default;
const file = "_app/immutable/components/pages/_layout.svelte-55f1e32e.js";
const imports = ["_app/immutable/components/pages/_layout.svelte-55f1e32e.js", "_app/immutable/chunks/index-b6e5fdaf.js", "_app/immutable/chunks/stores-bc1b47df.js", "_app/immutable/chunks/singletons-e9b9391c.js", "_app/immutable/chunks/index-7f48f867.js", "_app/immutable/chunks/_commonjsHelpers-e864563f.js"];
const stylesheets = ["_app/immutable/assets/_layout-1c6ec49d.css"];
