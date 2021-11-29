<script lang="ts">
  import "./Header.scss"
  let count: number = 0;

  window.addToCart = () => {
    count += 1;
  }
</script>
<svelte:window/>
<header id="main">
  <div>Svelty Svelty Header</div>
  <div id="countBox">{count}</div>
</header>