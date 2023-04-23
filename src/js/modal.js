import tools from "./tools";
const GALLERYs = tools.qs('.Gallery');
const GALLERYtrend = tools.qs(".movie-section__card");
//-------------------------------------------MODAL TEST------------------
const modal = document.querySelector("[data-modal]");
const closeModalBtn = document.querySelector("[data-modal-close]");

toggleModal();
function toggleModal() {
	modal.classList.toggle("is-hidden");
}

closeModalBtn.addEventListener("click", (e) => {
	e.preventDefault();
	toggleModal();
});

//----walka z otwieranem

GALLERYs.addEventListener("click", (e) => {
	console.log("kliknales w galerie");
	const movieCard = e.target.closest(".MovieCard");
	console.log("Kliknięte li", movieCard);
	if (movieCard) {
		const movieId = movieCard.dataset.movie; // Pobieramy id filmu z atrybutu data-movie
		// Wywołujemy funkcję do otwierania modala i przekazujemy id filmu
		console.log('ID Filmu',movieId);
		toggleModal();
		// toggleModal(movieId);
	}
});

// GALLERYtrend - TODO Trzeba na li przypidac jakis data set dla identyfikacji
GALLERYtrend.addEventListener("click", (e) => {
	console.log("kliknales w galerie");
	const movieCard = e.target.closest(".movie-container__card");
	console.log("Kliknięte li", movieCard);
	if (movieCard) {
		const movieId = movieCard.dataset.movie; // Pobieramy id filmu z atrybutu data-movie
		// Wywołujemy funkcję do otwierania modala i przekazujemy id filmu
		console.log('ID Filmu',movieId);
		toggleModal();
		// toggleModal(movieId);
	}
});

//------------------------------------------