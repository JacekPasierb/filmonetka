import localStorage, { queue } from "./local-storage";

const onAddToWatched = (id) => {
	if (localStorage.watched.includes(id)) {
		return;
	}
	watched.pusch(id);
	localStorage.setWatchedLocalStorage(watched);
};

const onAddToQueue = (id) => {
	if (localStorage.queue.includes(id)) {
		return;
	}
	queue.push(id);
	localStorage.setQueueLocalStorage(queue);
};
export {
    onAddToWatched,
    onAddToQueue
}