const KEY_WATCHED = "watched";
const KEY_QUEUE = "queue";
const watched = getWatchedLocalStorage() || [];
const queue = getQueueLocalStorage() || [];

const getWatchedLocalStorage = () => {
	JSON.parse(localStorage.getItem(KEY_WATCHED));
}; // funkcja do ściągania fimów do kolejki local storage

const getQueueLocalStorage = () => {
	JSON.parse(localStorage.getItem(KEY_QUEUE));
}; // funkcja do ściągania filmów obejrzanych z local storage

const setWatchedLocalStorage = (arr) => {
	localStorage.setItem(KEY_WATCHED, JSON.stringify(arr));
}; // funckja do wrzucania filmów do local storage - do obejrzanych

const setQueueLocalStorage = (arr) => {
	localStorage.setItem(KEY_QUEUE, JSON.stringify(arr));
}; // funckja do wrzucania filmów do local storage - do kolejki

const onAddToWatched = (id) => {
	if (watched.includes(id)) {
		return;
	}
	watched.pusch(id);
	setWatchedLocalStorage(watched);
};

const onAddToQueue = (id) => {
	if (queue.includes(id)) {
		return;
	}
	queue.push(id);
	setQueueLocalStorage(queue);
};
const localStorage = {
	KEY_WATCHED,
	KEY_QUEUE,
	watched,
	queue,
	getWatchedLocalStorage,
	getQueueLocalStorage,
	setWatchedLocalStorage,
	setQueueLocalStorage,
	onAddToWatched,
	onAddToQueue,
};

export default localStorage;
