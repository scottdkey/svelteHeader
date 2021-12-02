<script lang="ts">
  import Header from "./Header.svelte"
  import CTA from "./CTA.svelte"
  

    const onClick = () => {
    window.addToCart()
  }
</script>

 <Header/>
  <CTA />

 <div>Hello from Svelte</div>
<button on:click={onClick}>Add to cart!</button>
