<script>
	// ADD IMAGE
	import defaultFeaturedImage from '$lib/assets/images/seo/1344x896.png?format=png';
	import defaultOgImage from '$lib/assets/images/seo/1200x627.png?format=png';
	import defaultOgSquareImage from '$lib/assets/images/seo/400x400.png?format=png';
	import defaultTwitterImage from '$lib/assets/images/seo/800x418.png?format=png';
	//

	import website from '$lib/config.js';
	const {
		author,
		entity,
		facebookAuthorPage,
		facebookPage,
		ogLanguage,
		siteLanguage,
		siteShortTitle,
		siteTitle,
		siteUrl,
		githubPage,
		linkedinProfile,
		telegramUsername,
		tiktokUsername,
		twitterUsername
	} = website;

	import OpenGraph from '$components/SEO/OpenGraph.svelte';
	import SchemaOrg from '$components/SEO/SchemaOrg.svelte';
	import Twitter from '$components/SEO/Twitter.svelte';

	export let entityMeta = null;
	export let lastUpdated = new Date();
	export let datePublished = new Date();
	export let metadescription;
	export let slug;
	export let timeToRead = 0;
	export let title = '';

	const pageTitle = `${title} - ${siteTitle}`;
	const url = `${siteUrl}/${slug}`;

	export let article = false;
	const defaultAlt = 'cool cover image';

	export let breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		},
		{
			name: 'Project',
			slug: 'project'
		},
		{
			name: 'Blog',
			slug: 'blog'
		},
		{
			name: 'Resource',
			slug: 'resource'
		},
		{
			name: 'Contact',
			slug: 'contact'
		}
	];

	export let featuredImage = {
		url: defaultFeaturedImage,
		alt: defaultAlt,
		width: 672,
		height: 448,
		caption: 'Home page'
	};
	export let ogImage = {
		url: defaultOgImage,
		alt: defaultAlt
	};
	export let ogSquareImage = {
		url: defaultOgSquareImage,
		alt: defaultAlt
	};
	export let twitterImage = {
		url: defaultTwitterImage,
		alt: defaultAlt
	};

	const openGraphProps = {
		article,
		datePublished,
		lastUpdated,
		image: ogImage,
		squareImage: ogSquareImage,
		metadescription,
		ogLanguage,
		pageTitle,
		siteTitle,
		url,
		...(article ? { datePublished, lastUpdated, facebookPage, facebookAuthorPage } : {})
	};
	const schemaOrgProps = {
		article,
		author,
		breadcrumbs,
		datePublished,
		entity,
		lastUpdated,
		entityMeta,
		featuredImage,
		metadescription,
		siteLanguage,
		siteTitle,
		siteTitleAlt: siteShortTitle,
		siteUrl,
		title: pageTitle,
		url,
		facebookPage,
		githubPage,
		linkedinProfile,
		telegramUsername,
		tiktokUsername,
		twitterUsername
	};
	const twitterProps = {
		article,
		author,
		twitterUsername,
		image: twitterImage,
		timeToRead
	};
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metadescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<link rel="canonical" href={url} />
</svelte:head>
<Twitter {...twitterProps} />
<OpenGraph {...openGraphProps} />
<SchemaOrg {...schemaOrgProps} />
