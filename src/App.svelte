<script>
  import Header from "./lib/Header.svelte";
  import Cover from "./lib/Cover.svelte";
  import Container from "./lib/Container.svelte";
  import Page from "./lib/Page.svelte";
  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  const colors = ["#63ADF2", '#F2E463', "#66F263", "#63ADF2","#D282A6"];
  const theme = writable();
  setContext('theme', theme);
  const setTheme = (page) => {
    theme.set(page)
  }
</script>
  <div id="app-container">
    <Header {...{colors, setTheme}}></Header>
    <div id="content-body">
      <Container>

        <Page direction="row" id="Profile">
          <Cover src="./profile.jpg" desc="Being genius is not enough, you need to be stupid to learn something new"/> 
          <div>
            <h2>Muhammad Fathan Akbar</h2>
          </div>
        </Page>

        <Page direction="row" id="The Story">
          <Cover src="./profile.jpg" desc="You need to go in a different road"/> 
          <div>
            <h2>Muhammad Fathan Akbar</h2>
          </div>
        </Page>
      </Container>
    <div id="content-footer"></div>
  </div>
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

</style>