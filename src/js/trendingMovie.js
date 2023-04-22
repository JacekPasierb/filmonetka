import { API_KEY, BASE_URL, TREND_URL } from './API_variables.js';
import { renderMovies } from './renderMovieCards.js';

// Próba przeniesienia w pełni działajacego kodu aby struktura była rozbita tak jak u Gabriela
// ale paginacja nie działa w 100%

const prev = document.getElementById('prev')
const next = document.getElementById('next')
const current = document.getElementById('current')

let currentPage = 1;
let nextPage = 2;
let prevPage = 3;
let lastUrl = '';
let totalPages = 100;

getTrendMovies(TREND_URL);

export function getTrendMovies(url) {
  lastUrl = url
      fetch(url).then(res => res.json()).then(data => {
console.log(data)
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


// ORYGINALNY KOD GABRIELA
// const getTrendingMovies = async (page = 1) => {
//   try {
//     const resp = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);

//     if (!resp.ok) throw new Error(resp.status);

//     return await resp.json();
//   } catch (err) {
//     console.error(err);
//   }
// };
// const Trending = { getTrendingMovies };

// export default Trending;


