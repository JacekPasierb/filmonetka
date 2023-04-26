import { getTrendMovies } from "./trendingMovie.js";
import { lastUrl } from "./trendingMovie.js";

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const current = document.getElementById("current");

const currentPage = 1;
const nextPage = 2;
const prevPage = 3;
const lastUrl = "";
const totalPages = 100;

prev.addEventListener("click", () => {
	if (prevPage > 0) {
		pageCall(prevPage);
	}
});

next.addEventListener("click", () => {
	if (nextPage <= totalPages) {
		pageCall(nextPage);
	}
});

const pageCall = (page) => {
	const urlSplit = lastUrl.split("?");

	const queryParams = urlSplit[1].split("&");

	const key = queryParams[queryParams.length - 1].split("=");

	if (key[0] !== "page") {
		const url = lastUrl + "&page=" + page;
		getTrendMovies(url);
	} else {
		key[1] = page.toString();
		const a = key.join("=");
		queryParams[queryParams.length - 1] = a;
		const b = queryParams.join("&");
		const url = urlSplit[0] + "?" + b;
		getTrendMovies(url);
	}
};
