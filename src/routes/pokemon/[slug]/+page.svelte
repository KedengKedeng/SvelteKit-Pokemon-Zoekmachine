<script lang="ts">
	import type { PageProps } from "../../$types";

    export const ssr = true;

    let {data}: PageProps = $props()
</script>

<div>
    <p>{data.name}</p>
    <p>{data.height}</p>
    <img height={300} width={300} src={data.image} alt={data.title} />
    <p>types:</p>
    <ul>
        {#each data.types as type}
            <li>{type.type.name}</li>
        {/each}
    </ul>
</div>