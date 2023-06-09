import { API_KEY, BASE_URL } from "../js/api-variables";
const data = [];

const getWatchedMovie = async (movies, page = 1) => {
	try {
		const response = await fetch(
			`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`,
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error.message);
	}
};
