<script>
  import { onMount, tick } from 'svelte';
  import { htmlCode, cssCode, jsCode, width, height } from '../store.js';

  let iframe;

  onMount(() => {
    htmlCode.subscribe(() => updateIframe());
    cssCode.subscribe(() => updateIframe());
    jsCode.subscribe(() => updateIframe());
    width.subscribe(() => updateIframe());
    height.subscribe(() => updateIframe());
  });

  async function updateIframe() {
    console.log('Updating iframe..., width:', $width, 'height:', $height);
  await tick();
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${$width}" height="${$height}">
      <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <style>${$cssCode}</style>
          ${$htmlCode}
          <script type="text/javascript">
            <![CDATA[
             setTimeout(function() {
            ${$jsCode}
            }, 200);
            ]]><\/script>
        </div>
      </foreignObject>
    </svg>
  `;
  console.log('SVG:', svg);
  const blob = new Blob([svg], {type: 'image/svg+xml'});
  const url = URL.createObjectURL(blob);
  
  if (iframe) {
    iframe.src = url;
  }
}
</script>

<iframe title="Preview" bind:this={iframe} style="width: {$width}; height: {$height};"></iframe>

<style>
  iframe {
    border: 1px solid #ccc;
  }
</style>
