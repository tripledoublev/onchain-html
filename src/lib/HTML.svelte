<script>
  import { AceEditor } from 'svelte-ace';
  import { writable } from 'svelte/store';
  import 'brace/mode/html';
  import 'brace/theme/chaos';

  import { htmlCode, width, height } from '../store.js';

  $: console.log($width);
  $: console.log($height);

  function updateCode(event) {
    console.log(event.detail);
    $htmlCode = event.detail;
  }
</script>

<AceEditor
on:selectionChange={updateCode}
on:paste={updateCode}
on:input={updateCode}
on:focus={() => console.log('focus')}
on:documentChange={(obj) => console.log(`document change : ${obj.detail}`)}
on:cut={() => console.log('cut')}
on:cursorChange={() => console.log('cursor change')}
on:copy={() => console.log('copy')}
on:init={(editor) => console.log(editor.detail)}
on:commandKey={updateCode}
on:changeMode={(obj) => console.log(`change mode : ${obj.detail}`)}
on:blur={() => console.log('blur')}
width={$width}
height={$height}
  lang="html"
  theme="chaos"
  value={$htmlCode}
/>
