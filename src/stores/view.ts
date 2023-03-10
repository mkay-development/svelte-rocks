import { writable } from 'svelte/store';

export const media = writable("");
export const view = function (url: string) {
    media.set(url);
    window.scrollTo({top: 0, behavior: 'smooth'});
}

export const reset = function () {
    media.set('');
}