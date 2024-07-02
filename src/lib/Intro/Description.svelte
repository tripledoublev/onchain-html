<script>
    import { htmlCode, intro, description } from '../../store';
  
    export let which = 'contract';

    let userDescription = '';
  
    const handleInput = () => {
        htmlCode.setDescription(userDescription);
    };

    const handleContinue = () => {
        intro.set(3);
        $description = userDescription;
    };
  </script>
  
  <div>
    <h2>What will be the {which}'s description?</h2>

    <table>
    <label for="description">{which} description:</label>
    <br>
    <textarea id="description" bind:value={userDescription} on:input={handleInput}></textarea>
    <button on:click={() => intro.set(3)}>Continue</button>
</table>
</div>
  <style>
    h2 {
        max-width: 32rem;
    }
    textarea {
        padding: 0.45rem;
        margin-right: 0.5rem;
        height: 6rem;
        width: 20rem;
    }
    table {
        background-color: #111111;
        padding:5rem;
        border-radius: 0.5rem;
        border: 1px solid white;
    }
  </style>