const URL = "https://rickandmortyapi.com/api/";
const characterURL = `${URL}character/`;
export const getMorty = () => {
  return fetch(`${characterURL}/2`).then((response) => response.json());
};
