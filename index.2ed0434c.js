function e(e,n,t,i){Object.defineProperty(e,n,{get:t,set:i,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},d=n.parcelRequired7c6;null==d&&((d=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var d={id:e,exports:{}};return t[e]=d,n.call(d.exports,d,d.exports),d.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){i[e]=n},n.parcelRequired7c6=d),d.register("flMJi",(function(n,t){e(n.exports,"API_KEY",(()=>i)),e(n.exports,"BASE_URL",(()=>d)),e(n.exports,"TREND_URL",(()=>l));const i="bd1f74544935b756e43565ea50ae79a5",d="https://api.themoviedb.org/3",l=`${d}/trending/movie/week?api_key=${i}`})),d("10Jwl");const l=e=>{"block"===e.style.display?e.style.display="none":e.style.display="block"};var s={loader:(0,(r=d("b08YZ")).qs)(".loader"),loaderModal:(0,r.qs)(".modal__loader")};var a={movieGenres:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]},o=d("flMJi"),r=d("b08YZ");const c=document.getElementById("prev"),m=document.getElementById("next"),p=document.getElementById("current"),y=document.getElementById("prv"),v=document.getElementById("prvprv"),f=document.getElementById("nxt"),u=document.getElementById("nxtnxt");let g=1,_=2,b=2,x=3,E=1,h=1,L=1,T="",I=100;const k=(0,r.qs)(".movie-section__card"),$=e=>{T=e,l(s.loader),fetch(e).then((e=>e.json())).then((e=>{l(s.loader),0!==e.results.length&&(w(e.results),g=e.page,_=g+1,b=g+1,x=g+2,L=g-1,E=g-1,h=g-2,I=e.total_pages,p.innerText=g,f.innerText=b,u.innerText=x,y.innerText=E,v.innerText=h,g<=2?(v.style.display="none",v.innerText=1):v.style.display="flex",g+1>=I?(u.style.display="none",u.innerText=I):u.style.display="flex",g<=1?(c.classList.add("disabled"),m.classList.remove("disabled"),y.style.display="none",y.innerText=1):g>=I?(c.classList.remove("disabled"),m.classList.add("disabled"),f.style.display="none"):(c.classList.remove("disabled"),m.classList.remove("disabled"),y.style.display="flex",f.style.display="flex"))}))};$(o.TREND_URL);const w=e=>{k.innerHTML="",e.forEach((e=>{const{title:n,name:t,release_date:i,first_air_date:d,poster_path:l,genre_ids:s}=e,o=`https://image.tmdb.org/t/p/w500/${l}`,r=i?i.slice(0,4):d,c=n||t;let m=s.map((e=>{const n=a.movieGenres.find((n=>n.id===e));return n?[`${n.name}`]:""})).filter(Boolean);m=m.length>2?m.slice(0,3).join(", "):m.join(", ");const p=document.createElement("li");p.classList.add("movie-container__card"),p.setAttribute("data-id",`${e.id}`),p.innerHTML=`\n\n    <div class="poster"><img class="poster__img" src="${o}" alt="${n} poster" loading="lazy" /></div>\n    <div class="movieInfo">\n       <p class="movieInfo__item movieInfo--title">${c}</p>\n       <p class="movieInfo__item">\n             ${m} | ${r}\n      </p>\n    </div>\n    `,k.appendChild(p)}))};c.addEventListener("click",(()=>{L>0&&B(L)})),y.addEventListener("click",(()=>{E>0&&B(E)})),v.addEventListener("click",(()=>{h>0&&B(h)})),m.addEventListener("click",(()=>{_<=I&&B(_)})),f.addEventListener("click",(()=>{b<=I&&B(b)})),u.addEventListener("click",(()=>{x<=I&&B(x)}));const B=e=>{let n=T.split("?"),t=n[1].split("&"),i=t[t.length-1].split("=");if("page"!=i[0]){$(T+"&page="+e)}else{i[1]=e.toString();let d=i.join("=");t[t.length-1]=d;let l=t.join("&"),s=n[0]+"?"+l;$(s)}document.body.scrollTop=document.documentElement.scrollTo({top:0,behavior:"smooth"})};
//# sourceMappingURL=index.2ed0434c.js.map
