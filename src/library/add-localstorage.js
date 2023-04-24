import { getArrayMovies } from './fetch-library';
import { createLibraryMarkup } from './library-markup';
import { queue, watched } from './local-storage';
import {watchedMovies} from './localstorage-modal'

const watchedButton = document.querySelector('[name="watched"]');
const queueButton = document.querySelector('[name="queue"]');

watchedButton.addEventListener("click", showWatched);
queueButton.addEventListener("click", showQueue);

function showWatched() {
    if (!watchedButton.classList.contains('button--active')) {
        watchedButton.classList.add('button--active');
        watchedButton.disabled = true;
        queueButton.classList.remove('button--active');
        queueButton.disabled = false;
    }

    if(!watched.length) {
        watchedMovies.innerHTML = '';
        return
    }
    getArrayMovies(watched)
    .then(data => {
        watchedMovies.innerHTML = createLibraryMarkup(data);
    })
    .catch(er => console.log(er));
}

function showQueue() {
    if(!queueButton.classList.contains('button--active')) {
        queueButton.classList.add('button--active');
        queueButton.disabled = true;
        watchedButton.classList.remove('button--active');
        watchedButton.disabled=false;
    }
    if(!queue.length) {
        watchedMovies.innerHTML = '';
        return;
    }
    getArrayMovies(queue)
    .then(data => {
        watchedMovies = createLibraryMarkup(data);
    });
}