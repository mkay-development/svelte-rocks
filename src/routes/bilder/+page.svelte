<script>
  import { url } from "./../../stores/backend";
  import PocketBase from "pocketbase";
  import { onMount } from "svelte";
  import EventGrid from "../../lib/components/EventGrid.svelte";
  import { media, reset } from "../../stores/view";

  let events = [];

  const pb = new PocketBase($url);

  onMount(async () => {
    let response = await pb.collection("event").getList(1, 50);
    events = response.items;
  });
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
