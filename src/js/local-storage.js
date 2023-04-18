const KEY_WATCHED = 'watched';
const KEY_QUEUE = 'queue';
export const watched = getWatchedLocalStorage() || [];
export const queue = getQueueLocalStorage() || [];

export function getWatchedLocalStorage() {
  return JSON.parse(localStorage.getItem(KEY_WATCHED));
} // funkcja do ściągania fimów do kolejki local storage

export function getQueueLocalStorage() {
  return JSON.parse(localStorage.getItem(KEY_QUEUE));
} // funkcja do ściągania filmów obejrzanych z local storage

export function setWatchedLocalStorage(arr) {
  localStorage.setItem(KEY_WATCHED, JSON.stringify(arr));
} // funckja do wrzucania filmów do local storage - do obejrzanych

export function setQueueLocalStorage(arr) {
  localStorage.setItem(KEY_QUEUE, JSON.stringify(arr));
} // funckja do wrzucania filmów do local storage - do kolejki

export function onAddToWatched(id) {
  if (watched.includes(id)) {
    return;
  }
  watched.pusch(id);
  setWatchedLocalStorage(watched);
}

export function onAddToQueue(id) {
  if (queue.includes(id)) {
    return;
  }
  queue.push(id);
  setQueueLocalStorage(queue);
}
