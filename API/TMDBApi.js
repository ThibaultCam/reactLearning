// API/TMDBApi.js

const API_TOKEN = "fbdb728bdd72d3de57798a647e396522";

export function getFilmsFromApiWithSearchedText(text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text

    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}