<script>
  /** @type {import('./$types').PageData} */
  export let data;
  let { pictures } = data;
  import { media, view, reset } from "../../stores/view";
</script>

<div class="grid grid-cols-8 gap-3 mt-5">
  {#if $media}
    <div class="col-span-8">
      <button on:click={reset} class="">Ausblenden</button>
      <img src={$media} class="border-red-600 border-2" alt="" />
    </div>
  {/if}

  {#each pictures as pic}
    <div class="col-span-8 md:col-span-2">
      <p class="text-sm block text-center mb-2 font-bold">{pic.name}</p>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <img
        src="https://backend.come-in.rocks/api/files/{pic.collectionId}/{pic.id}/{pic.media}"
        alt=""
        on:click={() => {
          view(
            "https://backend.come-in.rocks/api/files/" +
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
</div>
