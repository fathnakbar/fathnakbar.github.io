<script>
  import { onMount } from "svelte";


    let content;
    onMount(() => {
        content.children[0].classList.add('page')
    })
</script>

<div bind:this={content} class="container">
    <slot></slot>
</div>

<style>
    .container {
        width: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>