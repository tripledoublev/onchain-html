<script>
  import { onMount, tick } from 'svelte';
  import { writable } from 'svelte/store';
  import { htmlCode, cssCode, jsCode, width, height } from '../store.js';

  let iframe;

  onMount(() => {
    htmlCode.subscribe(() => updateIframe());
    cssCode.subscribe(() => updateIframe());
    jsCode.subscribe(() => updateIframe());
  });

  async function updateIframe() {
    await tick(); // Ensure Svelte has processed the reactivity updates
    const doc = iframe?.contentWindow?.document;
    if (doc) {
      doc.open();
      doc.write(`
        <html>
          <head>
            <style>${$cssCode}</style>
          </head>
          <body>
            ${$htmlCode}
            <script type="text/javascript">
              try {
                ${$jsCode}
              } catch(error) {
                console.error('Script Error:', error);
              }
            <\/script>
          </body>
        </html>
      `);
      doc.close();
    }
  }
</script>

<iframe title="Preview" bind:this={iframe} style="width: {$width}; height: {$height};"></iframe>

<style>
  iframe {
    border: 1px solid #ccc;
  }
</style>
