import { getWatchedLocalStorage } from "./local-storage";
import { watched } from "./local-storage";
import { renderMovieCard } from "../js/renderMovieCards";
import Trending from "../js/trendingMovie";
import { movieGenres } from "../js/genres";

const markButton = document.querySelector(".button-mark");
const movieCard = document.querySelector(".movie-container__card");
markButton.addEventListener("click", markFunction)
function markFunction() {
    const innerHTML = '<span status = "watched"></span>'
movieCard.prepend(innerHTML);
}    