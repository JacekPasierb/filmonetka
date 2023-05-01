import { showWatched, showQueue } from "../library/add-localstorage";
import { qs } from "../js/tools";
const body = qs("body");
const headerElement = document.createElement("header");
headerElement.classList.add("header-library");
body.prepend(headerElement);

const divBackground = document.createElement("div");
divBackground.classList.add("container-background");
headerElement.prepend(divBackground);
const containerBackground = qs(".container-background");

const imgInnerHTML = `<a class="header-library__image-link" href="./index.html">
<svg class="HeaderSvgFilm">
          <use href="/src/images/symbol-defs.svg#icon-film"></use>
        </svg>
    <span class="header-library__image-span">Filmoteka</span>
    </a>`;
containerBackground.insertAdjacentHTML("afterbegin", imgInnerHTML);

const ulElement = document.createElement("ul");
ulElement.classList.add("navigation");
ulElement.style = "list-style:none";
containerBackground.append(ulElement);

const innerHTML = `<li class="navigation-list">
<a class="navigation-list__link" href="index.html">home</a>
</li>
<li class="navigation-list">
<a class="navigation-list__link--active" href="my-library.html">my library</a>
</li>`;

const navigationList = qs(".navigation");
navigationList.insertAdjacentHTML("afterbegin", innerHTML);

const ulButtons = document.createElement("ul");
ulButtons.classList.add("buttons");
ulButtons.style = "list-style:none";
containerBackground.append(ulButtons);

const secondInnerHTML = `<li class="buttons-list">
<button class="button-library" type="button" id="btnWatchedGallery">watched</button>
</li>
<li class="buttons-list">
<button class="button-library" type="button" id="btnQueueGallery">queue</button>
</li>`;
const buttonLists = qs(".buttons");
buttonLists.insertAdjacentHTML("afterbegin", secondInnerHTML);

const activeBtn = qs(".button-library");
activeBtn.addEventListener("click", () => {
	activeBtn.classList.add("active");
	activeBtn.classList.remove("active");
});

const btnWatchedGallery = qs("#btnWatchedGallery");
const btnQueueGallery = qs("#btnQueueGallery");
btnWatchedGallery.addEventListener("click", (e) => {
	e.preventDefault();

	showWatched(btnWatchedGallery, btnQueueGallery);
});
btnQueueGallery.addEventListener("click", (e) => {
	e.preventDefault();

	showQueue(btnQueueGallery, btnWatchedGallery);
});
