import Trending from './trendingMovie.js';
import { movieGenres } from './genres.js';

const moviesGallery = document.querySelector('.movie-section__card');

Trending.getTrendingMovies()
  .then(data => {
    renderMovieCard(data.results);
  })
  .catch(error => {
    console.log(error);
  });

export function renderMovieCard(movies) {
  const markup = movies
    .map(({ title, name, release_date, first_air_date, poster_path, genre_ids }) => {
      const moviePoster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
      const movieDate = release_date ? release_date.slice(0, 4) : first_air_date.slice(0, 4);
      const movieName = title ? title : name;

      // Wyszukiwanie gatunku filmowego po id:
      let matchedGenres = genre_ids
        .map(id => {
          const genre = movieGenres.find(g => g.id === id);
          return genre ? [`${genre.name}`] : '';
        })
        .filter(Boolean);

      // Wyświetlane są tylko dwa pierwsze gatunki filmowe
      if (matchedGenres.length > 2) {
        matchedGenres = matchedGenres.slice(0, 2).join(', ') + ' (...)';
      } else {
        matchedGenres = matchedGenres.join(', ');
      }

      return `<li class="movie-container__card">
            <div class="poster"><img class="poster__img" src="${moviePoster}" alt="${title} poster" loading="lazy" /></div>
            <div class="movieInfo">
               <p class="movieInfo__item movieInfo--title">${movieName}</p>
               <p class="movieInfo__item">
                     ${matchedGenres} | ${movieDate}
              </p>
            </div>
          </li>`;
    })
    .join('');
  moviesGallery.insertAdjacentHTML('beforeend', markup);
}
