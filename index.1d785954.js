var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},a={},i=t.parcelRequired7c6;null==i&&((i=function(t){if(t in e)return e[t].exports;if(t in a){var i=a[t];delete a[t];var l={id:t,exports:{}};return e[t]=l,i.call(l.exports,l,l.exports),l.exports}var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){a[t]=e},t.parcelRequired7c6=i);var l=i("hGVxz"),n=i("b08YZ"),s=i("flMJi");const d="watched",o="queue",r=JSON.parse(localStorage.getItem(d))||[],c=JSON.parse(localStorage.getItem(o))||[],_=(t,e)=>{var a;r.find((e=>e.id===t.id))||(r.push(t),a=r,localStorage.setItem(d,JSON.stringify(a)))},v=(t,e)=>{var a;c.find((e=>e.id===t.id))||(c.push(t),a=c,localStorage.setItem(o,JSON.stringify(a)))},u=(0,n.qs)(".Gallery"),m=(0,n.qs)(".movie-section__card"),p=(0,n.qs)("[data-modal]"),g=(0,n.qs)("[data-modal-close]"),f=(0,n.qs)(".mov"),E=()=>p.classList.toggle("is-hidden"),b=async t=>{try{const e=await(async t=>(await l.default.get(`${s.BASE_URL}/movie/${t}?api_key=${s.API_KEY}&language=en-US`)).data)(t),a=e.title,i=e.vote_average.toFixed(1),d=e.vote_count,o=e.popularity.toFixed(1),u=e.original_title,m=e.genres.map((t=>t.name)).join(", "),p=e.overview,g=`https://image.tmdb.org/t/p/w500${e.poster_path}`;f.innerHTML=` \n\t\t<div class="box modal__row">\n              <img class="modal__poster" src=${g} alt="plakat filmu" sizes="(min-width: 1200px) 370px" />\n\t          <div>\n\t\t          <div class="modal__tittle-film">${a}\n\t\t\t\t  </div>\n\t\t          <div class="modal__values">\n\t\t                 <ul class="modal__list">\n\t\t\t\t\t\t <li class="modal__details"> \n\t\t\t\t\t\t <div class="modal__list-left">Vote&nbsp/&nbspVotes</div>\n\t\t\t\t\t\t <div class="modal__list-right">\n\t\t\t\t\t\t            <span class="modal__vote-details">${i}</span>\n\t\t\t\t\t\t\t\t\t<span class="modal__list-left">/</span> \n\t\t\t\t\t\t\t\t\t<span class="modal__vote-summary">${d}</span>\n\t\t\t\t\t\t </div>\n\t\t\t\t\t\t </li> \n\t\t\t\t\t\t <li class="modal__details"> \n\t\t\t\t\t\t <div class="modal__list-left">Popularity</div>\n\t\t\t\t\t\t <div class="modal__list-right">${o}</div>\n\t\t\t\t\t\t </li> \n\t\t\t\t\t\t <li class="modal__details"> \n\t\t\t\t\t\t <div class="modal__list-left">Original&nbspTitle</div>\n\t\t\t\t\t\t <div class="modal__list-right">${u}</div>\n\t\t\t\t\t\t </li> \n\t\t\t\t\t\t <li class="modal__details"> \n\t\t\t\t\t\t <div class="modal__list-left">Genre</div>\n\t\t\t\t\t\t <div class="modal__list-right">${m}</div>\n\t\t\t\t\t\t </li> \n\t\t\t\t\t\t </ul>\n\t\t                 \n\t\t          </div>\n\t\t          <div class="modal__tittle-describe-tittle">About</div>\n\t\t             <p class="modal__tittle-describe">\n\t\t              ${p}\n\t\t                  </p>\n\t\t              <div class="modal__buttons">\n\t\t             <button class="modal__button-watched" id="watched">add to Watched</button>\n\t\t              <button class="modal__button-queue" id="queue">add to queue</button>\n\t\t                </div>\n\t\t       </div>\n\t\t</div>`;const E=(0,n.qs)("#watched"),b=(0,n.qs)("#queue");if(r.find((t=>t.id==e.id)))return E.style.background="green",void(E.textContent="DELETED FROM WATCHED");if(c.find((t=>t.id==e.id)))return b.style.background="green",void(b.textContent="DELETED FROM QUEUE");E.addEventListener("click",(t=>{t.preventDefault(),E.style.background="green",E.textContent="DELETED FROM WATCHED",_(e)})),b.addEventListener("click",(t=>{t.preventDefault(),b.style.background="green",b.textContent="DELETED FROM QUEUE",v(e)}))}catch(t){console.log(t.message)}};g.addEventListener("click",(t=>{t.preventDefault(),E()}));p.addEventListener("click",(t=>{t.target===p&&E()}));window.addEventListener("keydown",(t=>{"Escape"!==t.key&&27!==t.keyCode||E()})),u.addEventListener("click",(t=>{const e=t.target.closest(".MovieCard");if(e){const t=e.dataset.movie;E(),b(t)}})),m.addEventListener("click",(t=>{const e=t.target.closest(".movie-container__card");if(e){const t=e.dataset.id;E(),b(t)}}));
//# sourceMappingURL=index.1d785954.js.map
