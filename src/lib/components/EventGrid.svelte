<script>
  import PocketBase from "pocketbase";
  import { onMount } from "svelte";
  export let identifier;
  import { media, view, reset } from "../../stores/view";
  import { url } from "../../stores/backend";

  let pictures = [];
  let event = {};

  onMount(async function () {
    const pb = new PocketBase($url);
    let tmp = await pb.collection("picture").getList(1, 50, {
      filter: 'event = "' + identifier + '"',
    });
    pictures = tmp.items;

    event = await pb.collection("event").getOne(identifier);
  });
</script>

<div class="col-span-8">
  <h2 class="font-bold text-lg">{event.name}</h2>
</div>
{#if event && pictures}
  {#if pictures.length == 0}
    <div class="col-span-8">
      <p class="block text-center font-bold">
        Momentan sind noch keine Bilder vorhanden.
      </p>
    </div>
  {:else}
    {#each pictures as pic}
      <div class="col-span-8 md:col-span-2">
        <p class="text-sm block text-center mb-2 font-bold">{pic.name}</p>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <img
          src="{$url}/api/files/{pic.collectionId}/{pic.id}/{pic.media}"
          alt=""
          on:click={() => {
            view(
              $url +
                "/api/files/" +
                pic.collectionId +
                "/" +
                pic.id +
                "/" +
                pic.media
            );
          }}
        />
      </div>
    {/each}
  {/if}
{/if}
