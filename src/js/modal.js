import axios from "axios";
import { qs } from "./tools";
import { BASE_URL, API_KEY } from "./API_variables.js";
import { queue, watched } from "../library/local-storage";
import { onAddToWatched, onAddToQueue } from "../library/addtowatchedqueue";
const GALLERYs = qs(".Gallery");
const GALLERYtrend = qs(".movie-section__card");

const modal = qs("[data-modal]");
const closeModalBtn = qs("[data-modal-close]");
const mov = qs(".mov");

const toggleModal = () => modal.classList.toggle("is-hidden");

const fetchMovie = async (movieId) => {
	const response = await axios.get(
		`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
	);

	const movie = response.data;

	return movie;
};
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

		const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
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
			return;
		}
		if (queue.find((obj) => obj.id === movie.id)) {
			queueButton.style.background = "green";
			queueButton.textContent = "DELETED FROM QUEUE";
			return;
		}
		watchedButton.addEventListener("click", (e) => {
			e.preventDefault();
			watchedButton.style.background = "green";
			watchedButton.textContent = "DELETED FROM WATCHED";
			onAddToWatched(movie, watchedButton);
		});
		queueButton.addEventListener("click", (e) => {
			e.preventDefault();
			queueButton.style.background = "green";
			queueButton.textContent = "DELETED FROM QUEUE";
			onAddToQueue(movie, queueButton);
		});
	} catch (error) {
		console.log(error.message);
	}
};

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
GALLERYs.addEventListener("click", (e) => {
	const movieCard = e.target.closest(".MovieCard");

	if (movieCard) {
		const movieId = movieCard.dataset.movie;

		toggleModal();

		searchMovieById(movieId);
	}
});

GALLERYtrend.addEventListener("click", (e) => {
	const movieCard = e.target.closest(".movie-container__card");

	if (movieCard) {
		const movieId = movieCard.dataset.id;

		toggleModal();

		searchMovieById(movieId);
	}
});
