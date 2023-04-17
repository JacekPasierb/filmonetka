const body = document.querySelector("body");
const headerElement = document.createElement("header");
headerElement.classList.add("header-library");
body.prepend(headerElement);

const divBackground = document.createElement("div");
divBackground.classList.add("container-background");
headerElement.prepend(divBackground);
const containerBackground = document.querySelector(".container-background");

const svgElement = document.querySelector("svg");

const linkElement = document.createElement("a");
linkElement.classList.add("header-library__image-link");
linkElement.href = "#"
svgElement.before(linkElement);
linkElement.prepend(svgElement);
containerBackground.prepend(linkElement);

const spanElement = document.createElement("span");
spanElement.classList.add("header-library__image-span");
spanElement.textContent="Filmoteka";
linkElement.append(spanElement);

const ulElement = document.createElement("ul");
ulElement.classList.add("navigation");
ulElement.style = "list-style:none";
containerBackground.append(ulElement);

const ulNavigation = document.querySelector(".navigation");
const navigations = ["my library", "home"]
navigations.forEach(function (navigation) {
   const liElement = document.createElement("li");
   liElement.classList.add("navigation-list");
   ulNavigation.prepend(liElement);
   const linkNavigation = document.createElement("a");
   linkNavigation.classList.add("navigation-list__link");
   linkNavigation.textContent = navigation;
   liElement.prepend(linkNavigation);
   
   
})

const ulButtons = document.createElement("ul");
ulButtons.classList.add("buttons");
ulButtons.style = "list-style:none";
containerBackground.append(ulButtons);
const buttonLists = document.querySelector(".buttons");
const buttons = ["queue", "watched"];
buttons.forEach(function(button) {
   const liButtons = document.createElement("li");
   liButtons.classList.add("buttons-list");
   buttonLists.prepend(liButtons);
   const buttonsElement = document.createElement("button");
   buttonsElement.classList.add("button");
   buttonsElement.textContent = button;
   buttonsElement.type = "button";
   liButtons.prepend(buttonsElement);
})
const buttonsElem = document.querySelectorAll(".button");
buttonsElem.forEach(function(element) {
  element.addEventListener("click", () => 
element.style.backgroundColor = "var(--button_active)",
  ) 
})

buttonsElem.forEach(function(element) {
  element.addEventListener("click", () => 
element.style.borderColor = "transparent"
  ) 
})






