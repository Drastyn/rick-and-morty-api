import CharacterService from "@/services/character-service";

const characters = {
  namespaced: true,
  state: {
    characters: [],
  },
  mutations: {
    setCharacters(state, setCharacters) {
      state.characters = setCharacters;
    },
  },
  actions: {
    getCharacters({ commit }, params) {
      return new Promise((resolve, reject) => {
        CharacterService.getCharacters(params)
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
