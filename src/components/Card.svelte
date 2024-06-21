<script>
	import { convertToTitleCase } from './utils';

	export let gist;
</script>

<section>
	<div class="relative w-[350px] max-w-full card overflow-hidden shadow-xl">
		<header class="card-header text-2xl font-semibold">
			<p class="my-2">
				<span
					class="mr-2 text-base text-orange-500 font-bold px-2 p-1 rounded-md bg-orange-100 tracking-wider"
					>{gist.type.toUpperCase()}</span
				>
			</p>
			{gist.title}
		</header>
		<section class="p-4">
			<p class="font-bold">tl;dr</p>
			<p class="text-lg">{gist.summary}</p>
			<div class="my-2">
				<p class="font-bold">Categories</p>
				<div class="my-2">
					{#each gist.categories as category}
						<span class="mr-2 text-amber-500 font-bold px-2 p-1 rounded-md bg-amber-100"
							>{convertToTitleCase(category.name)}</span
						>
					{/each}
				</div>
			</div>
			<div class="my-2">
				<p class="font-bold">Themes</p>
				<p class="my-2">
					{#each gist.themes as theme}
						<span class="mr-2 text-rose-500 font-bold px-2 p-1 rounded-md bg-rose-100"
							>{convertToTitleCase(theme.name)}</span
						>
					{/each}
				</p>
			</div>
		</section>
		<footer class="card-footer mb-4">
			<a
				class="border bg-orange-500 mr-2 p-2 px-4 rounded-md no-underline hover:no-underline font-bold text-white"
				href={gist.url}>Full thread</a
			>
			<a
				class="border p-2 px-4 border-orange-500 no-underline hover:no-underline rounded-md"
				href={gist.storyURL}>Story URL</a
			>
		</footer>
	</div>
</section>

<style>
	.card {
		background-color: white;
	}
	/* .badge {
		background-color: #f26522;
		text-transform: uppercase;
		color: white;
	}
	.category {
	} */
</style>
