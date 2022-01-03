<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let isOpenModal;

  function closeModal() {
    isOpenModal = false;
    dispatch("closeModal", { isOpenModal });
  }
</script>

<div
  id="background"
  style="--display: {isOpenModal ? 'block' : 'none'};"
  on:click={closeModal}
/>
<div id="modal" style="--display: {isOpenModal ? 'block' : 'none'};">
  <slot />
</div>

<style>
  #background {
    display: var(--display);
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 0, 0);
    opacity: 0.5;
  }

  #modal {
    display: var(--display);
    position: fixed;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    opacity: 1;
    border-radius: 6px;
    padding: 8px 8px 0px 8px;
  }
</style>
