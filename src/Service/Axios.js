import axios from "axios";

export async function getPlanets(url) {
  return axios.get(url).then((res) => res.data);
}

export async function getPlanetsData(url) {
  return axios.get(url).then((res) => {
    return res.data;
  });
}
