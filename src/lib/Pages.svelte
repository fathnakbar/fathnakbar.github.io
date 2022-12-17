<script>
  import Page from "./Page.svelte";
  import Cover from "./Cover.svelte";
  import { fade, fly } from "svelte/transition";
  
  let sent = false;
  let value;
</script>

<Page direction="row" route="profile">
  <Cover
    src="./profile.jpg"
    desc="Being genius is not enough, you need to be stupid to learn something new"
  />
  <div class="container root">
    <div class="container">
      <h2>Muhammad Fathan Akbar</h2>
      <h5>Software Engineer</h5> 
    </div>
    <div class="container chat second">
      Hello there, I’m very happy to meet you here. My name is Fathan and I live in Indonesia 🇮🇩
    </div>
    {#if sent}
    <div class="container chat first" in:fly>Hi my name is {value}</div>
      <div class="container chat second">Hello {value} 👋.  Nice to meet you</div>
    {/if}
    <div class="input-container">
      <input type="text" bind:value placeholder="What should I call you?">
      {#if !sent}
        <button on:click={() => value && (sent = true)}>
          <b>Send</b>
        </button>
      {/if}
    </div>
  </div>
</Page>
<Page direction="row" route="story">
  <Cover src="./profile.jpg" desc="You need to go in a different road" />
  <div>
    <h2>Muhammad Fathan Akbar</h2>
  </div>
</Page>

<style>
  h6, h5, h4 {
    color: #747474;
    font-weight: normal;
    margin: 0;
  }

  .container{
    margin: 20px 0;
  }

  input {
    background: #1E1E1E; 
    padding: 11px;
    border-radius: 4px;
    border: none;
    color: white;
    font-size: inherit;
    flex-grow: 1;
    margin-right: 7px;
  }

  input:focus {
    outline: none;
  }

  .container.chat {
    font-size: .8rem;
    line-height: 1.5;
    display: flex;
    margin: 15px 0;
  }

  .first {
    justify-content: flex-end;
    color: #D282A6;
  }

  button {
    background-color: #63ADF2;
    color: black;
    padding: 7px;
    border-radius: 4px;
    font-size: inherit;
  }

  .input-container {
    font-size: .7rem;
    display: flex;
    margin: 20px 0;
  }

  button:hover {
    cursor: pointer;
  }

  .container.root {
    max-width: 350px;
  }
</style>
