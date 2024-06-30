<script>
    import { AceEditor } from 'svelte-ace';
    import { writable } from 'svelte/store';
    import 'brace/mode/javascript';
    import 'brace/theme/chaos';
  
    import { jsCode, width, height } from '../store.js';
  
    function updateCode(event) {
      jsCode.set(event.detail);
    }
  </script>
  
  <AceEditor
    on:change={updateCode}
    on:input={updateCode}
    width={$width}
    height={$height}
    lang="javascript"
    theme="chaos"
    value={$jsCode}
  />
  