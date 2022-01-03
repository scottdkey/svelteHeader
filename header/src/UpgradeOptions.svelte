<script lang="ts">
  import { hasStandardPlan } from "./stores";

  import "./UpgradeOptions.scss";
  import {onMount} from "svelte";

  export let standardPlanState: boolean;
  export let nextPhase: (UpgradeType: string, Monthly: boolean) => void;
  let monthly: boolean = false;


  const choices = (
    monthly,
    hasStandardPlan
  ): {
    upgradeType: string;
    savingsPercent: number;
    discountedPrice: number;
    originalPrice: number;
    timePeriod: string;
    libraryContentCopy: string;
  }[] => {
    const timePeriod = `per ${monthly ? "month" : "year"}`;
    const savingsPercent = 33;
    let standard = {
      upgradeType: "Standard",
      savingsPercent,
      discountedPrice: monthly ? 10 : 199,
      originalPrice: monthly ? 20 : 299,
      timePeriod,
      libraryContentCopy: "Core course library, paths and skill assments",
    };
    let premium = {
      upgradeType: "Premium",
      savingsPercent,
      discountedPrice: monthly ? 20 : 299,
      originalPrice: monthly ? 35 : 449,
      timePeriod,
      libraryContentCopy:
        "Entire library of core and expanded courses, exams, projects and hands-on learning.",
    };
    return hasStandardPlan ? [premium] : [standard, premium]
  };
</script>

<div id="UpgradeOptionsHeader">
  <div id="innerHeader">
    <div id="callToAction">Upgrade Now</div>
    <div class="buttonContainer">
      <button
        class={monthly ? "activeButton" : "inactiveButton"}
        on:click={() => (monthly = true)}>Monthly</button
      >
      <button
        class={!monthly ? "activeButton" : "inactiveButton"}
        on:click={() => (monthly = false)}>Yearly</button
      >
    </div>
  </div>
</div>
<div class="optionsRow">
  {#each choices(monthly, standardPlanState) as c}
    <div class="optionsContainer">
      <div>
        <div>{c.upgradeType}</div>
        <div>Save {c.savingsPercent}%</div>
      </div>
      <div>
        <div>${c.discountedPrice}</div>
        <div>${c.originalPrice}</div>
      </div>
      <div>{c.timePeriod}</div>

      <div>{c.libraryContentCopy}</div>
      <button on:click={() => nextPhase(c.upgradeType, monthly)}>
        Upgrade to {c.upgradeType}
      </button>
    </div>
  {/each}
</div>
