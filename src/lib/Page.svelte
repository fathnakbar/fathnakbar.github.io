<script>
// @ts-nocheck

// Check the id with and use if statement to mount the div content not page-id

    import { getContext } from "svelte";
    import { fly, slide, scale, draw, crossfade, fade } from "svelte/transition";
    import symbols from "../helper/symbols";
    import Color from "../helper/hextorgb";

    let content;
    export let direction = "row";
    export let route;

    let nav = getContext(symbols.router);
    

    $: {
        if (content) {
            const titles = content.querySelectorAll('h1, h2, h3');
            Array.from(titles).forEach(val => {
                val.style.backgroundImage = `linear-gradient(${$nav.color}, ${Color($nav.color).a(.3)})`
            })
        }
    }
</script>

{#if route == $nav.route}
<div bind:this={content} style:flex-direction={direction} in:fade>
    <slot></slot>
</div>
{/if}

<style>
    div {
        font-family: 'Ubuntu', sans-serif;
        display: flex;
    }

    :global(h1, h2, h3) {
        margin: 5px 0;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>