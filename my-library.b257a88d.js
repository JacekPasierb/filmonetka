const e=document.querySelector("body"),t=document.createElement("header");t.classList.add("header-library"),e.prepend(t);const n=document.createElement("div");n.classList.add("container-background"),t.prepend(n);const a=document.querySelector(".container-background");document.querySelector(".header-library__image-link");a.insertAdjacentHTML("afterbegin",'<a class="header-library__image-link" href="./index.html">\n<img class = "header-library__image" src = "src/images/film_icon.png">\n</img>\n    <span class="header-library__image-span">Filmoteka</span>\n    </a>');const i=document.createElement("ul");i.classList.add("navigation"),i.style="list-style:none",a.append(i);document.querySelector(".navigation").insertAdjacentHTML("afterbegin",'<li class="navigation-list">\n<a class="navigation-list__link">home</a>\n</li>\n<li class="navigation-list">\n<a class="navigation-list__link--active">my library</a>\n</li>');const s=document.createElement("ul");s.classList.add("buttons"),s.style="list-style:none",a.append(s);document.querySelector(".buttons").insertAdjacentHTML("afterbegin",'<li class="buttons-list">\n<button class="button-library--active" type="button">watched</button>\n</li>\n<li class="buttons-list">\n<button class="button-library" type="button">queue</button>\n</li>');
//# sourceMappingURL=my-library.b257a88d.js.map