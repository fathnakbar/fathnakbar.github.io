<script>
  import Header from "./lib/Header.svelte";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import Pages from "./lib/Pages.svelte";
  import symbols from "./helper/symbols";

  let nav = [
  { title: 'Profile', color: '#63ADF2', route: 'profile' },
  { title: 'The Story', color: '#F2E463', route: 'story' },
  { title: 'Achivements', color: '#66F263', route: 'achivements' },
  { title: 'Articles', color: '#63ADF2', route: 'articles' },
  { title: 'FAQ', color: '#D282A6', route: 'faq' }
];


  setContext(symbols.router, writable(nav[0]))

</script>
  <div id="app-container">

    <Header {nav} ></Header>
    <div id="content-body">
      <Pages />
    </div>
    <div id="content-footer"></div>

  </div>

<style>
  #app-container {
    padding: 10px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
  }

  #content-body {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }

  :global(input, button) {
    border: none;
  }

</style>