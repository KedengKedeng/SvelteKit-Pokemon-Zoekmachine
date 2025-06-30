<script lang="ts">
	import Searchbar from '$lib/components/Searchbar.svelte';
	import type { PageProps } from './$types';

	export const ssr = true;

	let { data }: PageProps = $props();
</script>

<div class="p-4 bg-gray-100 w-full h-full">
	<div class="flex h-full w-1/2 flex-row gap-2">
		<div class="h-ful w-[30%] flex flex-col gap-2">
			<div
				class="bg-sage flex h-[40vh] w-full items-center justify-center overflow-hidden rounded-3xl"
			>
				<img class="w-full" src={data.image} alt={data.name} />
			</div>

            <h1 class="text-[4rem]">{data.name}</h1>
		</div>

		<div class="flex w-[40%] flex-col gap-2">
			<div class="flex flex-row gap-2 h-[8vh]">
				<div class="bg-sage flex w-full flex-col rounded-3xl p-2 justify-center">
					<p>Weight</p>
					<h1 class="text-center text-3xl opacity-50">{(data.weight / 10).toFixed(2)} kg</h1>
				</div>

				<div class="bg-apricot flex w-full flex-col rounded-3xl p-2 justify-center">
					<p>Height</p>
					<h1 class="text-center text-3xl opacity-50">{(data.height / 10).toFixed(2)} m</h1>
				</div>
			</div>

			<div class="flex flex-row gap-2 h-[8vh]">
				<div class="bg-princeton-orange flex w-full flex-col rounded-3xl p-2 justify-center">
					<p>Types</p>
					<h1 class="text-center text-3xl opacity-50">
						{data.types.map((type) => type.type.name).join(', ')}
					</h1>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	p, h1 {
		font-family: 'Jua', sans-serif;
	}
</style>
