var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},a=t.parcelRequired7c6;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in n){var a=n[t];delete n[t];var d={id:t,exports:{}};return e[t]=d,a.call(d.exports,d,d.exports),d.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){n[t]=e},t.parcelRequired7c6=a);var d=a("hGVxz"),s=a("b08YZ"),i=a("dx1nB");const l="watched",o="queue",c=JSON.parse(localStorage.getItem(l))||[],r=JSON.parse(localStorage.getItem(o))||[],u=t=>{localStorage.setItem(l,JSON.stringify(t))},_=t=>{localStorage.setItem(o,JSON.stringify(t))},v=t=>{const e=c.find((e=>e.id===t.id));e?(c.splice(c.indexOf(e),1),u(c)):(c.push(t),u(c))},m=t=>{const e=r.find((e=>e.id===t.id));e?(r.splice(r.indexOf(e),1),_(r)):(r.push(t),_(r))};var p=a("fHyLY"),g=a("dlUZe");const f=(0,s.qs)(".Gallery"),y=(0,s.qs)(".movie-section__card"),E=(0,s.qs)("[data-modal]"),b=(0,s.qs)("[data-modal-close]"),w=(0,s.qs)(".mov"),h=()=>E.classList.toggle("is-hidden"),k=async t=>{try{const e=await(async t=>{(0,p.showHideLoader)(g.default.loader);const e=await d.default.get(`${i.BASE_URL}/movie/${t}?api_key=${i.API_KEY}&language=en-US`);return(0,p.showHideLoader)(g.default.loader),e.data})(t),n=e.title,a=e.vote_average.toFixed(1),l=e.vote_count,o=e.popularity.toFixed(1),u=e.original_title,_=e.genres.map((t=>t.name)).join(", "),f=e.overview,y=async()=>(await d.default.get(`${i.BASE_URL}/movie/${t}/videos?api_key=${i.API_KEY}&language=en-US`)).data.results[0].key,E=e.poster_path?`https://image.tmdb.org/t/p/${window.devicePixelRatio>1?"w780":"w500"}/${e.poster_path}`:e.title;w.innerHTML=` \n\t\t<div class="box modal__row">\n              <img class="modal__poster" src=${E} alt="plakat filmu" sizes="(min-width: 1200px) 370px" />\n\t          <div>\n\t\t          <div class="modal__tittle-film">${n}\n\t\t\t\t  </div>\n\t\t          <div class="modal__values">\n\t\t                 <ul class="modal__list">\n\t\t\t\t\t\t <li class="modal__details"> \n\t\t\t\t\t\t <div class="modal__list-left">Vote&nbsp/&nbspVotes</div>\n\t\t\t\t\t\t <div class="modal__list-right">\n\t\t\t\t\t\t            <span class="modal__vote-details">${a}</span>\n\t\t\t\t\t\t\t\t\t<span class="modal__list-left">/</span> \n\t\t\t\t\t\t\t\t\t<span class="modal__vote-summary">${l}</span>\n\t\t\t\t\t\t </div>\n\t\t\t\t\t\t </li> \n\t\t\t\t\t\t <li class="modal__details"> \n\t\t\t\t\t\t <div class="modal__list-left">Popularity</div>\n\t\t\t\t\t\t <div class="modal__list-right">${o}</div>\n\t\t\t\t\t\t </li> \n\t\t\t\t\t\t <li class="modal__details"> \n\t\t\t\t\t\t <div class="modal__list-left">Original&nbspTitle</div>\n\t\t\t\t\t\t <div class="modal__list-right">${u}</div>\n\t\t\t\t\t\t </li> \n\t\t\t\t\t\t <li class="modal__details"> \n\t\t\t\t\t\t <div class="modal__list-left">Genre</div>\n\t\t\t\t\t\t <div class="modal__list-right">${_}</div>\n\t\t\t\t\t\t </li> \n\t\t\t\t\t\t </ul>\n\t\t                 \n\t\t          </div>\n\t\t          <div class="modal__tittle-describe-tittle">About</div>\n\t\t             <p class="modal__tittle-describe">\n\t\t              ${f}\n\t\t                  </p>\n\t\t              <div class="modal__buttons">\n\t\t             <button class="modal__button-watched" id="watched">add to Watched</button>\n\t\t              <button class="modal__button-queue" id="queue">add to queue</button>\n\t\t\t\t\t  <button class="modal__button-trailer" id="zwiastun">zwiastun</button>\n\t\t\t\t\t  \n\t\t                </div>\n\t\t       </div>\n\t\t</div>`;const b=(0,s.qs)("#watched"),h=(0,s.qs)("#queue");(0,s.qs)("#zwiastun").addEventListener("click",(()=>{y().then((t=>{document.querySelector("iframe").src=`https://www.youtube.com/embed/${t}`;const e=document.querySelector("[data-mod]");e.style.display="block";document.querySelector("[data-mod-close]").addEventListener("click",(t=>{t.preventDefault(),e.style.display="none"}));const n=document.querySelector("[data-mod]");n.addEventListener("click",(t=>{t.target===n&&(e.style.display="none")}));window.addEventListener("keydown",(t=>{"Escape"!==t.key&&27!==t.keyCode||(e.style.display="none")}))}))})),c.find((t=>t.id===e.id))?(b.style.background="green",b.textContent="DELETED FROM WATCHED"):(b.style.background="#ff6b01",b.textContent="ADD TO WATCHED"),r.find((t=>t.id===e.id))?(h.style.background="#545454",h.textContent="DELETED FROM QUEUE"):(h.style.background="white",h.textContent="ADD TO QUEUE"),b.addEventListener("click",(t=>{c.find((t=>t.id===e.id))?(b.style.background="#ff6b01",b.textContent="ADD TO WATCHED"):(b.style.background="green",b.textContent="DELETED FROM WATCHED"),v(e)})),h.addEventListener("click",(t=>{r.find((t=>t.id===e.id))?(h.style.background="white",h.textContent="ADD TO QUEUE"):(h.style.background="#545454",h.textContent="DELETED FROM QUEUE"),m(e)}))}catch(t){console.log(t.message)}};b.addEventListener("click",(t=>{t.preventDefault(),h()}));E.addEventListener("click",(t=>{t.target===E&&h()}));window.addEventListener("keydown",(t=>{"Escape"!==t.key&&27!==t.keyCode||h()})),f.addEventListener("click",(t=>{const e=t.target.closest(".MovieCard");if(e){const t=e.dataset.movie;k(t).then((()=>h())).catch((t=>console.error(t)))}})),y.addEventListener("click",(t=>{const e=t.target.closest(".movie-container__card");if(e){const t=e.dataset.id;k(t).then((()=>h())).catch((t=>console.error(t)))}}));
//# sourceMappingURL=index.1f55bed3.js.map