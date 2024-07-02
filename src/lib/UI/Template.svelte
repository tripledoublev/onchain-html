<script>
import { htmlCode, cssCode, title, description, width, height } from '../../store.js';
import { onMount } from 'svelte';


let newHtml = `

    
    <title>${$title}</title>
    <meta 
        name="description" 
        content="${$description}."
    />
    <main>
     <div>
         <div>
             <div>
                 <div>
                     <div>
                         <div>
                             <div>
                                 <div>
                                     <div>
                                         <div>
                                             <div>
                                                 <div>
                                                         <div>
                                     <div>
                                         <div>
                                             <div>
                                                 <div>
                                                        <div>
                                     <div>
                                         <div>
                                             <div>
                                                 <div>
                                                          <div>
                                     <div>
                                         <div>
                                             <div>
                                                 <div>
                                                         <div>
                                     <div>
                                         <div>
                                             <div>
                                                 <div>
                                                          <div>
                                     <div>
                                         <div>
                                             <div>
                                                 <div>
                                                        <div>
                                     <div>
                                         <div>
                                             <div>
                                                 <div>
                                                         <div>
                                     <div>
                                         <div>
                                             <div>
                                                 <div>
                                                        <div>
                                     <div>
                                         <div>
                                             <div>
                                                 <div>
                                                          <div>
                                     <div>
                                         <div>
                                             <div>
                                                 <div>
                                                          <div>
                                     <div>
                                         <div>
                                             <div>
                                                 <div>
                                                          <div>
                                     <div>
                                         <div>
                                             <div>
                                                 <div>
                                                     
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>  
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div> 
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>  
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div> 
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>  
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div> 
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
    </main>`;


    let newCss = `
     main {
         background-color: #141414;
         height: 400px;
         width: 400px;
         display: flex;
         justify-content: center;
     }
          div * {
         padding: 2px;
         border: 1px solid red;
     }
     `;

    function rectangles() {
        htmlCode.set(newHtml);
        cssCode.set(newCss);
    }
</script>

<button on:click={rectangles}>rectangles</button>