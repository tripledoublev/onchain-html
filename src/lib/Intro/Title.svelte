<script>
    import { htmlCode, intro, title } from '../../store';
  import Javascript from '../JAVASCRIPT.svelte';
  
    export let which = 'contract';
  
    let userTitle;
    const handleInput = (event) => {
        htmlCode.setTitle(userTitle);
    };

    const handleContinue = () => {
        intro.set(2);
        title.set(userTitle);
    };


  </script>
  
  <div>
    <h2>What will be the {which}'s title?</h2>
    <table>
        <label for="title">{which} title:</label>
<br>
    <input type="text" id="title" bind:value={userTitle} on:input={handleInput} />
    <button on:click={handleContinue}>Continue</button>
    </table>
   
  
</div>

<style>
    h1, h2, h3 {
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
  