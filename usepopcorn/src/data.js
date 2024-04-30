const KEY = "2363428c";
export const searchURL = (title) =>
  `http://www.omdbapi.com/?apikey=${KEY}&s=${title}`;
export const selectURL = (id) =>
  `https://www.omdbapi.com/?apikey=${KEY}&i=${id}`;

export async function getJSON(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
}
