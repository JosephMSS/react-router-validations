import { UserInfo } from "../models";

const URL = "https://rickandmortyapi.com/api/";
const characterURL = `${URL}character/`;
export const getMorty = () => {
  return new Promise<UserInfo>((resolve, reject) => {
    fetch(`${characterURL}2`).then((response) => {
      return resolve(response.json());
    });
  });
};
