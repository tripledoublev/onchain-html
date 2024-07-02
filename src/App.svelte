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

import { account, intro } from './store.js';
  import Sign from './lib/Sign.svelte';

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
  
<section>


{#if $account.status === 'connected'}
<Sign />
{:else if $account.status === 'disconnected'}
<Wallet />
{/if} 
</section>
<section>
  <Slider />

  <h3>Don't like text-based aesthetics?</h3>
  Try this template for inspiration:
  <Template />

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
</style>
