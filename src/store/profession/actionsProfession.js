export const openModalProfession = ({ commit }, payload) => {
  commit("openProfessionModal", payload);
};

export const eliminatedProfession = ({ commit }, payload) => {
  let dataEliminated = [
    {
      modalProfesion: false,
      eliminateProfesion: true,
      inputAdd: false,
      inputEdit: true,
    },
    {
        numberEliminated: payload
    }
  ];
  commit("eliminatedProfessionMutations", dataEliminated);
};

export const getAllProfession = async ({ commit }, payload) => {
  let dataTest = [
    {
      id: 1,
      profession: "Arquitecto",
      status: true,
    },
    {
      id: 2,
      profession: "Diseño",
      status: true,
    },
    {
      id: 3,
      profession: "Otro",
      status: true,
    },
  ];
  payload = dataTest;
  commit("setProfession", payload);
};

export const editProfession = async ({ commit }, payload) => {
  // console.log(payload);
  commit("editProfession", payload.newState);
};

export const createProfession = async ({ commit }, payload) => {
  commit("addProfession", payload);
};
