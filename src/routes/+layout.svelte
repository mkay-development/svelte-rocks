<script>
  import "../tailwind.css";
  import Fa from "svelte-fa";
  import { faBars, faHeart, faTimes } from "@fortawesome/free-solid-svg-icons";
  import { open } from "../stores/navigation";
  import NavigationContent from "$lib/components/NavigationContent.svelte";
</script>

<header
  class="mx-auto max-w-5xl mt-2 rounded-t-lg flex justify-between px-2 py-2 bg-gray-300"
>
  <h1 class="text-xl font-bold text-black"><a href="/">Disco - Come In</a></h1>
  <nav class="hidden md:block">
    <ul class="flex space-x-5 text-black mt-1">
      <li><a href="/spezial">Spezial</a></li>
      <li><a href="/bilder">Bilder</a></li>
      <li><a href="mailto:info@come-in.rocks">Kontakt</a></li>
      <li><a href="/impressum">Impressum</a></li>
    </ul>
  </nav>
  <nav class="md:hidden mt-1">
    {#if $open}
      <button
        on:click={function () {
          open.set(false);
        }}
      >
        <Fa icon={faTimes} class="mt-1" />
      </button>
    {:else}
      <button
        on:click={function () {
          open.set(true);
        }}
      >
        <Fa icon={faBars} class="mt-1" />
      </button>
    {/if}
  </nav>
</header>
{#if $open}
  <section class="navigation-content mx-auto max-w-5xl text-white px-2 py-2 bg-red-600 my-2">
    <NavigationContent />
  </section>
{/if}

<main class="mx-auto max-w-5xl px-2 py-2 bg-gray-300"><slot /></main>

<footer class="mx-auto max-w-5xl mb-2 px-2 py-2 bg-gray-300 rounded-b-lg">
  <div class="grid grid-cols-6">
    <div class="col-span-6 md:col-span-2">
      <a href="/impressum">Impressum</a> &
      <a href="/data-privacy">Datenschutz</a>
    </div>
    <div class="col-span-6 md:col-span-2 flex">
      Made with <Fa icon={faHeart} class="mx-2 mt-1 text-red-400" /> by Jonathan
    </div>
    <div class="col-span-6 md:col-span-2">
      Copyright by <a
        href="https://www.mkay-development.de"
        class="text-blue-600">MkaY Development</a
      >
    </div>
  </div>
</footer>
