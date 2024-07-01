<script>
    import { AceEditor } from 'svelte-ace';
    import { writable } from 'svelte/store';
    import 'brace/mode/css';
    import 'brace/theme/chaos';
  
    import { cssCode, width, height } from '../store.js';
  
    function updateCode(event) {
      console.log(event.detail);
      $cssCode = event.detail;
    }
  </script>
  
  <AceEditor
    on:change={updateCode}
    on:input={updateCode}
    width={$width}
    height={$height}
    lang="css"
    theme="chaos"
    value={$cssCode}
  />
  