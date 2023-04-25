import Genres from './genres.js';
import { API_KEY, BASE_URL, TREND_URL } from './API_variables.js';
import { showHideLoader } from './loader';
import refs from './refs';

// import { renderMovies } from "./renderMovieCards";
// import { getTrendMovies } from './trendingMovie.js';
// import { currentPage } from "./trendingMovie.js"

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const current = document.getElementById('current');
const prv = document.getElementById('prv');
const prvprv = document.getElementById('prvprv');
const nxt = document.getElementById('nxt');
const nxtnxt = document.getElementById('nxtnxt');

let currentPage = 1;
let nextPage = 2;
let nxtPage = 2;
let nxtnxtPage = 3;
let prvPage = 1;
let prvprvPage = 1;
let prevPage = 1;
let lastUrl = '';
let totalPages = 100;

const moviesGallery = document.querySelector('.movie-section__card');

getTrendMovies(TREND_URL);

function getTrendMovies(url) {
  lastUrl = url;
  showHideLoader(refs.loader);
  fetch(url)
    .then(res => res.json())

    .then(data => {
      showHideLoader(refs.loader);
      if (data.results.length !== 0) {
        renderMovies(data.results);
        currentPage = data.page;
        nextPage = currentPage + 1;
        nxtPage = currentPage + 1;
        nxtnxtPage = currentPage + 2;
        prevPage = currentPage - 1;
        prvPage = currentPage - 1;
        prvprvPage = currentPage - 2;
        totalPages = data.total_pages;

        current.innerText = currentPage;
        nxt.innerText = nxtPage;
        nxtnxt.innerText = nxtnxtPage;
        prv.innerText = prvPage;
        prvprv.innerText = prvprvPage;

        if (currentPage <= 2) {
          prvprv.style.display = 'none';
          prvprv.innerText = 1;
        } else {
          prvprv.style.display = 'flex';
        }
        if (currentPage + 1 >= totalPages) {
          nxtnxt.style.display = 'none';
          nxtnxt.innerText = totalPages;
        } else {
          nxtnxt.style.display = 'flex';
        }

        if (currentPage <= 1) {
          prev.classList.add('disabled');
          next.classList.remove('disabled');
          prv.style.display = 'none';
          prv.innerText = 1;
        } else if (currentPage >= totalPages) {
          prev.classList.remove('disabled');
          next.classList.add('disabled');
          nxt.style.display = 'none';
        } else {
          prev.classList.remove('disabled');
          next.classList.remove('disabled');
          prv.style.display = 'flex';
          nxt.style.display = 'flex';
        }
      }
    });
}

function renderMovies(data) {
  moviesGallery.innerHTML = '';

  data.forEach(markup => {
    const { title, name, release_date, first_air_date, poster_path, genre_ids } = markup;
    const moviePoster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    const movieDate = release_date ? release_date.slice(0, 4) : first_air_date;
    const movieName = title ? title : name;
    let matchedGenres = genre_ids
      .map(id => {
        const genre = Genres.movieGenres.find(genre => genre.id === id);
        return genre ? [`${genre.name}`] : '';
      })
      .filter(Boolean);

    // Wyświetlane są gatunki filmowe
    if (matchedGenres.length > 2) {
      matchedGenres = matchedGenres.slice(0, 3).join(', ');
    } else {
      matchedGenres = matchedGenres.join(', ');
    }
    const markupEl = document.createElement('li');
    markupEl.classList.add('movie-container__card');

    markupEl.setAttribute('data-id', `${markup.id}`);
    markupEl.innerHTML = `

    <div class="poster"><img class="poster__img" src="${moviePoster}" alt="${title} poster" loading="lazy" /></div>
    <div class="movieInfo">
       <p class="movieInfo__item movieInfo--title">${movieName}</p>
       <p class="movieInfo__item">
             ${matchedGenres} | ${movieDate}
      </p>
    </div>
    `;
    moviesGallery.appendChild(markupEl);
  });
}

prev.addEventListener('click', () => {
  if (prevPage > 0) {
    pageCall(prevPage);
  }
});
prv.addEventListener('click', () => {
  if (prvPage > 0) {
    pageCall(prvPage);
  }
});
prvprv.addEventListener('click', () => {
  if (prvprvPage > 0) {
    pageCall(prvprvPage);
  }
});

next.addEventListener('click', () => {
  if (nextPage <= totalPages) {
    pageCall(nextPage);
  }
});
nxt.addEventListener('click', () => {
  if (nxtPage <= totalPages) {
    pageCall(nxtPage);
  }
});
nxtnxt.addEventListener('click', () => {
  if (nxtnxtPage <= totalPages) {
    pageCall(nxtnxtPage);
  }
});

function pageCall(page) {
  let urlSplit = lastUrl.split('?');
  // console.log(urlSplit);
  let queryParams = urlSplit[1].split('&');

  // console.log(queryParams);
  let key = queryParams[queryParams.length - 1].split('=');
  // console.log(key);
  if (key[0] != 'page') {
    let url = lastUrl + '&page=' + page;
    getTrendMovies(url);
  } else {
    key[1] = page.toString();
    let a = key.join('=');
    queryParams[queryParams.length - 1] = a;
    let b = queryParams.join('&');
    let url = urlSplit[0] + '?' + b;
    getTrendMovies(url);
  }
  document.body.scrollTop = document.documentElement.scrollTo({top: 0, behavior: 'smooth'})
}
