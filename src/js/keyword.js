import axios from 'axios';
import tools from './tools';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = '8c57aa16de6d4d7f2d4ddf4e537ebfb8';

const REFS = {
  FORM: tools.qs('.HeaderInput'),
  FORM_NOTIFY: tools.qs('.HeaderInputNotify'),
  GALLERY: tools.qs('.Gallery'),
};

const getByKeyword = async (query, page) => {
  const url = `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
  return await axios
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
};

const createGalleryMarkup = movies => {
  return movies
    .map(movie => {
      const genres = genresGalleryInfo(movie.genre_ids);
      const movieDate = movie.release_date ?? movie.first_air_date ?? null;
      const movieYear = movieDate ? movieDate.slice(0, 4) : 'Unknown year';

      const poster = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        : movie.title;

      return `
      <li class="MovieCard" data-movie="${movie.id}">
        <div class="MoviePoster">
            <img class="MoviePosterImg"
            src="${poster}"
            alt=${movie.title ?? movie.name}
            loading="lazy"
            />
        </div>
        <div class="MovieData">
          <p class="MovieTitle">${movie.title ?? movie.name}</p>
          <p class="MovieInfo">${genres} | ${movieYear}</p>
        </div>
      </li>`;
    })
    .join('');
};

const genresGalleryInfo = array => {
  const genreResult = genresId.reduce((acc, element) => {
    if (Array.isArray(array) && array.includes(element.id)) {
      acc.push(element.name);
    }
    return acc;
  }, []);

  if (!genreResult.length) {
    return 'Unknown genre';
  } else if (genreResult.length > 2) {
    return `${genreResult[0]}, ${genreResult[1]}...`;
  } else {
    return genreResult.join(', ');
  }
};

const genresId = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];

REFS.FORM.addEventListener('submit', SearchByKeywordWrongName);
let query;

function SearchByKeywordWrongName(e) {
  e.preventDefault();
  query = e.target.searchQuery.value.trim();
  let page = 1;
  REFS.FORM_NOTIFY.textContent = '';
  if (!query) {
    setTimeout(() => {
      REFS.FORM_NOTIFY.classList.add('IsHidden');
    }, 10000);
    REFS.FORM_NOTIFY.classList.remove('IsHidden');
    REFS.FORM_NOTIFY.textContent = 'Search result not successful. Enter the correct movie name';
    return;
  }

  getByKeyword(query, page).then(data => {
    if (!data.total_results) {
      setTimeout(() => {
        REFS.FORM_NOTIFY.classList.add('IsHidden');
      }, 10000);
      REFS.FORM_NOTIFY.classList.remove('IsHidden');
      REFS.FORM_NOTIFY.textContent = 'Search result not successful. Enter the correct movie name';
      return;
    }
    REFS.GALLERY.innerHTML = createGalleryMarkup(data.results);
  });
}

document.getElementById('SearchBtn').onclick = function () {
  document.getElementById('HideGalleryOnKeyword').style.display = 'none';
};
