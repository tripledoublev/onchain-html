<script>
    import { onMount } from 'svelte';
    import { get } from 'svelte/store';
    import { encodeParams, decodeParams, updateStoresFromParams } from '../utils';
    import { htmlCode, cssCode, jsCode } from '../../store';
    import { writable } from 'svelte/store';

    const buttonText = writable('Generate Shareable URL');
  
    // Function to generate URL with base64 encoded content
    function generateUrl() {
      const html = get(htmlCode);
      const css = get(cssCode);
      const js = get(jsCode);
  
      const params = { html, css, js };
      const encodedParams = encodeParams(params);
      if (encodedParams) {
        const newUrl = `${window.location.origin}${window.location.pathname}?data=${encodedParams}`;
  
        // Update the URL without reloading the page
        window.history.pushState({}, '', newUrl);
         // Copy the URL to the clipboard
      navigator.clipboard.writeText(newUrl).then(() => {
        // Change button text to "URL copied to clipboard"
        buttonText.set('URL copied to clipboard');

        // Change button text back to "Generate Shareable URL" after 5 seconds
        setTimeout(() => {
          buttonText.set('Generate Shareable URL');
        }, 5000);
      });
      }
    }
  
    // Check for URL params on mount and update stores if present
    onMount(() => {
      const params = new URLSearchParams(window.location.search);
      if (params.has('data')) {
        const encodedData = params.get('data');
        const decodedParams = decodeParams(encodedData);
        if (decodedParams) {
          updateStoresFromParams(decodedParams, { htmlCode, cssCode, jsCode });
        }
      }
    });
  </script>
  
  <button on:click={generateUrl}>{$buttonText}</button>
  