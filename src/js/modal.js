import axios from "axios";
import { qs } from "./tools";
import { BASE_URL, API_KEY } from "./api-variables";
import { queue, watched } from "./library/local-storage";
import { onAddToWatched, onAddToQueue } from "./library/add-to-watched-queue";
import { showHideLoader } from "./loader.js";
import refs from "./refs.js";

const gallerysDom = qs(".Gallery");
const galleryTrendDom = qs(".movie-section__card");

const modal = qs("[data-modal]");
const closeModalBtn = qs("[data-modal-close]");
const mov = qs(".mov");

const toggleModal = () => modal.classList.toggle("is-hidden");

const fetchMovie = async (movieId) => {
	showHideLoader(refs.loader);
	const response = await axios.get(
		`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
	);
	showHideLoader(refs.loader);

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
		//-----Fetch zwiastun
		const zwiastun = async () => {
			const response = await axios.get(
				`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`,
			);

			const video = response.data;
			const vid = video.results[0].key;
			return vid;
		};

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
					  <button class="modal__button-trailer" id="zwiastun">zwiastun</button>
					  
		                </div>
		       </div>
		</div>`;
		const watchedButton = qs("#watched");
		const queueButton = qs("#queue");
		const zwButton = qs("#zwiastun");
		const div = document.querySelector("[data-mod]");
		const mod = document.querySelector("[data-mod]");
		const closeModBtn = document.querySelector("[data-mod-close]");
		const iframe = document.querySelector("iframe");
		const openTrailer = async () => {
			const vid = await zwiastun();

			iframe.src = `https://www.youtube.com/embed/${vid}`;

			iframe.addEventListener("load", () => {
				div.style.display = "block";
			});
		};
		zwButton.addEventListener(
			"click",

			openTrailer,
		);
		closeModBtn.addEventListener("click", (e) => {
			e.preventDefault();
			div.style.display = "none";
		});

		const closeByClicked = (event) => {
			if (event.target === mod) {
				div.style.display = "none";
			}
		};

		mod.addEventListener("click", closeByClicked);

		const closeByPushed = (event) => {
			if (event.key === "Escape" || event.keyCode === 27) {
				div.style.display = "none";
			}
		};
		window.addEventListener("keydown", closeByPushed);

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
gallerysDom.addEventListener("click", (e) => {
	const movieCard = e.target.closest(".MovieCard");

	if (movieCard) {
		const movieId = movieCard.dataset.movie;

		searchMovieById(movieId)
			.then(() => toggleModal())
			.catch((error) => console.error(error));
	}
});

galleryTrendDom.addEventListener("click", (e) => {
	const movieCard = e.target.closest(".movie-container__card");

	if (movieCard) {
		const movieId = movieCard.dataset.id;

		searchMovieById(movieId)
			.then(() => toggleModal())
			.catch((error) => console.error(error));
	}
});
