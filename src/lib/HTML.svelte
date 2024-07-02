<script>
  import { AceEditor } from 'svelte-ace';
  import { writable } from 'svelte/store';
  import 'brace/mode/html';
  import 'brace/theme/chaos';

  import { htmlCode, width, height } from '../store.js';

  function updateCode(event) {
    console.log(event.detail);
    $htmlCode = event.detail;
  }
</script>

<AceEditor
on:change={updateCode}
on:input={updateCode}
width={$width}
height={$height}
  lang="html"
  theme="chaos"
  value={$htmlCode}
/>
