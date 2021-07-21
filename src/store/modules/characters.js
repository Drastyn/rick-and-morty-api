import CharacterService from "@/services/character-service";

const characters = {
  namespaced: true,
  state: {
    characters: [],
  },
  mutations: {
    setCharacters(state, characters) {
      state.characters = characters;
    },
  },
  actions: {
    getCharacters({ commit }) {
      return new Promise((resolve, reject) => {
        CharacterService.getCharacters()
          .then((response) => {
            commit("setCharacters", response);
            resolve();
          })
          .catch((error) => reject(error));
      });
    },
  },
};

export default characters;
