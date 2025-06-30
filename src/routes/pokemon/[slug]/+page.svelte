<script lang="ts">
	import Searchbar from "$lib/components/Searchbar.svelte";
	import type { PageProps } from "./$types";

    export const ssr = true;

    let {data}: PageProps = $props()
</script>


<div class="p-4">
    <Searchbar --height="30px" --width="400px" onSubmit={(value) => {window.location.href = `/pokemon/${value}`}} placeholder="Enter another pokemon..." />

    <p>{data.name}</p>
    <p>{data.height}</p>
    <img height={300} width={300} src={data.image} alt={data.name} />
    <p>types:</p>
    <ul>
        {#each data.types as type}
            <li>{type.type.name}</li>
        {/each}
    </ul>
</div>