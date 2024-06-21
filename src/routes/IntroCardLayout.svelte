<script>
	import Card from "../components/Card.svelte";
	import InfiniteMovingCards from "../components/ui/InfiniteMovingCards/InfiniteMovingCards.svelte";

	const gist = {
		id: 7,
		itemId: 40702782,
		title: "How to get stuff repaired when the manufacturer don't wanna: take 'em to court",
		type: 'top',
		summary:
			'The post provides guidance on how to take legal action against manufacturers who refuse to repair products under warranty.',
		categories: [
			{
				id: 9,
				name: 'repair'
			},
			{
				id: 10,
				name: 'consumer rights'
			}
		],
		themes: [
			{
				id: 9,
				name: 'legal action'
			}
		],
		description: '',
		url: 'https://news.ycombinator.com/item?id=40702782',
		by: 'Aaronn',
		descendants: 99,
		time: 1718604890
	};
	const all_gists = new Array(3).fill(gist);
</script>

<section>
	<InfiniteMovingCards items={all_gists} direction="right" speed="slow"/>
	<!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-8">
		{#each all_gists as gist}
		<Card gist={gist} />
		{/each}
	</div> -->
</section>
