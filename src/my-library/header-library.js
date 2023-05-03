import axios from "axios";
import { BASE_URL, API_KEY } from "../js/api-variables";
import { queue, watched } from "../library/local-storage";
import { showWatched, showQueue } from "../library/add-localstorage";
import { qs } from "../js/tools";
import { watchedMovies } from "../library/localstorage-modal";
import { onAddToWatched, onAddToQueue } from "../library/add-to-watched-queue";

const body = qs("body");
const headerElement = document.createElement("header");
headerElement.classList.add("header-library");
body.prepend(headerElement);

const divBackground = document.createElement("div");
divBackground.classList.add("container-background");
headerElement.prepend(divBackground);
const containerBackground = qs(".container-background");

const imgInnerHTML = `<a class="header-library__image-link" href="./index.html">
<svg class="HeaderSvgFilm">
          <use href="/symbol-defs.a8b2e413.svg#icon-film"></use>
        </svg>
    <span class="header-library__image-span">Filmoteka</span>
    </a>`;
containerBackground.insertAdjacentHTML("afterbegin", imgInnerHTML);

const ulElement = document.createElement("ul");
ulElement.classList.add("navigation");
ulElement.style = "list-style:none";
containerBackground.append(ulElement);

const innerHTML = `<li class="navigation-list">
<a class="navigation-list__link" href="index.html">home</a>
</li>
<li class="navigation-list">
<a class="navigation-list__link--active" href="my-library.html">my library</a>
</li>`;

const navigationList = qs(".navigation");
navigationList.insertAdjacentHTML("afterbegin", innerHTML);

const ulButtons = document.createElement("ul");
ulButtons.classList.add("buttons");
ulButtons.style = "list-style:none";
containerBackground.append(ulButtons);

const secondInnerHTML = `<li class="buttons-list">
<button class="button-library" type="button" id="btnWatchedGallery">watched</button>
</li>
<li class="buttons-list">
<button class="button-library" type="button" id="btnQueueGallery">queue</button>
</li>`;
const buttonLists = qs(".buttons");
buttonLists.insertAdjacentHTML("afterbegin", secondInnerHTML);
const modal = qs("[data-modal]");
const toggleModal = () => modal.classList.toggle("is-hidden");

const btnWatchedGallery = qs("#btnWatchedGallery");
const btnQueueGallery = qs("#btnQueueGallery");

//------------------------------
const fetchMovie = async (movieId) => {
	const response = await axios.get(
		`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
	);

	const movie = response.data;

	return movie;
};
//-----------------
const searchMovieById = async (movieId) => {
	try {
		const movie = await fetchMovie(movieId);

		const movieName = movie.title;
		const vote = movie.vote_average.toFixed(1);
		const votes = movie.vote_count;
		const popularity = movie.popularity.toFixed(1);
		const originalTitle = movie.original_title;
		const genres = movie.genres.map((ob) => ob.name).join(", ");
		const overview = movie.overview;
		const mov = qs(".mov");

		const poster = movie.poster_path
			? `https://image.tmdb.org/t/p/${
					window.devicePixelRatio > 1 ? "w780" : "w500"
			  }/${movie.poster_path}`
			: movie.title;
		mov.innerHTML = ` 
		<div class="box modal__row">
              <img class="modal__poster" src=${poster} alt="plakat filmu" sizes="(min-width: 1200px) 370px" />
	          <div>
		          <div class="modal__tittle-film">${movieName}
				  </div>
		          <div class="modal__values">
		                 <ul class="modal__list">
						 <li class="modal__details"> 
						 <div class="modal__list-left">Vote&nbsp/&nbspVotes</div>
						 <div class="modal__list-right">
						            <span class="modal__vote-details">${vote}</span>
									<span class="modal__list-left">/</span> 
									<span class="modal__vote-summary">${votes}</span>
						 </div>
						 </li> 
						 <li class="modal__details"> 
						 <div class="modal__list-left">Popularity</div>
						 <div class="modal__list-right">${popularity}</div>
						 </li> 
						 <li class="modal__details"> 
						 <div class="modal__list-left">Original&nbspTitle</div>
						 <div class="modal__list-right">${originalTitle}</div>
						 </li> 
						 <li class="modal__details"> 
						 <div class="modal__list-left">Genre</div>
						 <div class="modal__list-right">${genres}</div>
						 </li> 
						 </ul>
		                 
		          </div>
		          <div class="modal__tittle-describe-tittle">About</div>
		             <p class="modal__tittle-describe">
		              ${overview}
		                  </p>
		              <div class="modal__buttons">
		             <button class="modal__button-watched" id="watched">add to Watched</button>
		              <button class="modal__button-queue" id="queue">add to queue</button>
		                </div>
		       </div>
		</div>`;
		const watchedButton = qs("#watched");
		const queueButton = qs("#queue");
		if (watched.find((obj) => obj.id === movie.id)) {
			watchedButton.style.background = "green";
			watchedButton.textContent = "DELETED FROM WATCHED";
		} else {
			watchedButton.style.background = "#ff6b01";
			watchedButton.textContent = "ADD TO WATCHED";
		}
		if (queue.find((obj) => obj.id === movie.id)) {
			queueButton.style.background = "#545454";
			queueButton.textContent = "DELETED FROM QUEUE";
		} else {
			queueButton.style.background = "white";
			queueButton.textContent = "ADD TO QUEUE";
		}
		watchedButton.addEventListener("click", (e) => {
			if (watched.find((obj) => obj.id === movie.id)) {
				watchedButton.style.background = "#ff6b01";
				watchedButton.textContent = "ADD TO WATCHED";
			} else {
				watchedButton.style.background = "green";
				watchedButton.textContent = "DELETED FROM WATCHED";
			}

			onAddToWatched(movie, watchedButton);
		});
		queueButton.addEventListener("click", (e) => {
			if (queue.find((obj) => obj.id === movie.id)) {
				queueButton.style.background = "white";
				queueButton.textContent = "ADD TO QUEUE";
			} else {
				queueButton.style.background = "#545454";
				queueButton.textContent = "DELETED FROM QUEUE";
			}
			onAddToQueue(movie, queueButton);
		});
	} catch (error) {
		console.log(error.message);
	}
};
//-----------------close
const closeModalBtn = qs("[data-modal-close]");
closeModalBtn.addEventListener("click", (e) => {
	e.preventDefault();
	toggleModal();
});
const closeByClick = (event) => {
	if (event.target === modal) {
		toggleModal();
	}
};
modal.addEventListener("click", closeByClick);

const closeByPush = (event) => {
	if (event.key === "Escape" || event.keyCode === 27) {
		toggleModal();
	}
};
window.addEventListener("keydown", closeByPush);
//==================
showWatched(btnWatchedGallery, btnQueueGallery);
watchedMovies.addEventListener("click", (e) => {
	
	const movieCard = e.target.closest(".MovieCard");

	if (movieCard) {
		const movieId = movieCard.dataset.movie;

		toggleModal();

		searchMovieById(movieId);
	}
});
btnQueueGallery.addEventListener("click", (e) => {
	e.preventDefault();

	showQueue(btnQueueGallery, btnWatchedGallery);
});
btnWatchedGallery.addEventListener("click", (e) => {
	e.preventDefault();

	showWatched(btnWatchedGallery, btnQueueGallery);
});
