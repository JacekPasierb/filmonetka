import {
	queue,
	watched,
	setWatchedLocalStorage,
	setQueueLocalStorage,
} from "./local-storage";

const onAddToWatched = (movie) => {
	if (watched.find((obj) => obj.id === movie.id)) {
		return;
	}
	watched.push(movie);
	setWatchedLocalStorage(watched);
};

const onAddToQueue = (movie) => {
	if (queue.find((obj) => obj.id === movie.id)) {
		return;
	}
	queue.push(movie);
	setQueueLocalStorage(queue);
};
export { onAddToWatched, onAddToQueue };
