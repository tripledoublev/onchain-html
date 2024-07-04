<script>
    import { width, height } from '../store.js';
    
    let slider = 400;

    console.log($width);
    $: console.log(slider);

    $: slider, $width = slider.toString() + 'px';
    $: slider, $height = slider.toString() + 'px';
</script>

<div class="slidecontainer">
  <h3> Want bigger or smaller windows? What you see is wha you get!</h3>
    <p>The slider below will change the size of the window and the token.</p>
    <div class="slidecontainerr w-20 max-w-lg">
      <input type="range" min="50" max="567" bind:value={slider} class="slider w-50" id="myRange"> 

    <svg width={$width} height={$height} viewBox="0 0 100 100">
      <defs>
        <marker id="arrowhead" markerWidth="12" markerHeight="7" refX="0" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="white" />
        </marker>
      </defs>
      <rect x="0" y="0" width="100" height="100" fill="black" stroke="white" stroke-width="1" />
      <line x1="0" y1="100" x2="100" y2="100" stroke="white" stroke-width="1" marker-end="url(#arrowhead)"/> 
      <line x1="0" y1="0" x2="0" y2="100" stroke="white" stroke-width="1" marker-end="url(#arrowhead)"/>  
    </svg>
    </div>
</div>

<p>{slider}px</p>

  <style>
    .slidecontainer {
        display: flex;
        flex-direction: column;
      }
      .slidecontainer .slidecontainerr {
        width: 60%;
        max-width: 568px;
        align-items: center;
        display: flex;
        flex-direction: column;
      }
    .slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #04AA6D; /* Green background */
  cursor: pointer; /* Cursor on hover */
}
.slider {
  margin: 1rem;
}
p {
    margin-left: 1rem;
}
  </style>