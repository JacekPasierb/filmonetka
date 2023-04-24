import { API_KEY, BASE_URL,  } from "../js/API_variables";

const fetchMovieInfo = async (movie_id) => {
    try{
    const response = await fetch(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`);
    const data = await response.json();
    return data;
} catch (error) {
    console.log(error.message);
}
};

const getArrayMovies = async (arr) => {
    const arrayMovies = arr.map(async movie_id => {
    try{
        const response = await fetch(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
        const data = await response.json();
        return data;
    }    catch (error) {
        console.log(error.message);
    }
    });
    const dataResult = await Promise.all(arrayMovies);
    return dataResult;
}
export {
    fetchMovieInfo,
    getArrayMovies,
}

