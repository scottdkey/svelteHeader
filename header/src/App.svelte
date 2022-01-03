<script lang="ts">
  import Header from "./Components/Header/Header.svelte";
  import CTAWithModal from "./Components/CTAwithModal.svelte";
  import CTA from "./Components/CTA.svelte";

  const onClick = () => {
    window.addToCart();
  };
</script>

<!-- <Header/>-->
<!--  <CTA />-->
<CTAWithModal />

<!-- <div>Hello from Svelte</div> -->
<!--<button on:click={onClick}>Add to cart!</button> -->
