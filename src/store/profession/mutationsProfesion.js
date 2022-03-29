export const openProfessionModal = (state, payload) => {
  state.uiNewProfession = payload;
};

export const eliminatedProfessionMutations = (state, payload) => {
  state.uiNewProfession = payload[0];
  state.eliminatedNumber = payload[1].numberEliminated;
};

export const setProfession = (state, payload) => {
  state.allProfession = payload;
};

export const deleteProfession = (state) => {
  state.uiNewProfession = {
    modalProfesion: true,
    eliminateProfesion: false,
    inputAdd: false,
    inputEdit: false,
  };
};
