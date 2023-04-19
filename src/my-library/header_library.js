const body = document.querySelector("body");
const headerElement = document.createElement("header");
headerElement.classList.add("header-library");
body.prepend(headerElement);

const divBackground = document.createElement("div");
divBackground.classList.add("container-background");
headerElement.prepend(divBackground);
const containerBackground = document.querySelector(".container-background");

const linkElement = document.querySelector(".header-library__image-link");
const imgInnerHTML = 
`<a class="header-library__image-link" href="./index.html">
<img class = "header-library__image" src = "src/images/film_icon.png">
</img>
    <span class="header-library__image-span">Filmoteka</span>
    </a>`
containerBackground.insertAdjacentHTML("afterbegin", imgInnerHTML);

const ulElement = document.createElement("ul");
ulElement.classList.add("navigation");
ulElement.style = "list-style:none";
containerBackground.append(ulElement);

const innerHTML = 
`<li class="navigation-list">
<a class="navigation-list__link">home</a>
</li>
<li class="navigation-list">
<a class="navigation-list__link">my library</a>
</li>`

const navigationList = document.querySelector(".navigation");
navigationList.insertAdjacentHTML("afterbegin", innerHTML);

const ulButtons = document.createElement("ul");
ulButtons.classList.add("buttons");
ulButtons.style = "list-style:none";
containerBackground.append(ulButtons);

const secondInnerHTML = 
`<li class="buttons-list">
<button class="button" type="button">watched</button>
</li>
<li class="buttons-list">
<button class="button" type="button">queue</button>
</li>`
const buttonLists = document.querySelector(".buttons");
buttonLists.insertAdjacentHTML("afterbegin", secondInnerHTML);