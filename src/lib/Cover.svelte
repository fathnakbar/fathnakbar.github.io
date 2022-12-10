<script>
    export let src;
    export let desc = undefined;
</script>

<div style:background-image={`url(${src})`} class="picture">
    {#if desc}
        <div class="desc">
            {desc}
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
    }
</style>