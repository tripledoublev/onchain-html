<script>
    import { htmlCode, intro } from '../../store';
  import Javascript from '../JAVASCRIPT.svelte';
  
    export let which = 'Contract';
  
    let userTitle;
    const handleInput = (event) => {
        htmlCode.setTitle(userTitle);
    };


  </script>
  
  <div>
    <h1>onchain html summer</h1>
    <h2><i>Premint</i>: Create a contract and its first token with html</h2>
    <h3>HTML, CSS and Javascript are encoded as base64 string onchain</h3>
   
    <h3>You can <button on:click={() => intro.set(1)}>fill in the title and description </button> 
        <br>or <button on:click={() => intro.set(3)}>skip to the code editor</button></h3> 
  
</div>

<style>
    h2, h3 {
        max-width: 32rem;
    }
    input {
        padding: 0.45rem;
        margin-right: 0.5rem;
        margin-bottom:0.25rem;
    }
    table {
        background-color: #111111;
        padding:5rem;
        border-radius: 0.5rem;
        border: 1px solid white;
    }

</style>
  