import { API_KEY, BASE_URL } from './API_variables.js';

const getTrendingMovies = async (page = 1) => {
  try {
    const resp = await fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);

    if (!resp.ok) throw new Error(resp.status);

    return await resp.json();
  } catch (err) {
    console.error(err);
  }
};
const Trending = {
  getTrendingMovies,
};

export default Trending;
