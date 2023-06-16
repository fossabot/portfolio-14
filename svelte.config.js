import adapter from '@sveltejs/adapter-netlify';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import remarkUnwrapImages from 'remark-unwrap-images';
import sequence from 'svelte-sequential-preprocessor';
import remarkGfm from 'remark-gfm';
import rehypeWidont from 'rehype-widont';
import remarkSectionize from 'remark-sectionize';

// torch_eYAF6gD0idBcJcmEPVyxVRVmuAHTrcP9mV8s7vTl

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sequence([
		sveltePreprocess({
			postcss: true
		}),
		mdsvex({
			extensions: ['.svelte.md', '.md', '.svx'],
			remarkPlugins: [remarkUnwrapImages, remarkGfm, remarkSectionize],
			rehypePlugins: [
				rehypeSlug,
				[
					rehypeExternalLinks,
					{ rel: ['nofollow', 'noopener', 'noreferrer', 'external'], target: '_blank' }
				],
				[rehypeAutolinkHeadings, { behavior: 'wrap' }],
				rehypeWidont
			]
		})
	]),
	extensions: ['.svelte', '.svx'],
	kit: {
		adapter: adapter({ edge: true }),
		prerender: {
			crawl: true,
			handleHttpError: 'warn',
			entries: ['*']
		},

		alias: {
			$blogImages: 'src/lib/assets/images/blog',
			$components: 'src/lib/components'
		},
		csp: {
			mode: 'hash',
			directives: {
				'script-src': ['self', 'unsafe-inline', 'https://www.googletagmanager.com'],
				'img-src': ['self', 'www.googletagmanager.com']
			}
		}
	},

	vitePlugin: {
		inspector: {
			inspector: true,
			toggleKeyCombo: 'meta-shift',
			holdMode: true,
			showToggleButton: 'always',
			toggleButtonPos: 'bottom-right'
		}
	}
};

export default config;
