<style>
  header {
    background: lightblue;
    padding: 2em;
    font-size: xx-large;
    display: grid;
    grid-template-columns: 90% 10%;
  }
</style>
<script>
  let count = 0;

  window.addToCart = () => {
    count += 1;
  }
</script>
<svelte:window/>
<header>
  <div>My Svelte Header III</div>
  <div>{count}</div>
</header>