<script>
  import { each } from "svelte/internal";


    export let colors;
    export let setTheme;

    const nav = [
        {title: "Profile"},
        {title: "The Story"},
        {title: "Achivements"},
        {title: "Articles"},
        {title: "FAQ"},
    ];

    let active = nav[0].title;

    $: {
        let act = nav.filter(val => val.title == active)[0];
        setTheme(act)
    };

    $: check = (item) => {
        return item.title == active ? item.color : ""
    }

    
    nav.forEach((val, i) => {
        nav[i].color = colors[i % colors.length];
    });
    
</script>

<div class="row-header">
    <span class="app-title">instinct.dev</span>
    <div class="page-group">
        {#each nav as item, i}
            <li class:active={active == item.title} style:color={check(item)} on:click={() => {active = item.title}}>{item.title}<div class="background" style:background-color={check(item)}></div></li>
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

    .page-group li {
        list-style: none;
        margin: 5px;
        padding: 3px 9px;
        color: #747474;
        border-radius: 7px;
        position: relative;
        font-size: .8rem;
    }

    .page-group li.active {
        font-weight: bold;
    }

    .page-group li.active .background {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        opacity: .3;
        left: 0;
        border-radius: 4px;
    }

    .page-group li:hover {
        cursor: pointer;
    }
</style>