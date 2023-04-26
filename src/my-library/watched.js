



import { qs } from "../js/tools";

const markButton = qs(".button-mark");
const movieCard = qs(".movie-container__card");
markButton.addEventListener("click", markFunction);
const markFunction = ()=> {
	const innerHTML = '<span status = "watched"></span>';
	movieCard.prepend(innerHTML);
}
