import { _ as __variableDynamicImportRuntimeHelper } from '../../../../chunks/dynamic-import-helper.js';
async function load({ params }) {
	const post = await __variableDynamicImportRuntimeHelper(
		/* @__PURE__ */ Object.assign({
			'../6c.svx': () => import('../../../../chunks/6c.js'),
			'../ai-tools.svx': () => import('../../../../chunks/ai-tools.js'),
			'../atomic-habits.svx': () => import('../../../../chunks/atomic-habits.js'),
			'../best-ux-books.svx': () => import('../../../../chunks/best-ux-books.js'),
			'../calculate-typography-values.svx': () =>
				import('../../../../chunks/calculate-typography-values.js'),
			'../case-study.svx': () => import('../../../../chunks/case-study.js'),
			'../color-scheme.svx': () => import('../../../../chunks/color-scheme.js'),
			'../dont-use-pure-black-and-white.svx': () =>
				import('../../../../chunks/dont-use-pure-black-and-white.js'),
			'../figma-plugins.svx': () => import('../../../../chunks/figma-plugins.js'),
			'../fluency.svx': () => import('../../../../chunks/fluency.js'),
			'../free-3d.svx': () => import('../../../../chunks/free-3d.js'),
			'../free-colors.svx': () => import('../../../../chunks/free-colors.js'),
			'../free-fonts.svx': () => import('../../../../chunks/free-fonts.js'),
			'../free-icons.svx': () => import('../../../../chunks/free-icons.js'),
			'../free-illustrations.svx': () => import('../../../../chunks/free-illustrations.js'),
			'../free-images-videos.svx': () => import('../../../../chunks/free-images-videos.js'),
			'../free-mockups.svx': () => import('../../../../chunks/free-mockups.js'),
			'../free-music.svx': () => import('../../../../chunks/free-music.js'),
			'../free-tools.svx': () => import('../../../../chunks/free-tools.js'),
			'../gestalt.svx': () => import('../../../../chunks/gestalt.js'),
			'../grids.svx': () => import('../../../../chunks/grids.js'),
			'../how-to-ask-for-design-feedback.svx': () =>
				import('../../../../chunks/how-to-ask-for-design-feedback.js'),
			'../inspiration.svx': () => import('../../../../chunks/inspiration.js'),
			'../logo-design.svx': () => import('../../../../chunks/logo-design.js'),
			'../my-fav-colors-tool.svx': () => import('../../../../chunks/my-fav-colors-tool.js'),
			'../personal-brand.svx': () => import('../../../../chunks/personal-brand.js'),
			'../polish.svx': () => import('../../../../chunks/polish.js'),
			'../portfolio.svx': () => import('../../../../chunks/portfolio.js'),
			'../project-organization.svx': () => import('../../../../chunks/project-organization.js'),
			'../questions-to-ask-customer-before-design.svx': () =>
				import('../../../../chunks/questions-to-ask-customer-before-design.js'),
			'../resolution-pt-px.svx': () => import('../../../../chunks/resolution-pt-px.js'),
			'../resume.svx': () => import('../../../../chunks/resume.js'),
			'../shadow.svx': () => import('../../../../chunks/shadow.js'),
			'../sharp-axe-method.svx': () => import('../../../../chunks/sharp-axe-method.js'),
			'../the-art-of-thinking-clearly.svx': () =>
				import('../../../../chunks/the-art-of-thinking-clearly.js'),
			'../typescale.svx': () => import('../../../../chunks/typescale.js'),
			'../typography-impact.svx': () => import('../../../../chunks/typography-impact.js'),
			'../ui-kit.svx': () => import('../../../../chunks/ui-kit.js'),
			'../ux-guides-frameworks.svx': () => import('../../../../chunks/ux-guides-frameworks.js'),
			'../ux-vs-ui.svx': () => import('../../../../chunks/ux-vs-ui.js'),
			'../ux.svx': () => import('../../../../chunks/ux.js'),
			'../what-is-wcag.svx': () => import('../../../../chunks/what-is-wcag.js')
		}),
		`../${params.slug}.svx`
	);
	const content = post.default;
	const { title, date, categories } = post.metadata;
	return {
		content,
		title,
		date,
		categories
	};
}
export { load };
