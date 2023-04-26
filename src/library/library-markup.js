

export function createLibraryMarkupW(watched) {
	return watched
		.map((movie) => {
			console.log("w", movie);
			const poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
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
}

export function createLibraryMarkupQ(queue) {
	return queue
		.map((movie) => {
			console.log("w", movie);
			const poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
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
}
