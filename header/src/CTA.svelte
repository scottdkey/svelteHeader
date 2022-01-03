<script lang="ts">
  import "./CTA.scss";
  import {onMount} from "svelte"
  let buttonCopy: string

  onMount(() => {
    buttonCopy = "Upgrade and save 50%";
  })

</script>

<button id="upgrade">
  {buttonCopy}
</button>

