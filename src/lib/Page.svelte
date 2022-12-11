<script>
// @ts-nocheck

  import { onMount, getContext } from "svelte";
  import Color from "../helper/hextorgb";

    let content;
    let theme = getContext('theme');
    export let direction = "row";
    export let id;
    $: {
        if (content) {
            const titles = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
            Array.from(titles).forEach(val => {
                val.style.backgroundImage = `linear-gradient(${$theme.color}, #161616)`
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