<script>
    import { width, height } from '../store.js';
    
    let slider = 400;

    console.log($width);
    $: console.log(slider);

    $: slider, $width = slider.toString() + 'px';
    $: slider, $height = slider.toString() + 'px';
</script>

<div class="slidecontainer w-100">
  <h3> Want bigger or smaller windows? What you see is wha you get!</h3>
    <p>The slider below will change the size of the window and the token.</p>
 

</div>
<input type="range" min="50" max="567" bind:value={slider} class="slider w-100" id="myRange"> 
<p>{slider}px</p>

  <style>
    .slidecontainer {
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
p {
    margin-left: 1rem;
}
  </style>