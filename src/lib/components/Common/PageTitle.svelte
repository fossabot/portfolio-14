<script>
	export let pageTitle = 'pageTitle';
	// export let decoImageUrl = '';

	import Wall from '$lib/assets/images/common/wall.jpg';

	export let decoImageUrl = Wall;
</script>

<div class="full-width title">
	<img alt="title deco" class="title__bg" src={decoImageUrl} />
	<h1 class="text-3xl title__text tracking-in-expand">{pageTitle}</h1>
	<div class="title__deco" />
</div>

<style>
	.title {
		position: relative;
		/* FLEX */
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: var(--spaceS);
		/*  */

		margin-bottom: var(--space2XL);

		padding-top: var(--spaceM);
		padding-bottom: var(--spaceM);
		overflow: hidden;
		height: 300px;
	}

	.title::after {
		pointer-events: none;
		content: '';
		position: absolute;
		inset: 0;
		background: var(--smooth-border);
		z-index: 4;
	}

	.title__bg {
		content: '';
		position: absolute;
		top: 0;
		left: 0;

		z-index: -1;

		width: 100%;
		height: 100%;

		object-fit: cover;
		animation: pageTitleAni 50s linear;
		filter: grayscale() brightness(0.3);

		object-position: top;
	}

	:global([color-scheme='light'] .title__bg) {
		filter: grayscale() invert();
		opacity: 0.2;
	}

	@keyframes pageTitleAni {
		0% {
			object-position: top;
		}
		50% {
			object-position: bottom;
		}
		100% {
			object-position: top;
		}
	}

	.title__text {
		font-family: var(--fontFancy);
		color: var(--colorText);
		z-index: 2;
		position: relative;
		filter: drop-shadow(0px 0px 2px currentcolor);
	}

	.title__deco {
		position: absolute;
		bottom: 0;
		left: 0;
		display: block;
		content: '';
		height: 40px;
		width: 100%;
		background-image: url(/images/spark.svg);
		background-repeat: repeat-x;
	}

	:global([color-scheme='light'] .title__deco) {
		filter: invert();
	}

	.tracking-in-expand {
		animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
	}

	@keyframes tracking-in-expand {
		0% {
			letter-spacing: -0.5em;
			opacity: 0;
		}
		40% {
			opacity: 0.6;
		}
		100% {
			opacity: 1;
		}
	}
</style>
