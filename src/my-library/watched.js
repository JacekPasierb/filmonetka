import localStorage from "./local-storage";
import { renderMovieCard } from "../js/renderMovieCards";
import Trending from "../js/trendingMovie";
import Genres from "../js/genres";
import { qs } from "./tools";

const markButton = qs(".button-mark");
const movieCard = qs(".movie-container__card");
markButton.addEventListener("click", markFunction);
const markFunction = ()=> {
	const innerHTML = '<span status = "watched"></span>';
	movieCard.prepend(innerHTML);
}
