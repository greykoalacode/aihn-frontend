<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import aihn_logo from '$lib/images/aihn-logo.png';
	import IntroCardLayout from './IntroCardLayout.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="mt-4">
	<h1 class="h1 my-4">
		Introducing a fun way of reading <tt>Hacker News</tt><br />
	</h1>
	<img class="my-10" src={aihn_logo} alt="aihn_logo" />

	<a class="mb-10 p-4 text-2xl cta-button rounded-lg text-white font-bold hover:no-underline" href="/read">Get started</a>


	<IntroCardLayout />
	<!-- <h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2> -->

	<!-- <Counter /> -->
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	tt {
		background-color: #f26522;
		color: white;
		color: black;
		font-weight: bold;
		padding: 0.1em 0.2em;
	}

	.cta-button {
		background-color: #f26522;
	}

	/*.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.aihn_logo {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	} */
</style>
