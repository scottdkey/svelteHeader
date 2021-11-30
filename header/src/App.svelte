<script lang="ts">
  // import Modal from "svelte-simple-modal"
  import Header from "./Header.svelte"
  import CTA from "./CTA.svelte"
  

    const onClick = () => {
    window.addToCart()
  }
</script>

<!-- <Header/> -->
<!-- <Modal> -->
  <CTA />
<!-- </Modal> -->

<!-- <div>Hello from Svelte</div>
<button on:click={onClick}>Add to cart!</button> -->
