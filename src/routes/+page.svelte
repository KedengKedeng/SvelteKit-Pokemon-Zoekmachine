<script>
	import Searchbar from '$lib/components/Searchbar.svelte';
</script>

<div class="flex h-[100vh] w-full flex-col items-center justify-center">
	<h1 class="text-[70px]">Search for a pokemon:</h1>
	<Searchbar
		--font-size="70px"
		onSubmit={(value) => {
			window.location.href = `/pokemon/${value}`;
		}}
		placeholder=""
	/>
</div>
