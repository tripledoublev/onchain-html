import { writable, derived } from 'svelte/store';
import Javascript from './lib/JAVASCRIPT.svelte';


export let account = writable();
export let client = writable();
export let width = writable('400px');
export let height = writable('400px');
export let title = writable('');
export let description = writable('');
export let htmlCode = writable(`

    <!-- Welcome to HTMLNFT! -->
    
    <!-- This is the default HTML code. -->
    
    <!-- You can edit this code to see 
         the changes in the preview. -->
    
    <!-- You can also edit the CSS 
         and JavaScript code. -->
    
    <!-- The title and description content below
         will be used for the NFT metadata. -->
         
    <!-- This interface is meant for you to 
         channel that HTML energy -->
         
    <!-- All the text that you see on this
         page is going onchain. -->
         
    <!-- Remove this part or scroll down
         to edit title, description
         and content -->
    
    <!-- Enjoy! -->
    




    <title>HTMLNFT</title>
    <meta 
        name="description" 
        content="Insert description."
    />
    <main>
     <h1>Hello World</h1>
    </main>

    `);

    function createCssCodeStore() {
     const { subscribe, set, update } = writable(`
     main {
         background-color: #141414;
         height: 400px;
         width: 400px;
         display: flex;
         justify-content: center;
     }
     h1 { 
         width: 100%;
         color: white;
         font: 50px monospace;
         align-items: center;
         display: flex;
         padding-left: 20px;
         margin:0;
     }
     `);
 
     return {
         subscribe,
         set,
         update,
         setWithDimensions: (newCss, newSize) => {
          update(css => {
               const mainRegex = /(main\s*{[^}]*})/;
               return css.replace(mainRegex, (match) => {
                   return match
                       .replace(/width:\s*[^;]+;/, `width: ${newSize};`)
                       .replace(/height:\s*[^;]+;/, `height: ${newSize};`);
               });
           });
     }
     };
 }
 
 export const cssCode = createCssCodeStore();

export let jsCode = writable(`
   
    console.log('!');

    `);


// Subscribe to width and height changes
width.subscribe($width => {
     cssCode.setWithDimensions(cssCode, $width);
 });
 
 height.subscribe($height => {
     cssCode.setWithDimensions(cssCode, $height);
 });