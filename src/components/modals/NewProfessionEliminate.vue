<template>
  <div
    v-if="getUiNewProfession.eliminateProfesion"
    class="z-50 fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-20"
  >
    <div class="w-full h-full flex items-center justify-center">
      <div class="bg-white" style="width: 447px; height: 174px">
        <div class="monserrat">
          <div class="mt-5 px-8">
            <p class="uppercase text-xl text-force-black font-bold">
              Eliminar profesión
            </p>
          </div>
          <div class="mt-3 h-12 px-8 flex items-center text-sm">
            <p>¿Estás seguro que deseas eliminar esta profesión?</p>
          </div>
          <div class="mt-3 h-full flex justify-center items-center">
            <div class="flex gap-x-3">
              <button
                class="border-black border bg-black text-force-white h-8 w-36"
                @click="cancelNewProfession"
              >
                <span class="monserrat text-sm"> Cancelar </span>
              </button>
              <button
                class="border-black border bg-white text-force-black h-8 w-36"
                @click="eliminatedProfession"
              >
                <span class="monserrat text-sm"> Eliminar profesión </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["openModalProfession", "getAllProfession"]),
    openModalProfessions() {
      // this.openModalProfession()
    },
    cancelNewProfession() {
      this.openModalProfession({
        modalProfesion: true,
        eliminateProfesion: false,
        inputAdd: false,
        inputEdit: false,
      });
    },
    eliminatedProfession() {
      this.openModalProfession({
        modalProfesion: true,
        eliminateProfesion: false,
        inputAdd: false,
        inputEdit: false,
      });
    },
  },
  computed: {
    ...mapGetters({
      getUiNewProfession: "getUiNewProfession",
    }),
  },
};
</script>

<style>
</style>