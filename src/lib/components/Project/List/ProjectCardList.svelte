<script>
	import Button from '$components/Button/Button.svelte';
	import ProjectCard from '$lib/components/Project/Card/ProjectCard.svelte';
	import rezaSquare from '$lib/assets/images/project/rezaSquare.png';

	// linkToFigma="https://www.figma.com/file/owUrwidb8hZbdmruKhMtyS/REZA%3A-Restaurant-Reservation-App?node-id=2%3A9&t=a8W16CMSWgxzoLKB-1"

	export let hasMoreButton = false;
</script>

<div class="projects">
	<ProjectCard
		year="2022"
		projectName="Reza - Restaurant Reservation App"
		linkToDetail="project/reza"
		what="Reza is an app that lets people book restaurant tables easily."
		result="Persona, User Flow, Wireframe, Prototype"
		thumbnail={rezaSquare} />
	<!-- <ProjectCard projectName="Work in progress" linkToDetail="" what="" who="" result="" />
	<ProjectCard projectName="Work in progress" linkToDetail="" what="" who="" result="" /> -->
	{#if hasMoreButton}
		<div class="more">
			<a href="/project">
				<Button
					backgroundColor="var(--colorPrimary)"
					glowColor="var(--colorPrimary)"
					label="See all projects" />
			</a>
		</div>
	{/if}
</div>

<style>
	.more {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.more a {
		display: contents;
	}

	.projects {
		display: flex;
		flex-direction: column;
		gap: var(--spaceXL);
	}
</style>
