import { onAddToWatched, onAddToQueue } from "./add_to_watched_queue";
import { createLibraryMarkup } from "./library_markup";
import {
	queue,
	setQueueLocalStorage,
	setWatchedLocalStorage,
	watched,
} from "./local-storage";
import { qs } from "../js/tools";
const addWatched = qs(".modal__button-watched");
const addQueue = qs(".modal__button-queue");
const watchedMovies = qs(".watched-movies");

//----------------------------------------------------------------------------------------//
//--------------------------------- MOŻE ZOSTAĆ WDROŻONE W UPDATE ------------------------//
//----------------------------------------------------------------------------------------//

// if(watched.includes(movie)) {
//     addWatched.textContent = 'In watched';
//     addWatched.stylebackgroundColor = "var(--button_active)";
// }

// if(queue.includes(movie)) {
//     addQueue.textContent = 'In queue';
//     addQueue.style.backgroundColor = "var(--button_active)";
// }
// addWatched.addEventListener("click", () => {

//     if(watched.includes(id)){
//         watched.splice(watched.indexOf(id), 1);
//         setWatchedLocalStorage(watched)

//         getArrayMovies(watched)
//         .then(data => {
//             if (watchedMovies) {
//                 watchedMovies.innerHTML = createLibraryMarkup(data);
//             }
//         })
//         .catch(er => console.log(er));
//         }else {
//             onAddToWatched(id);
//             setWatchedLocalStorage(watched);
//         }
// });

// addQueue.addEventListener("click", () => {
//     if (queue.includes(id)) {
//         queue.splice(queue.indexOf(id), 1);
//         setQueueLocalStorage(queue);

//         getArrayMovies(queue)
//         .then(data => {
//             if(watchedMovies) {
//                 watchedMovies.innerHTML = createLibraryMarkup(data);
//             }
//         })
//         .catch(er => console.log(er));
//     } else {
//         onAddToQueue(id);
//         setQueueLocalStorage(queue);
//     }
// })
//----------------------------------------------------------------------------------------//
//--------------------------------- MOŻE ZOSTAĆ WDROŻONE W UPDATE ------------------------//
//----------------------------------------------------------------------------------------//
export { watchedMovies };
