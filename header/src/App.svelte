<script lang="ts">
  import Header from "./Header.svelte"

    const onClick = () => {
    window.addToCart()
  }
</script>

<Header/>
<div>Hello from Svelte</div>
<button on:click={onClick}>Add to cart!</button>
