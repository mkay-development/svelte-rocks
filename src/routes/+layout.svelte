<script>
  import "../tailwind.css";
  import Fa from "svelte-fa";
  import { faHeart } from "@fortawesome/free-solid-svg-icons";
</script>

<header class="mx-auto max-w-5xl mt-2 rounded-t-lg flex justify-between px-2 py-2 bg-gray-300">
  <h1 class="text-xl font-bold text-black"><a href="/">Disco - Come In</a></h1>
  <nav>
    <ul class="flex space-x-5 text-black mt-1">
      <li><a href="/spezial">Spezial</a></li>
      <li><a href="/bilder">Bilder</a></li>
      <li><a href="mailto:info@come-in.rocks">Kontakt</a></li>
      <li><a href="/impressum">Impressum</a></li>
    </ul>
  </nav>
</header>

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
