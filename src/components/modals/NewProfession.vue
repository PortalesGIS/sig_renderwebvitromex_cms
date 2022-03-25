<template>
  <div
    v-if="getUiNewProfession.modalProfesion"
    class="z-50 fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-20"
  >
    >
    <div class="w-full h-full flex items-center justify-center">
      <div class="bg-white" style="width: 664px; max-height: 600px">
        <div class="flex justify-end">
          <img
            @click="closeModal"
            class="mr-3 mt-3 cursor-pointer w-3 h-3"
            src="../../assets/cerrar.svg"
            alt=""
          />
        </div>
        <div class="monserrat">
          <div class="mt-3 px-8">
            <p class="uppercase text-xl text-force-black font-bold">
              ADMINISTRAR PROFESIONES
            </p>
          </div>
          <div class="mt-6 h-8 bg-black">
            <div class="px-8 flex justify-start items-center h-full">
              <p class="text-force-white text-sm font-normal">Profesiones</p>
            </div>
          </div>
        </div>
        <div class="overflow-auto" style="max-height: 306px">
          <div
            class=""
            v-for="(profesion, index) in getStateProfession"
            :key="index"
          >
            <div
              class="h-8 px-8 flex items-center justify-between"
              :class="isImpar(index)"
            >
              <div>
                <form @submit.prevent="newProfession">
                  <input
                    type="text"
                    :disabled="isHasEdit(index)"
                    v-model="profesion.profession"
                    class="
                      appearance-none
                      bg-transparent
                      text-gray-700
                      leading-tight
                      focus:outline-none
                    "
                    :class="isHasEditColor(index) && 'border-b border-gray-400'"
                  />
                </form>
              </div>
              <div class="flex gap-x-10" v-if="isHasEdit(index)">
                <button @click="editaProfession(index)">
                  <img
                    class="object-cover h-6 w-6"
                    src="../../assets/icons/editar.svg"
                    alt=""
                  />
                </button>
                <button @click="eliminated(profesion.id)">
                  <img
                    class="object-cover h-6 w-6"
                    src="../../assets/icons/eliminarProfession.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="h-8 px-8 mt-2">
          <form
            @submit.prevent="newProfession"
            v-if="getUiNewProfession.inputAdd && !getUiNewProfession.inputEdit"
          >
            <div>
              <input
                type="text"
                class="
                  appearance-none
                  bg-transparent
                  border-b
                  text-gray-700
                  leading-tight
                  focus:outline-none
                  border-gray-400
                "
                v-model="name"
                placeholder="Agregar Profesión"
              />
            </div>
          </form>
        </div>
        <div class="px-3 h-20" style="margin-top: 1rem">
          <div class="h-px bg-d5"></div>
          <div class="h-full flex justify-center items-center">
            <div
              v-if="
                !getUiNewProfession.inputAdd && !getUiNewProfession.inputEdit
              "
            >
              <button
                class="border-black bg-black text-force-white h-8 w-52"
                @click="addNewProfesion"
              >
                <span class="monserrat text-sm"> Agregar profesión </span>
              </button>
            </div>
            <div v-else class="flex gap-x-3">
              <button
                class="border-black border bg-black text-force-white h-8 w-36"
                @click="newProfession"
              >
                <span class="monserrat text-sm">
                  {{
                    !getUiNewProfession.inputEdit
                      ? "Agregar"
                      : "Guardar cambios"
                  }}
                </span>
              </button>
              <button
                class="border-black border bg-white text-force-black h-8 w-36"
                @click="cancelNewProfession"
              >
                <span class="monserrat text-sm"> Cancelar </span>
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
  data() {
    return {
      name: "",
      editInputs: [],
    };
  },
  methods: {
    ...mapActions([
      "openModalProfession",
      "getAllProfession",
      "editProfession",
      "createProfession",
      "eliminatedProfession"
    ]),
    closeModal() {
      this.name = "";
      this.openModalProfession({
        modalProfesion: false,
        eliminateProfesion: false,
        inputAdd: false,
        inputEdit: false,
      });
    },
    isImpar(index) {
      if (index % 2 == 0) {
        return "bg-f5";
      } else {
        return "bg-white";
      }
    },
    openModal() {
      this.openModalProfession({
        modalProfesion: true,
        eliminateProfesion: false,
        inputAdd: false,
        inputEdit: false,
      });
    },
    addNewProfesion() {
      this.openModalProfession({
        modalProfesion: true,
        eliminateProfesion: false,
        inputAdd: true,
        inputEdit: false,
      });
    },
    cancelNewProfession() {
      this.name = ""
      this.editInputs = [];
      this.openModalProfession({
        modalProfesion: true,
        eliminateProfesion: false,
        inputAdd: false,
        inputEdit: false,
      });
    },
    async newProfession() {
      if (this.getUiNewProfession.inputEdit) {
        if (this.editInputs.length > 0) {
          let filterEdits = [];
          this.editInputs.map((number) => {
            let data = this.getStateProfession[number];
            filterEdits.push({
              id: data.id,
              profession: data.profession,
              status: true
            });
          });
          await this.editProfession(filterEdits);
          this.cancelNewProfession()
        }
      } else {
        if (this.name !== "") {
          await this.createProfession({ profession: this.name});
          this.cancelNewProfession()
        }
      }
      await this.getAllProfession();
    },
    editaProfession(index) {
      this.editInputs.push(index);
      this.openModalProfession({
        modalProfesion: true,
        eliminateProfesion: false,
        inputAdd: false,
        inputEdit: true,
      });
    },
    isHasEdit(index) {
      return !this.editInputs.includes(index);
    },
    isHasEditColor(index) {
      return this.editInputs.includes(index);
    },
    eliminated(index){
      this.eliminatedProfession(index)
    }
  },
  async mounted() {
    await this.getAllProfession();
  },
  async created() {
    await this.getAllProfession();
  },
  computed: {
    ...mapGetters({
      getUiNewProfession: "getUiNewProfession",
      getStateProfession: "getStateProfession",
    }),
  },
};
</script>

<style>
</style>