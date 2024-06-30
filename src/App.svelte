<script>
  import HTML from './lib/HTML.svelte';
  import CSS from './lib/CSS.svelte';
  import JAVASCRIPT from './lib/JAVASCRIPT.svelte';
  import Preview from './lib/Preview.svelte';
  import Slider from './lib/Slider.svelte';
  import Mint from './lib/Mint.svelte';

import Wallet from './lib/Wallet.svelte';


import { account } from './store.js';
  import Sign from './lib/Sign.svelte';
let connected;
$: if ($account.status === 'connected') {
  //connected = true;
}
  
</script>

<Wallet />  
<main>

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
</main>
<section>

  <Sign />
{#if connected}
   <Mint />   
  <Slider />
{/if}
</section>

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
</style>
