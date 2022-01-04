<script lang="ts">
  import Modal from "./CTAComponents/Modal.svelte";
  import UpgradeOptions from "./CTAComponents/UpgradeOptions.svelte";
  import "./CTA.scss";
  import { onMount } from "svelte";
  import Checkout from "./CTAComponents/Checkout.svelte";

  let phase: number = 0;
  let upgradeType: string;
  let monthly = false;
  let buttonCopy: string;
  let standardPlan: boolean;
  let savingsPercent = 33;

  let open: boolean = false;

  onMount(() => {
    standardPlan = false;
    upgradeType = "Premium";
    buttonCopy = `Upgrade and save ${savingsPercent}%`;
  });

  function openModal(): void {
    phase = 0;
    open = true;
  }

  function closeModal(): void {
    open = false;
  }

  function setOptions(UpgradeType: string, Monthly: boolean): void {
    nextPhase();
    upgradeType = UpgradeType;
    monthly = Monthly;
  }

  function nextPhase(): void {
    phase += 1;
  }
</script>

<div>
  <button id="upgrade" on:click={openModal}>
    {buttonCopy}
  </button>
  <p>{upgradeType}</p>
  <p>{monthly ? "Monthly" : "Yearly"}</p>
  <p>Phase: {phase}</p>
  <label>
    <input
      type="checkbox"
      bind:checked={standardPlan}
      on:click={() => (standardPlan = !standardPlan)}
    />
    has Standard Plan
  </label>
</div>

<Modal isOpenModal={open} on:closeModal={closeModal}>
  {#if phase === 0}
    <UpgradeOptions
      nextPhase={setOptions}
      standardPlanState={standardPlan}
      {savingsPercent}
      {closeModal}
    />
  {:else if phase === 1}
    <Checkout upgradeType={upgradeType} nextPhase={setOptions}/>
  {:else if phase === 2}
    <div on:click={closeModal} class="phasePlaceholder">
      Thank you! Welcome to the next level.(loading area)
    </div>
  {:else}
    <div>you got an error bud</div>
  {/if}
</Modal>

<style>
  .phasePlaceholder {
    color: black;
  }
</style>
