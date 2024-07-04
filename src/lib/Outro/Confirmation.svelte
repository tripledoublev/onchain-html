<script>
    import { account, intro } from '../../store';

    function premintMore() {
        intro.set(0);
    }
</script>
  

    <div>
      <h2>Submission report:</h2>
      <p>Thank you for using our premint tool!</p>
      <p>
        <a href="https://zora.co/{$account.address}">Check your profile</a>, maybe you'll find the NFT there.<br>Alternatively, you can <button on:click={premintMore}>premint some more</button>.
      </p>
    </div>
  