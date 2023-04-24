import axios from 'axios';
import tools from './tools';
import { BASE_URL, API_KEY } from './API_variables.js';

const GALLERYs = tools.qs('.Gallery');
const GALLERYtrend = tools.qs('.movie-section__card');

const modal = document.querySelector('[data-modal]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const mov = tools.qs('.mov');

function toggleModal() {
  modal.classList.toggle('is-hidden');
}

const fetchMovie = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );

  const movie = response.data;

  return movie;
};
const searchMovieById = async movieId => {
  try {
    const movie = await fetchMovie(movieId);

    const movieName = movie.title;
    const vote = movie.vote_average.toFixed(1);
    const votes = movie.vote_count;
    const popularity = movie.popularity.toFixed(1);
    const originalTitle = movie.original_title;
    const genres = movie.genres.map(ob => ob.name).join(' , ');
    const overview = movie.overview;

    const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    mov.innerHTML = ` 
		<div class="row">
              <img class="modal__poster" src=${poster} alt="plakat filmu" sizes="(min-width: 1200px) 370px" />
	          <div>
		          <div class="modal__tittle-film">${movieName}
				  </div>
		          <div class="modal__details">
		                  <div class="modal__details-left">
		                      <ul class="modal__list modal__list-left">
		                           <li>Vote / Votes</li>
		                           <li>Popularity</li>
		                           <li>Original Title</li>
		                           <li>Genre</li>
		                     </ul>
		                 </div>
		                 <div class="modal__details-right">
		                      <ul class="modal__list modal__list-right">
		                           <li>
		                            <span class="modal__vote-details">${vote}</span>
									<span class="modal__list-left">/</span> 
									<span class="modal__vote-summary">${votes}</span>
		                          </li>
		                          <li>${popularity}</li>
		                          <li>${originalTitle}</li>
		                           <li>${genres}</li>
		                     </ul>
		                 </div>
		          </div>
		          <div class="modal__tittle-describe-tittle">About</div>
		             <p class="modal__tittle-describe">
		              ${overview}
		                  </p>
		              <div class="modal__buttons">
		             <button class="modal__button-watched">add to Watched</button>
		              <button class="modal__button-queue">add to queue</button>
		                </div>
		       </div>
		</div>`;
  } catch (error) {
    console.log(error.message);
  }
};

closeModalBtn.addEventListener('click', e => {
  e.preventDefault();
  toggleModal();
});

function closeByClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}
modal.addEventListener('click', closeByClick);

function closeByPush(event) {
  if (event.key === 'Escape' || event.keyCode === 27) {
    toggleModal();
  }
}
window.addEventListener('keydown', closeByPush);

GALLERYs.addEventListener('click', e => {
  const movieCard = e.target.closest('.MovieCard');

  if (movieCard) {
    const movieId = movieCard.dataset.movie;

    toggleModal();

    searchMovieById(movieId);
  }
});

GALLERYtrend.addEventListener('click', e => {
  const movieCard = e.target.closest('.movie-container__card');

  if (movieCard) {
    const movieId = movieCard.dataset.id;

    toggleModal();

    searchMovieById(movieId);
  }
});
