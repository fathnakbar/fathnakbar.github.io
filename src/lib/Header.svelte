<script>
    import NavButton from "./NavButton.svelte";
    import symbols from "../helper/symbols";
    import { getContext } from "svelte";

    export let nav;
    const router = getContext(symbols.router)
    
    let cursor = 0;
    $: router.set(nav[cursor]);

    const to = (i) => {
        cursor = i;
    }
</script>

<div class="row-header">
    <span class="app-title">instinct.dev</span>
    <div class="page-group">
        {#each nav as item, i}
            <NavButton active={i == cursor} key={i} {item} {to} />
        {/each}
    </div>
</div>

<style>
    .row-header{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .app-title {
        font-size: 1rem;
        font-weight: bold;
    }

    .page-group {
        display: flex;
        flex-direction: row;

    }
</style>