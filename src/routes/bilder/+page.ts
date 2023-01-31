import PocketBase from "pocketbase";
const pb = new PocketBase("https://backend.come-in.rocks");

/** @type {import('./$types').PageLoad} */
export async function load() {
    let tmp = await pb.collection("pictures").getList(1, 50);
    return { 'pictures': tmp.items };
}