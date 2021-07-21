import axios from "axios";

const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
});

export default {
  getCharacters() {
    return instance
      .get("character")
      .then((response) => (response.data))
      .catch((error) => console.log(error));
  },
};
