
import { createLibraryMarkupW, createLibraryMarkupQ } from './library-markup';
import { queue, watched, getWatchedLocalStorage} from '../library/local-storage';
import {watchedMovies} from './localstorage-modal';

const showWatched=(btnWatchedGallery,btnQueueGallery) =>{
    if (!btnWatchedGallery.classList.contains('button--active')) {
        btnWatchedGallery.classList.add('button--active');
        btnWatchedGallery.disabled = true;
        btnQueueGallery.classList.remove('button--active');
        btnQueueGallery.disabled = false;
    }

    if(!watched.length) {
        watchedMovies.innerHTML = '';
        return;
    }
  
        watchedMovies.innerHTML = createLibraryMarkupW(watched);
   
}

const showQueue = (btnQueueGallery,btnWatchedGallery) =>{
    if(!btnQueueGallery.classList.contains('button--active')) {
        btnQueueGallery.classList.add('button--active');
        btnQueueGallery.disabled = true;
        btnWatchedGallery.classList.remove('button--active');
        btnWatchedGallery.disabled=false;
    }
    if(!queue.length) {
        watchedMovies.innerHTML = '';
        return;
    }
    
    
        watchedMovies.innerHTML = createLibraryMarkupQ(queue);
   
}
export {showWatched, showQueue};