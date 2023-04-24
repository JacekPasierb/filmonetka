import Genres from "./genres";
export function createLibraryMarkup(movies) {
    return movies
      .map(movie => {
        const poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        const movieDate = release_date.slice(0, 4)
        return `
        <li class="movie__card" data-movie="${movie.id}">
          <div class="movie__poster">        
              <img class="movie__image"
              src="${poster}"
              alt=${movie.title}
              loading="lazy"
              />      
          </div>
          <div class="movie__info">
            <p class="movie__name">${movie.title}</p>
            <p class="movie__descr"> ${movie.genres.name} | ${movieDate}</p>
            <p class="movie__vote">${movie.vote_average}
          </div>
        </li>`;
      })
      .join('');
  }