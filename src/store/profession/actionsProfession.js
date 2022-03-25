import { baseUrl } from "../../types/data";

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
      numberEliminated: payload,
    },
  ];
  commit("eliminatedProfessionMutations", dataEliminated);
};

export const fetchEliminateData = async ({ commit }, payload) => {
  let myHeaders = new Headers();
  myHeaders.append("key", `${localStorage.getItem("token")}`);
  myHeaders.append("Content-Type", `application/json`);
  let requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    body: JSON.stringify({
      id: payload,
    }),
    redirect: "follow",
  };
  await fetch(`${baseUrl}/api/profession/delete`, requestOptions)
  commit("deleteProfession");
};

export const getAllProfession = async ({ commit }) => {
  const response = await fetch(`${baseUrl}/api/profession/`);
  const { profession } = await response.json();
  commit("setProfession", profession);
};

export const editProfession = async ({ commit }, payload) => {
  await Promise.all(
    payload.map(async (profession) => {
      await fetch(`${baseUrl}/api/profession/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          profession: profession.profession,
          id: profession.id,
        }),
      });
    })
  );
  console.log(commit);
};

export const createProfession = async ({ commit }, payload) => {
  console.log(commit);
  await fetch(`${baseUrl}/api/profession/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      profession: payload.profession,
    }),
  });
};
