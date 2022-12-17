<script>
    export let item;
    export let active = false;

    export let to;
    export let key;
    let set = () => to(key);
</script>

<li 
    on:keydown={set}
    on:click={set} 
    on:keypress={set}

    class:active
    style:color={active ? item.color : ""}
    >
    {item.title}
    <div class="background" style:background-color={item.color}></div>
</li>

<style>
    li {
        list-style: none;
        margin: 5px;
        padding: 3px 9px;
        color: #747474;
        border-radius: 7px;
        position: relative;
        font-size: .8rem;
    }

    li.active {
        font-weight: bold;
    }

    li.active .background {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        opacity: .3;
        left: 0;
        border-radius: 4px;
    }

    li:hover {
        cursor: pointer;
    }
</style>