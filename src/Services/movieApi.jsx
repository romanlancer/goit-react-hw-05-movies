const BASE_URL = "https://api.themoviedb.org";
const API_KEY = "e236468c654efffdf9704cd975a74a96";

export const fetchTrends = async () => {
  try {
    const url = `${BASE_URL}/3/trending/movie/week?api_key=${API_KEY}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    return error;
  }
};

export const fetchGenres = async () => {
  try {
    const url = `${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}`;
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    return error;
  }
};
