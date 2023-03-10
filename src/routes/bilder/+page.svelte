<script>
  /** @type {import('./$types').PageData} */
  export let data;
  import EventGrid from "../../lib/components/EventGrid.svelte";
  import { media, view, reset } from "../../stores/view";

  let { events } = data;
</script>

<div class="grid grid-cols-8 gap-3 mt-5">
  {#if $media}
    <div class="col-span-8">
      <button on:click={reset} class="">Ausblenden</button>
      <img src={$media} class="border-red-600 border-2" alt="" />
    </div>
  {/if}

  {#each events as event}
    <EventGrid identifier={event.id} />
  {/each}
</div>
