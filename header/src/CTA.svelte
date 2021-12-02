<script lang="ts">
  import Modal from "./Modal.svelte";
  import UpgradeOptions from "./UpgradeOptions.svelte";
  import "./CTA.scss";

  let phase: number = 0;
  let upgradeType: string = "Premium";
  let monthly = false;

  let isOpenModal: boolean = false;

  function openModal(): void {
    phase = 0;
    isOpenModal = true;
  }

  function closeModal(): void {
    isOpenModal = false;
  }

  function nextPhase(UpgradeType: string, Monthly: boolean): void {
    phase += 1;
    upgradeType = UpgradeType;
    monthly = Monthly;
  }
</script>

<button id="upgrade">
  <div id="buttonContent" on:click={openModal}>Upgrade and save 33%</div>
</button>
<p>{upgradeType}</p>
<p>{monthly ? "Monthly" : "Yearly"}</p>
<p>Phase: {phase}</p>

<Modal {isOpenModal} on:closeModal={closeModal}>
  {#if phase === 0}
    <UpgradeOptions {nextPhase} hasStandardPlan={false} />
  {:else if phase === 1}
    <div>Upgrade to Premium/ Upgrade to Standard</div>
  {:else if phase === 2}
    <div on:click={closeModal}>
      Thank you! Welcome to the next level.(loading area)
    </div>
  {:else}
    <div>you got an error bud</div>
  {/if}
</Modal>
