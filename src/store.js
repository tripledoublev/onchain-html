// store.js
import { writable } from 'svelte/store';
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
    
    <h1>Hello World</h1>
    
    `);
export let cssCode = writable(`
    /*

    This is the default CSS code.
    Edit this code and see the changes 
    in the preview.

    */


    body {
        overflow: hidden;
    }
    h1 { 
        width: 100%;
        color: white;
        background-color: #141414;
        font: 50px monospace;
        align-items: center;
        display: flex;
        height: 100%;
        padding-left: 20px;
        margin:0;
    }
    `);	
export let jsCode = writable(`
   
    console.log('!');

    `);


    