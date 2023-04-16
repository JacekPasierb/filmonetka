const API_KEY = 'bd1f74544935b756e43565ea50ae79a5';
const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;
const TREND_DAY_URL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
const SEARCH_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}`;
const ID_URL = `${BASE_URL}/movie/`;
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const VIDEO_URL = `/videos?api_key=${API_KEY}&language=en-US`;

export { API_KEY, BASE_URL, TREND_URL, SEARCH_URL, ID_URL, BASE_IMG_URL, VIDEO_URL, TREND_DAY_URL };
