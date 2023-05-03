import {
	queue,
	watched,
	setWatchedLocalStorage,
	setQueueLocalStorage,
} from "./local-storage";

const onAddToWatched = (movie) => {
	const movieInWatched = watched.find((obj) => obj.id === movie.id);
	if (movieInWatched) {
		
		watched.splice(watched.indexOf(movieInWatched), 1);
		setWatchedLocalStorage(watched);
	} else {
		watched.push(movie);
		setWatchedLocalStorage(watched);
	}
};

const onAddToQueue = (movie) => {
	const movieInQueue = queue.find((obj) => obj.id === movie.id);
	if (movieInQueue) {
		queue.splice(queue.indexOf(movieInQueue), 1);
		setQueueLocalStorage(queue);
	} else {
		queue.push(movie);
		setQueueLocalStorage(queue);
	}
};
export { onAddToWatched, onAddToQueue };
