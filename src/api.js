const BASE_URL = "https://api.themoviedb.org/3/movie";

const API_KEY = "558a876e694085f8a052d267914acde2";

export const getNowPlaying = () => {
  console.log("API호출!");
  return fetch(`${BASE_URL}/now_playing?api_key=${API_KEY}&page=1`).then(
    (res) => res.json()
  );
};
