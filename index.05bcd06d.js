function e(e,n,t,i){Object.defineProperty(e,n,{get:t,set:i,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},d=n.parcelRequired7c6;null==d&&((d=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var d={id:e,exports:{}};return t[e]=d,n.call(d.exports,d,d.exports),d.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){i[e]=n},n.parcelRequired7c6=d),d.register("fHyLY",(function(n,t){e(n.exports,"showHideLoader",(()=>i));const i=e=>{"block"===e.style.display?e.style.display="none":e.style.display="block"}})),d.register("dlUZe",(function(n,t){e(n.exports,"default",(()=>s));var i=d("b08YZ");var s={loader:(0,i.qs)(".loader"),loaderModal:(0,i.qs)(".modal__loader")}})),d.register("iVSHh",(function(n,t){e(n.exports,"API_KEY",(()=>i)),e(n.exports,"BASE_URL",(()=>d)),e(n.exports,"TREND_URL",(()=>s));const i="bd1f74544935b756e43565ea50ae79a5",d="https://api.themoviedb.org/3",s=`${d}/trending/movie/week?api_key=${i}`})),d("10Jwl"),d("fHyLY"),d("dlUZe");var s={movieGenres:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]},o=d("iVSHh"),a=d("fHyLY"),l=d("dlUZe"),r=d("b08YZ");const c=document.getElementById("prev"),m=document.getElementById("next"),p=document.getElementById("current"),y=document.getElementById("prv"),f=document.getElementById("prvprv"),u=document.getElementById("nxt"),v=document.getElementById("nxtnxt");let g=1,x=2,L=2,_=3,b=1,h=1,E=1,T="",w=100;const H=(0,r.qs)(".movie-section__card"),I=e=>{T=e,(0,a.showHideLoader)(l.default.loader),fetch(e).then((e=>e.json())).then((e=>{(0,a.showHideLoader)(l.default.loader),0!==e.results.length&&($(e.results),g=e.page,x=g+1,L=g+1,_=g+2,E=g-1,b=g-1,h=g-2,w=e.total_pages,p.innerText=g,u.innerText=L,v.innerText=_,y.innerText=b,f.innerText=h,g<=2?(f.style.display="none",f.innerText=1):f.style.display="flex",g+1>=w?(v.style.display="none",v.innerText=w):v.style.display="flex",g<=1?(c.classList.add("disabled"),m.classList.remove("disabled"),y.style.display="none",y.innerText=1):g>=w?(c.classList.remove("disabled"),m.classList.add("disabled"),u.style.display="none"):(c.classList.remove("disabled"),m.classList.remove("disabled"),y.style.display="flex",u.style.display="flex"))}))};I(o.TREND_URL);const $=e=>{H.innerHTML="",e.forEach((e=>{const{title:n,name:t,release_date:i,first_air_date:d,poster_path:o,genre_ids:a}=e,l=o?`https://image.tmdb.org/t/p/${window.devicePixelRatio>1?"w780":"w500"}/${o}`:n,r=i?i.slice(0,4):d,c=n||t;let m=a.map((e=>{const n=s.movieGenres.find((n=>n.id===e));return n?[`${n.name}`]:""})).filter(Boolean);m=m.length>2?m.slice(0,3).join(", "):m.join(", ");const p=document.createElement("li");p.classList.add("movie-container__card"),p.setAttribute("data-id",`${e.id}`),p.innerHTML=`\n\n    <div class="poster"><img class="poster__img" src="${l}" alt="${n} poster" loading="lazy" /></div>\n    <div class="movieInfo">\n       <p class="movieInfo__item movieInfo--title">${c}</p>\n       <p class="movieInfo__item">\n             ${m} | ${r}\n      </p>\n    </div>\n    `,H.appendChild(p)}))};c.addEventListener("click",(()=>{E>0&&k(E)})),y.addEventListener("click",(()=>{b>0&&k(b)})),f.addEventListener("click",(()=>{h>0&&k(h)})),m.addEventListener("click",(()=>{x<=w&&k(x)})),u.addEventListener("click",(()=>{L<=w&&k(L)})),v.addEventListener("click",(()=>{_<=w&&k(_)}));const k=e=>{const n=T.split("?"),t=n[1].split("&"),i=t[t.length-1].split("=");if("page"!==i[0]){I(T+"&page="+e)}else{i[1]=e.toString();const d=i.join("=");t[t.length-1]=d;const s=t.join("&"),o=n[0]+"?"+s;I(o)}document.body.scrollTop=document.documentElement.scrollTo({top:0,behavior:"smooth"})};
//# sourceMappingURL=index.05bcd06d.js.map
