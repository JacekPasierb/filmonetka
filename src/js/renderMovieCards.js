import Genres from './genres.js';
import {qs} from './tools';
const moviesGallery = qs('.movie-section__card');
// Tworzenie galerii popularnych filmów

export const renderMovies = (data) =>{
  moviesGallery.innerHTML = '';

  data.forEach(markup => {
    const { title, name, release_date, first_air_date, poster_path, genre_ids } = markup;
    const moviePoster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    const movieDate = release_date.slice(0, 4) : first_air_date.slice(0, 4)
    const movieName = title ? title : name;
    let matchedGenres = genre_ids
    .map(id => {
      const genre = Genres.movieGenres.find(genre => genre.id === id);
      return genre ? [`${genre.name}`] : '';
    })
    .filter(Boolean);

  // Wyświetlane są tylko dwa pierwsze gatunki filmowe
  if (matchedGenres.length > 2) {
    matchedGenres = matchedGenres.slice(0, 2).join(', ') + ' (...)';
  } else {
    matchedGenres = matchedGenres.join(', ');
  }
    const markupEl = document.createElement('li');
    markupEl.classList.add('movie-container__card');
    markupEl.innerHTML = 
    `
    <div class="poster"><img class="poster__img" src="${moviePoster}" alt="${title} poster" loading="lazy" /></div>
    <div class="movieInfo">
       <p class="movieInfo__item movieInfo--title">${movieName}</p>
       <p class="movieInfo__item">
             ${matchedGenres} | ${movieDate}
      </p>
    </div>
    `
    moviesGallery.appendChild(markupEl);
  })
}

