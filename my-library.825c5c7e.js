const e=document.querySelector("body"),n=document.createElement("header");n.classList.add("header-library"),e.prepend(n);const t=document.createElement("div");t.classList.add("container-background"),n.prepend(t);const a=document.querySelector(".container-background");document.querySelector(".header-library__image-link");a.insertAdjacentHTML("afterbegin",'<a class="header-library__image-link" href="./index.html">\n<img class = "header-library__image" src = "src/images/film_icon.png">\n</img>\n    <span class="header-library__image-span">Filmoteka</span>\n    </a>');const s=document.createElement("ul");s.classList.add("navigation"),s.style="list-style:none",a.append(s);document.querySelector(".navigation").insertAdjacentHTML("afterbegin",'<li class="navigation-list">\n<a class="navigation-list__link">home</a>\n</li>\n<li class="navigation-list">\n<a class="navigation-list__link">my library</a>\n</li>');const i=document.createElement("ul");i.classList.add("buttons"),i.style="list-style:none",a.append(i);document.querySelector(".buttons").insertAdjacentHTML("afterbegin",'<li class="buttons-list">\n<button class="button" type="button">watched</button>\n</li>\n<li class="buttons-list">\n<button class="button" type="button">queue</button>\n</li>');
//# sourceMappingURL=my-library.825c5c7e.js.map
