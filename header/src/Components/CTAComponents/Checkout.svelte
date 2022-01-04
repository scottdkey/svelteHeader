<script lang="ts">

    export let upgradeType: string
    export let nextPhase: (UpgradeType: string, Monthly: boolean) => void;
</script>


<div class="container">
    Upgrade to {upgradeType}
    <button on:click={nextPhase}>submit</button>
</div>