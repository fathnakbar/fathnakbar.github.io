<script>
  import { getContext, onMount, tick } from "svelte";
  import symbols from "../helper/symbols";


  export let desc = undefined;
  let theme = getContext(symbols.router);
  $: color = $theme.color;
  let _desc = "<br></br>"
  export let src;
  let node;

    async function fit(){
        
        const height = node.clientHeight
        _desc = `"${desc}"`;
        let font = 18;
        let minSize = 12;

        
        await tick();
        
        while (height < node.clientHeight && font > minSize) {
            node.style.fontSize = `${--font}px`
        }
        console.log(height, node.clientHeight)
    }

    onMount(() => {
        fit();
    })
</script>

<div style:background-image={`url(${src})`} class="picture">
    {#if desc}
        <div bind:this={node}  class="desc" style:color={color}>
            {@html _desc}
            <div class="hl" style:background-color={color}></div>
            <div class="neon" style:box-shadow={`${color} 0px 0px 7px 3px`}></div>
        </div>
    {/if}
</div>


<style>
    .picture {
        background-color: #545E75;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 300px;
        width: 200px;
        position: relative;
        margin: 10px;
        margin-right: 55px;
    }

    .desc {
        z-index: 1;
        background: #262626;
        padding: 11px;
        position: absolute;
        bottom: -39px;
        left: 19px;
        width: 100%;
        box-sizing: border-box;
        font-weight: bold;
        line-height: 1.5;
    }
    .neon {
        z-index: -1;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        opacity: .3;
    }
    .hl{
        height: 2px;
        margin-top: 5px;
    }
</style>