<script lang="ts">
    interface Props {
        onSubmit: (value: string) => void;
        placeholder: string;
    }

    let props: Props = $props()
    let currentValue = $state("")
</script>

<div class="flex flex-row gap-2 items-center rounded-lg border-[1px] border-gray-300">
    <input type="text" class="w-full h-full focus:outline-none" placeholder={props.placeholder} bind:value={currentValue} onkeypress={(e) => {
        if (e.key == "Enter") props.onSubmit(currentValue)
    }}>
</div>

<style>
    div {
        width: var(--width);
        height: var(--height);
        padding: calc(var(--font-size) / 5);
    }

    input {
        font-size: var(--font-size);
        font-family: 'Jua', sans-serif;
    }
</style>

