<script lang="ts">
  import Modal from "./Modal.svelte";

  let isOpenModal = false;

  function openModal() {
    isOpenModal = true;
  }

  function closeModal() {
    isOpenModal = false;
    phase = 0;
  }

  let phase = 0;

  function nextPhase() {
    phase += 1;
  }
</script>

<button>
  <div id="buttonContent" on:click={openModal}>Upgrade and save 33%</div>
</button>
<Modal {isOpenModal} on:closeModal={closeModal}>
  {#if phase === 0}
    <div on:click={nextPhase}>Upgrade Now</div>
  {:else if phase === 1}
    <div on:click={nextPhase}>Upgrade to Premium/ Upgrade to Standard</div>
  {:else if phase === 2}
    <div on:click={closeModal}>
      Thank you! Welcome to the next level.(loading area)
    </div>
  {:else}
    <div>you got an error bud</div>
  {/if}
</Modal>

<style lang="scss">
  button {
    width: 198px;
    height: 40px;
    border-radius: 3px;
    padding: 10px 12px 10px 12px;
    background: #0074ab;
    &:hover {
      filter: brightness(95%);
    }
    border: none;

    #buttonContent {
      font-family: "PS TT Commons", "Times New Roman", Times, serif;
      font-style: DemiBold;
      font-size: 16px;
      color: #ffffff;
      vertical-align: center;
      align-self: center;
      font-style: DemiBold;
      letter-spacing: 1%;
      fill: solid;
    }
  }
</style>
