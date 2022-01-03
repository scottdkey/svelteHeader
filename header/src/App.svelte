<script lang="ts">
  import Header from "./Header.svelte"
  import CTAModal from "./CTAwithModal.svelte"
  import CTA from "./CTA.svelte"
  import CTAwithModal from "./CTAwithModal.svelte";
  

    const onClick = () => {
    window.addToCart()
  }
</script>

<!-- <Header/>-->
<!--  <CTA />-->
    <CTAwithModal />

 <!-- <div>Hello from Svelte</div> -->
<!--<button on:click={onClick}>Add to cart!</button> -->
