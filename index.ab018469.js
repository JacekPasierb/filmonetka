var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var o=i[e];delete i[e];var t={id:e,exports:{}};return n[e]=t,o.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){i[e]=n},e.parcelRequired7c6=o),o("6jdKP");const t="bd1f74544935b756e43565ea50ae79a5",a="https://api.themoviedb.org/3";var r={getTrendingMovies:async(e=1)=>{try{const e=await fetch(`${a}/trending/movie/week?api_key=${t}`);if(!e.ok)throw new Error(e.status);return await e.json()}catch(e){console.error(e)}}};var d={movieGenres:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]};const s=document.querySelector(".movie-section__card");r.getTrendingMovies().then((e=>{!function(e){const n=e.map((({title:e,name:n,release_date:i,first_air_date:o,poster_path:t,genre_ids:a})=>{const r=`https://image.tmdb.org/t/p/w500/${t}`,s=i?i.slice(0,4):o.slice(0,4),m=e||n;let c=a.map((e=>{const n=d.movieGenres.find((n=>n.id===e));return n?[`${n.name}`]:""})).filter(Boolean);return c=c.length>2?c.slice(0,2).join(", ")+" (...)":c.join(", "),`<li class="movie-container__card">\n            <div class="poster"><img class="poster__img" src="${r}" alt="${e} poster" loading="lazy" /></div>\n            <div class="movieInfo">\n               <p class="movieInfo__item movieInfo--title">${m}</p>\n               <p class="movieInfo__item">\n                     ${c} | ${s}\n              </p>\n            </div>\n          </li>`})).join("");s.insertAdjacentHTML("beforeend",n)}(e.results)})).catch((e=>{console.log(e)}));
//# sourceMappingURL=index.ab018469.js.map