<script>
  import { getContext, onMount } from "svelte";


    let content;
    let _childs;
    let theme = getContext('theme');
    $: {
        if (content) {
            _childs.forEach(el => {
                el.style.zIndex = "1"
                el.style.position = ""
            });
            let act = _childs.filter(el => !(el.getAttribute('page-id') == $theme.title))
            if (act.length > 0) {
                act[0].style.zIndex = "-99"
                act[0].style.position = "absolute"
            }

            }
    }
    onMount(() => {
        _childs = Array.from(content.children);
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