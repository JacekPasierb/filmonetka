import { qs } from "../tools";
export const createLibraryMarkupW = (watched) => {
	return watched
		.map((movie) => {
			const poster = movie.poster_path
				? `https://image.tmdb.org/t/p/${
						window.devicePixelRatio > 1 ? "w780" : "w500"
				  }/${movie.poster_path}`
				: movie.title;
			const movieDate = movie.release_date;
			const movieYear = movieDate ? movieDate.slice(0, 4) : "Unknown year";
			const matchedGenres = "Genre";

			return `
      <li class="MovieCard" data-movie="${movie.id}">
        <div class="MoviePoster">
            <img class="MoviePosterImg"
            src="${poster}"
            alt=${movie.title ?? movie.name}
            loading="lazy"
            />
        </div>
        <div class="MovieData">
          <p class="MovieTitle">${movie.title ?? movie.name}</p>
          <p class="MovieInfo">${matchedGenres} | ${movieYear}</p>
        </div>
      </li>`;
		})
		.join("");
};
export const createLibraryMarkupQ = (queue) => {
	return queue
		.map((movie) => {
			const poster = movie.poster_path
				? `https://image.tmdb.org/t/p/${
						window.devicePixelRatio > 1 ? "w780" : "w500"
				  }/${movie.poster_path}`
				: movie.title;
			const movieDate = movie.release_date;
			const movieYear = movieDate ? movieDate.slice(0, 4) : "Unknown year";
			const matchedGenres = "Genre";

			return `
      <li class="MovieCard" data-movie="${movie.id}">
        <div class="MoviePoster">
            <img class="MoviePosterImg"
            src="${poster}"
            alt=${movie.title ?? movie.name}
            loading="lazy"
            />
        </div>
        <div class="MovieData">
          <p class="MovieTitle">${movie.title ?? movie.name}</p>
          <p class="MovieInfo">${matchedGenres} | ${movieYear}</p>
        </div>
      </li>`;
		})
		.join("");
};
