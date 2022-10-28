import { c as create_ssr_component } from "./index.js";
/* empty css                                     */const metadata = {
  "title": "Understanding UX and UI",
  "date": "2022-09-30",
  "categories": ["fundamental"]
};
const Ux_vs_ui = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"toc"}"><ol class="${"toc-level toc-level-1"}"><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#what-does-a-ux-designer-do"}">What does a UX Designer do?</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#what-does-a-ui-designer-do"}">What does a UI Designer do?</a></li><li class="${"toc-item toc-item-h2"}"><a class="${"toc-link toc-link-h2"}" href="${"#things-to-remember"}">Things to remember</a></li></ol></nav>



<h2 id="${"what-does-a-ux-designer-do"}">What does a UX Designer do?</h2>
<p>UX Design always puts users needs first when considering design solutions in order to enhance customer satisfaction.</p>
<ul><li>Defining a problem</li>
<li>Understanding users</li>
<li>Creating personas</li>
<li>Generating tasks &amp; user flows</li>
<li>Creating sketches -&gt; wireframes -&gt; prototypes</li>
<li>Usability testing</li></ul>
<h2 id="${"what-does-a-ui-designer-do"}">What does a UI Designer do?</h2>
<p>UI Designers make products joyful to interact with. They focus on the visual hierarchy and patterns that give visual cues to users.</p>
<ul><li>Typography</li>
<li>Color scheme</li>
<li>Iconography</li>
<li>Grids, Layout, Spacing</li>
<li>Buttons, Inputs &amp; Forms</li></ul>
<h2 id="${"things-to-remember"}">Things to remember</h2>
<p>View everything that you do as <strong>PROBLEM SOLVING</strong> -&gt; Organize, Economize and Communicate.</p>
<p>Design should serve <strong>USER NEEDS</strong>. Why are they here - and what do they need to do?</p>
<p>Hierarchy is communicated <strong>VISUALLY</strong>. Visual priority = user priority.</p>
<p>Information hierarchy is mainly created by <strong>CONTRAST</strong>. Always consider contrast before color.</p>
<p>When in doubt, <strong>ALIGN EVERYTHING</strong>. Alignment creates order, flow and stability.</p>
<p>Purposefully design all <strong>NEGATIVE SPACE</strong>. Give it more attention than UI elements.</p>
<p>Primary elements should come <strong>FORWARD</strong>. Secondary elements should <strong>RECEDE</strong>. You should work to visually differentiate the two.</p>
<p>Maximize <strong>SIGNAL</strong>. Minimize <strong>NOISE</strong>. Keep visual focus on what matters most.</p>
<p>=&gt; Remember that you\u2019re solving <strong>VISUAL PROBLEMS</strong>. Focus on that; great UX will take care of itself.</p>`;
});
export {
  Ux_vs_ui as default,
  metadata
};
