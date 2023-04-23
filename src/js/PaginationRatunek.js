import Genres from './genres.js';
import { API_KEY, BASE_URL, TREND_URL } from './API_variables.js';

// import { renderMovies } from "./renderMovieCards";
// import { getTrendMovies } from './trendingMovie.js';
// import { currentPage } from "./trendingMovie.js"

const prev = document.getElementById('prev')
const next = document.getElementById('next')
const current = document.getElementById('current')

let currentPage = 1;
let nextPage = 2;
let prevPage = 3;
let lastUrl = '';
let totalPages = 100;


const moviesGallery = document.querySelector('.movie-section__card');

getTrendMovies(TREND_URL);

function getTrendMovies(url) {
  lastUrl = url
      fetch(url).then(res => res.json()).then(data => {
 
        if(data.results.length !== 0){
        renderMovies(data.results);
        currentPage = data.page;
        nextPage = currentPage + 1;
        prevPage = currentPage - 1;
        totalPages = data.total_pages;

        current.innerText = currentPage;

        if(currentPage <= 1){
          prev.classList.add('disabled');
          next.classList.remove('disabled')
        }else if(currentPage>= totalPages){
          prev.classList.remove('disabled');
          next.classList.add('disabled')
        }else{
          prev.classList.remove('disabled');
          next.classList.remove('disabled')
        }
      }
  })
}

function renderMovies(data) {
  moviesGallery.innerHTML = '';

  data.forEach(markup => {
    const { title, name, release_date, first_air_date, poster_path, genre_ids } = markup;
    const moviePoster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    const movieDate = release_date.slice(0, 4) : first_air_date.slice(0, 4)
    const movieName = title ? title : name;
    let matchedGenres = genre_ids
    .map(id => {
      const genre = Genres.movieGenres.find(genre => genre.id === id);
      return genre ? [`${genre.name}`] : '';
    })
    .filter(Boolean);

  // Wyświetlane są tylko dwa pierwsze gatunki filmowe
  if (matchedGenres.length > 2) {
    matchedGenres = matchedGenres.slice(0, 2).join(', ') + ' (...)';
  } else {
    matchedGenres = matchedGenres.join(', ');
  }
    const markupEl = document.createElement('li');
    markupEl.classList.add('movie-container__card');
    markupEl.innerHTML = 
    `
    <div class="poster"><img class="poster__img" src="${moviePoster}" alt="${title} poster" loading="lazy" /></div>
    <div class="movieInfo">
       <p class="movieInfo__item movieInfo--title">${movieName}</p>
       <p class="movieInfo__item">
             ${matchedGenres} | ${movieDate}
      </p>
    </div>
    `
    moviesGallery.appendChild(markupEl);
  })
}

prev.addEventListener('click', () => {
  if(prevPage > 0){
    pageCall(prevPage);
  }
})

next.addEventListener('click', () => {
  if(nextPage <= totalPages){
    pageCall(nextPage);
  }
})

// console.log(lastUrl)

function pageCall(page){
  let urlSplit = lastUrl.split('?');
  console.log(urlSplit);
  let queryParams = urlSplit[1].split('&');
  console.log(queryParams);
  let key = queryParams[queryParams.length -1].split('=');
  console.log(key);
  if(key[0] != 'page'){
    let url = lastUrl + '&page='+page
    getTrendMovies(url)
  }else{
    key[1] = page.toString();
    let a = key.join('=');
    queryParams[queryParams.length -1] = a;
    let b = queryParams.join('&');
    let url = urlSplit[0] +'?'+ b
    getTrendMovies(url);
  }
}