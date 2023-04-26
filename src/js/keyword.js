import axios from "axios";
import { qs } from "./tools";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "8c57aa16de6d4d7f2d4ddf4e537ebfb8";

const REFS = {
	FORM: qs(".HeaderInput"),
	FORM_NOTIFY: qs(".HeaderInputNotify"),
	GALLERY: qs(".Gallery"),
};

const prevSearch = document.getElementById("prevSearch");
const nextSearch = document.getElementById("nextSearch");
const currentSearch = document.getElementById("currentSearch");
const prvS = document.getElementById("prvS");
const prvprvS = document.getElementById("prvprvS");
const nxtS = document.getElementById("nxtS");
const nxtnxtS = document.getElementById("nxtnxtS");

const getByKeyword = async (query, page) => {
	const url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;

	return await axios
		.get(url)
		.then((response) => {
			return response.data;
		})
		.catch((error) => console.log(error));
};
const searchByKeywordWrongName = (e) => {
	e.preventDefault();
	query = e.target.searchQuery.value.trim();
	const page = 1;
	REFS.FORM_NOTIFY.textContent = "";
	if (!query) {
		setTimeout(() => {
			REFS.FORM_NOTIFY.classList.add("IsHidden");
		}, 10000);
		REFS.FORM_NOTIFY.classList.remove("IsHidden");
		document.getElementById("searchPagination").style.display = "none";
		document.getElementById("gallery-main").style.display = "none";
		REFS.FORM_NOTIFY.textContent =
			"Search result not successful. Enter the correct movie name";
		return;
	}

	getByKeyword(query, page).then((data) => {
		if (!data.total_results) {
			setTimeout(() => {
				REFS.FORM_NOTIFY.classList.add("IsHidden");
			}, 10000);
			document.getElementById("searchPagination").style.display = "none";
			document.getElementById("gallery-main").style.display = "none";
			REFS.FORM_NOTIFY.classList.remove("IsHidden");
			REFS.FORM_NOTIFY.textContent =
				"Search result not successful. Enter the correct movie name";
			return;
		}
		REFS.GALLERY.innerHTML = createGalleryMarkup(data.results);
		document.getElementById("gallery-main").style.display = "flex";
		currentSearchPage = page;
		nxtSPage = currentSearchPage + 1;
		nxtnxtSPage = currentSearchPage + 2;
		prvSPage = currentSearchPage - 1;
		prvprvSPage = currentSearchPage - 2;
		nextSearchPage = currentSearchPage + 1;
		prevSearchPage = currentSearchPage - 1;
		totalSearchPages = data.total_pages;

		currentSearch.innerText = currentSearchPage;
		nxtS.innerText = nxtSPage;
		nxtnxtS.innerText = nxtnxtSPage;
		prvS.innerText = prvSPage;
		prvprvS.innerText = prvprvSPage;

		if (currentSearchPage <= 2) {
			prvprvS.style.display = "none";
			prvprvS.innerText = 1;
		} else {
			prvprvS.style.display = "flex";
		}
		if (currentSearchPage + 1 >= totalSearchPages) {
			nxtnxtS.style.display = "none";
			nxtnxtS.innerText = totalSearchPages;
		} else {
			nxtnxtS.style.display = "flex";
		}

		if (currentSearchPage <= 1) {
			prevSearch.classList.add("disabled");
			nextSearch.classList.remove("disabled");
			prvS.style.display = "none";
			prvS.innerText = 1;
		} else if (currentSearchPage >= totalSearchPages) {
			prevSearch.classList.remove("disabled");
			nextSearch.classList.add("disabled");
			nxtS.style.display = "none";
			nxtS.innerText = totalSearchPages;
		} else {
			prevSearch.classList.remove("disabled");
			nextSearch.classList.remove("disabled");
			prvS.style.display = "flex";
			nxtS.style.display = "flex";
		}
	});
};

const createGalleryMarkup = (movies) => {
	return movies
		.map((movie) => {
			const genres = genresGalleryInfo(movie.genre_ids);
			const movieDate = movie.release_date ?? movie.first_air_date ?? null;
			const movieYear = movieDate ? movieDate.slice(0, 4) : "Unknown year";

			const poster = movie.poster_path
				? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
				: movie.title;

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
          <p class="MovieInfo">${genres} | ${movieYear}</p>
        </div>
      </li>`;
		})
		.join("");
};

const genresGalleryInfo = (array) => {
	const genreResult = genresId.reduce((acc, element) => {
		if (Array.isArray(array) && array.includes(element.id)) {
			acc.push(element.name);
		}
		return acc;
	}, []);

	if (!genreResult.length) {
		return "Unknown genre";
	} else if (genreResult.length > 2) {
		return `${genreResult[0]}, ${genreResult[1]}...`;
	} else {
		return genreResult.join(", ");
	}
};

const genresId = [
	{
		id: 28,
		name: "Action",
	},
	{
		id: 12,
		name: "Adventure",
	},
	{
		id: 16,
		name: "Animation",
	},
	{
		id: 35,
		name: "Comedy",
	},
	{
		id: 80,
		name: "Crime",
	},
	{
		id: 99,
		name: "Documentary",
	},
	{
		id: 18,
		name: "Drama",
	},
	{
		id: 10751,
		name: "Family",
	},
	{
		id: 14,
		name: "Fantasy",
	},
	{
		id: 36,
		name: "History",
	},
	{
		id: 27,
		name: "Horror",
	},
	{
		id: 10402,
		name: "Music",
	},
	{
		id: 9648,
		name: "Mystery",
	},
	{
		id: 10749,
		name: "Romance",
	},
	{
		id: 878,
		name: "Science Fiction",
	},
	{
		id: 10770,
		name: "TV Movie",
	},
	{
		id: 53,
		name: "Thriller",
	},
	{
		id: 10752,
		name: "War",
	},
	{
		id: 37,
		name: "Western",
	},
];

let currentSearchPage = 1;
let nextSearchPage = 2;
let nxtSPage = 2;
let nxtnxtSPage = 3;
let prevSearchPage = 1;
let prvSPage = 1;
let prvprvSPage = 1;
let totalSearchPages = 100;

prevSearch.addEventListener("click", () => {
	if (prevSearchPage > 0) {
		pageCallSearch(prevSearchPage);
	}
});
prvS.addEventListener("click", () => {
	if (prvSPage > 0) {
		pageCallSearch(prvSPage);
	}
});
prvprvS.addEventListener("click", () => {
	if (prvprvSPage > 0) {
		pageCallSearch(prvprvSPage);
	}
});

nextSearch.addEventListener("click", () => {
	if (nextSearchPage > 0) {
		pageCallSearch(nextSearchPage);
	}
});
nxtS.addEventListener("click", () => {
	if (nxtSPage <= totalSearchPages) {
		pageCallSearch(nxtSPage);
	}
});
nxtnxtS.addEventListener("click", () => {
	if (nxtnxtSPage <= totalSearchPages) {
		pageCallSearch(nxtnxtSPage);
	}
});

const pageCallSearch = (page) => {
	getByKeyword(query, page).then((data) => {
		if (data.total_pages !== 0) {
			currentSearchPage = data.page;
			nxtSPage = currentSearchPage + 1;
			nxtnxtSPage = currentSearchPage + 2;
			prvSPage = currentSearchPage - 1;
			prvprvSPage = currentSearchPage - 2;
			nextSearchPage = currentSearchPage + 1;
			prevSearchPage = currentSearchPage - 1;
			totalSearchPages = data.total_pages;

			currentSearch.innerText = currentSearchPage;
			nxtS.innerText = nxtSPage;
			nxtnxtS.innerText = nxtnxtSPage;
			prvS.innerText = prvSPage;
			prvprvS.innerText = prvprvSPage;
		}

		if (currentSearchPage <= 2) {
			prvprvS.style.display = "none";
			prvprvS.innerText = 1;
		} else {
			prvprvS.style.display = "flex";
		}
		if (currentSearchPage + 1 >= totalSearchPages) {
			nxtnxtS.style.display = "none";
			nxtnxtS.innerText = totalSearchPages;
		} else {
			nxtnxtS.style.display = "flex";
		}

		if (currentSearchPage <= 1) {
			prevSearch.classList.add("disabled");
			nextSearch.classList.remove("disabled");
			prvS.style.display = "none";
			prvS.innerText = 1;
		} else if (currentSearchPage >= totalSearchPages) {
			prevSearch.classList.remove("disabled");
			nextSearch.classList.add("disabled");
			nxtS.style.display = "none";
			nxtS.innerText = totalSearchPages;
		} else {
			prevSearch.classList.remove("disabled");
			nextSearch.classList.remove("disabled");
			prvS.style.display = "flex";
			nxtS.style.display = "flex";
		}
		REFS.GALLERY.innerHTML = createGalleryMarkup(data.results);
	});
	document.body.scrollTop = document.documentElement.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

REFS.FORM.addEventListener("submit", searchByKeywordWrongName);
let query;

document.getElementById("SearchBtn").onclick = () => {
	document.getElementById("HideGalleryOnKeyword").style.display = "none";
	document.getElementById("searchPagination").style.display = "flex";
};
