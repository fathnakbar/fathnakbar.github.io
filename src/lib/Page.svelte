<script>
// @ts-nocheck

// Check the id with and use if statement to mount the div content not page-id

  import { onMount, getContext } from "svelte";
  import { fade } from "svelte/transition";
  import Color from "../helper/hextorgb";

    let content;
    let theme = getContext('theme');
    export let direction = "row";
    export let id;
    $: {
        if (content) {
            const titles = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
            Array.from(titles).forEach(val => {
                val.style.backgroundImage = `linear-gradient(${$theme.color}, ${Color($theme.color).a(.3)})`
            })
        }
    }
</script>

<div bind:this={content} style:flex-direction={direction} page-id={id}>
    <slot></slot>
</div>

<style>
    div {
        font-family: 'Ubuntu', sans-serif;
        display: flex;
    }

    :global(h1, h2, h3, h4, h5, h6) {
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>