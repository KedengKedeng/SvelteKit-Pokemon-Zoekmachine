<script lang="ts">
    import type { PokemonPageProps } from "$lib/types/PokemonPageProps"

    export const ssr = true;

    let {data}: PokemonPageProps = $props()
</script>

<div>
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