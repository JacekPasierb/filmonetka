// import Genres from './genres.js';
import { API_KEY, BASE_URL, TREND_URL } from './API_variables.js';

// import { renderMovies } from "./renderMovieCards.js";
import { getTrendMovies } from './trendingMovie.js';
import { lastUrl } from './trendingMovie.js';



const prev = document.getElementById('prev')
const next = document.getElementById('next')
const current = document.getElementById('current')

let currentPage = 1;
let nextPage = 2;
let prevPage = 3;
let lastUrl = '';
let totalPages = 100;

// const moviesGallery = document.querySelector('.movie-section__card');

// getTrendMovies( TREND_URL );

// function getTrendMovies(url) {
//   lastUrl = url
//       fetch(url).then(res => res.json()).then(data => {
 
//         if(data.results.length !== 0){
//         renderMovies(data.results);
//         currentPage = data.page;
//         nextPage = currentPage + 1;
//         prevPage = currentPage - 1;
//         totalPages = data.total_pages;

//         current.innerText = currentPage;

//         if(currentPage <= 1){
//           prev.classList.add('disabled');
//           next.classList.remove('disabled')
//         }else if(currentPage>= totalPages){
//           prev.classList.remove('disabled');
//           next.classList.add('disabled')
//         }else{
//           prev.classList.remove('disabled');
//           next.classList.remove('disabled')
//         }
//       }
//   })
// }

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