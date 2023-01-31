import { writable } from 'svelte/store';

export const media = writable("");
export let view = function (url: string) {
    media.set(url);
    window.scrollTo({top: 0, behavior: 'smooth'});
}

export let reset = function () {
    media.set('');
}