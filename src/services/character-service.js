import axios from "axios";

const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
});

export default {
  getCharacters(params) {
    return instance
      .get(`character?page=${params.page}`)
      .then((response) => response.data)
      .catch((error) => console.log(error));
  },
};
