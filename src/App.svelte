<script>
  import Header from "./lib/Header.svelte";
  import Cover from "./lib/Cover.svelte";

  const colors = ["#63ADF2", '#F2E463', "#66F263", "#D282A6"];
  let theme = "";

  const setTheme = (color) => {
    theme = color;
  }
</script>
  <div id="app-container">
    <Header {...{colors, setTheme}}></Header>
    <div id="content-body">
        <div class="conntainer">
          <Cover src="./public/profile.jpg" />
        </div>
    </div>
    <div id="content-footer"></div>
  </div>

<style>
  #app-container {
    padding: 20px;
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

  .container {
    
  }

</style>