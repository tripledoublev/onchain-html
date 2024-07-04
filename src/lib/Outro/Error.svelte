<script>
    import { intro } from '../../store';

    function tryAgain() {
        intro.set(3);
    }
</script>
    <div>
      <h2>Error Occurred</h2>
      <p>There was an error during the signing or submission process. Please 
        <button on:click={tryAgain}>try again.</button></p>
    </div>
  