
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

const pageCall = (page) =>{

  let urlSplit = lastUrl.split('?');
  
  let queryParams = urlSplit[1].split('&');
  
  let key = queryParams[queryParams.length -1].split('=');
 
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