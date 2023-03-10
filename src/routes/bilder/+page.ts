import PocketBase from "pocketbase";
import { get } from "svelte/store";
import { url } from "../../stores/backend";

const pb = new PocketBase(get(url));

/** @type {import('./$types').PageLoad} */
export async function load() {
    return { 'events': await pb.collection("event").getList(1, 50).items.reverse() };
}