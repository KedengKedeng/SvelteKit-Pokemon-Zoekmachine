<script lang="ts">
	import Searchbar from '$lib/components/Searchbar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex h-[100vh] w-[100vw] flex-col">
	<div class="flex h-[10vh] w-full flex-row items-center gap-12 bg-white">
		<button
			class="flex flex-row items-center"
			onclick={() => {
				window.location.href = '/';
			}}
		>
			<img src="/logo.png" alt="logo" class="h-[5vh]" />
			<p class="text-[2rem]">Pokedex</p>
		</button>

		<Searchbar
			--height="30px"
			--width="400px"
			--font-size="14px"
			onSubmit={(value) => {
				window.location.href = `/pokemon/${value}`;
			}}
			placeholder="Type here to search"
		/>
	</div>

	{@render children()}
</div>

<style>
	p {
		font-family: 'Jua', sans-serif;
	}
</style>
