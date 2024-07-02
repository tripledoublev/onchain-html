import { writable, derived } from 'svelte/store';
import Javascript from './lib/JAVASCRIPT.svelte';

export let intro = writable(0);
export let account = writable();
export let client = writable();
export let width = writable('400px');
export let height = writable('400px');
export let title = writable('');
export let description = writable('');

    function createHtmlCodeStore() {
        const { subscribe, set, update } = writable(`
    
    <title>HTMLNFT</title>
    <meta 
        name="description" 
        content="Insert description."
    />
    <main>
     <h1>Hello World</h1>
       <div id="container"></div>
    </main>
        `);
        
     return {
         subscribe,
         set,
         update,
         setTitle: (newTitle) => {
            update(html => {
                const titleRegex = /<title>[^<]*<\/title>/;
                return html.replace(titleRegex, `<title>${newTitle}</title>`);
            }); 
        },
        setDescription: (newDescription) => {
            update(html => {
                const metaRegex = /(<meta\s+name=["']description["']\s+content=["'])[^"']*(["'])/;
                return html.replace(metaRegex, `$1${newDescription}$2`);
            });
        }
    };
 }
 export const htmlCode = createHtmlCodeStore();

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
    .nested-div {
        border: 1px solid black;
        padding: 10px;
        margin: 5px;
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
               function getRandomColor() {
                    const letters = '0123456789ABCDEF';
                    let color = '#';
                    for (let i = 0; i < 6; i++) {
                        color += letters[Math.floor(Math.random() * 16)];
                    }
                    return color;
                }

                setTimeout(function() {
                    const mainElement = document.querySelector('main');
                    if (mainElement) {
                        const randomColor = getRandomColor();
                        console.log('Changing background color to:', randomColor);
                        mainElement.style.backgroundColor = randomColor;
                    } else {
                        console.error('Main element not found.');
                    }
                }, 2000);
    `);


// Subscribe to width and height changes
width.subscribe($width => {
     cssCode.setWithDimensions(cssCode, $width);
 });
 
 height.subscribe($height => {
     cssCode.setWithDimensions(cssCode, $height);
 });

 // Fetch and update the title
htmlCode.subscribe($html => {
    const titleMatch = $html.match(/<title>([^<]*)<\/title>/);
    if (titleMatch) {
        title.set(titleMatch[1]);
    }
    const descriptionMatch = $html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/);
    if (descriptionMatch) {
        description.set(descriptionMatch[1]);
    }
});