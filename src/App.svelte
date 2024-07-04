<script>
  import HTML from './lib/HTML.svelte';
  import CSS from './lib/CSS.svelte';
  import JAVASCRIPT from './lib/JAVASCRIPT.svelte';
  import Preview from './lib/Preview.svelte';
  import Slider from './lib/Slider.svelte';
  import Title from './lib/Intro/Title.svelte';
  import Description from './lib/Intro/Description.svelte';
  import Intro from './lib/Intro/Intro.svelte';
  import Wallet from './lib/Wallet.svelte';
  import Template from './lib/UI/Template.svelte';
  import Confirmation from './lib/Outro/Confirmation.svelte';
  import Error from './lib/Outro/Error.svelte';
  import Sign from './lib/Sign.svelte';
  import Params from './lib/UI/Params.svelte';

  import { onMount } from 'svelte';

  // go straight to code editor if URL params are present
  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has('data')) {
      intro.set(3);
    }
  });

  import { account, intro } from './store.js';
  
$: console.log('Intro:', $intro);
</script>

<main>
{#if $intro === 0}
<section>
  <Intro />
</section>
{:else if $intro === 1}
<section>
  <Title />
</section>
{:else if $intro === 2}
<section>
  <Description />
</section>
{:else if $intro === 3}
  <section>
    <h2>HTML</h2>
    <HTML />
  </section>
  <section>
    <h2>CSS</h2>
    <CSS/>
  </section>
  <section>
    <h2>JavaScript</h2>
    <JAVASCRIPT />
  </section>
  <section>
    <h2>Preview</h2>
    <Preview />
  </section>
  <div class='prefoot'>
  <section>
  {#if $account.status === 'connected'}
  <Sign />
  {:else if $account.status === 'disconnected'}
  <Wallet />
  {/if}
</section>
<section> 
  <Params />
</section>
<section>
  <Slider />

  <h3>Don't like text-based aesthetics?</h3>
  Try this template for inspiration:
  <Template />

</section>
</div>
{:else if $intro === 4}
<section>  
  <Confirmation />
</section>
{:else if $intro === 5}
<section>
  <Error />
</section>
{/if}



</main>

<style>
  main {
    display: flex;
    flex-wrap: wrap;    
    width: 90vw;
    margin-left: 1rem;
  }
  section {
    margin: 5px;
    padding: 5px;
    margin-bottom: 20px;
  }
  h2 {
    margin-bottom: 2px;
  }
  .prefoot {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    flex-basis: 100%;
  }
</style>
