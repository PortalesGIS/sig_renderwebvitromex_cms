<template>
  <NewProfession ref="modalprofession"/>
  <NewProfessionEliminate ref="modalprofessioneliminated"/>
  <div class="w-full h-full bg-f5">
    <div class="pl-10 w-full grid grid-cols-13 gap-x-4 bg-1f">
      <div class="flex items-center col-span-1">
        <p
          class="text-force-white text-xs font-semibold py-2 moserrat-semibold"
        >
          No.
        </p>
      </div>
      <div class="col-span-2 flex items-center justify-start">
        <p
          class="text-force-white text-xs font-semibold py-2 moserrat-semibold"
        >
          Nombre
        </p>
        <div class="">
          <img
            v-if="stateOfFilters.name"
            @click="filterAlphabetUsers('name')"
            src="../../assets/dropdown.svg"
            class="px-2 cursor-pointer"
            alt=""
          />
          <img
            v-else
            @click="filterAlphabetUsers('name')"
            src="../../assets/dropdown.svg"
            class="px-2 cursor-pointer transform rotate-180"
            alt=""
          />
        </div>
      </div>
      <div class="col-span-2 flex items-center justify-start">
        <p
          class="text-force-white text-xs font-semibold py-2 moserrat-semibold"
        >
          Apellido
        </p>
        <div class="">
          <img
            v-if="stateOfFilters.lastName"
            @click="filterAlphabetUsers('lastName')"
            src="../../assets/dropdown.svg"
            class="px-2 cursor-pointer"
            alt=""
          />
          <img
            v-else
            @click="filterAlphabetUsers('lastName')"
            src="../../assets/dropdown.svg"
            class="px-2 cursor-pointer transform rotate-180"
            alt=""
          />
        </div>
      </div>
      <div class="col-span-2 flex items-center justify-start">
        <p
          class="text-force-white text-xs font-semibold py-2 moserrat-semibold"
        >
          Correo
        </p>
        <div class="">
          <img
            v-if="stateOfFilters.email"
            @click="filterAlphabetUsers('email')"
            src="../../assets/dropdown.svg"
            class="px-2 cursor-pointer"
            alt=""
          />
          <img
            v-else
            @click="filterAlphabetUsers('email')"
            src="../../assets/dropdown.svg"
            class="px-2 cursor-pointer transform rotate-180"
            alt=""
          />
        </div>
      </div>
      <div class="col-span-1 flex items-center justify-start">
        <p
          class="text-force-white text-xs font-semibold py-2 moserrat-semibold"
        >
          Profesión
        </p>
        <div class="">
          <img
            v-if="stateOfFilters.profession"
            @click="filterAlphabetUsers('profession')"
            src="../../assets/dropdown.svg"
            class="px-2 cursor-pointer"
            alt=""
          />
          <img
            v-else
            @click="filterAlphabetUsers('profession')"
            src="../../assets/dropdown.svg"
            class="px-2 cursor-pointer transform rotate-180"
            alt=""
          />
        </div>
      </div>
      <div class="col-span-1 flex items-center justify-start">
        <p
          class="text-force-white text-xs font-semibold py-2 moserrat-semibold"
        >
          País
        </p>
        <div class="">
          <img
            v-if="stateOfFilters.country"
            @click="filterAlphabetUsers('country')"
            src="../../assets/dropdown.svg"
            class="px-2 cursor-pointer"
            alt=""
          />
          <img
            v-else
            @click="filterAlphabetUsers('country')"
            src="../../assets/dropdown.svg"
            class="px-2 cursor-pointer transform rotate-180"
            alt=""
          />
        </div>
      </div>
      <div class="col-span-1 flex items-center justify-start">
        <p
          class="text-force-white text-xs font-semibold py-2 moserrat-semibold"
        >
          Ciudad
        </p>
        <div class="">
          <img
            v-if="stateOfFilters.city"
            @click="filterAlphabetUsers('city')"
            src="../../assets/dropdown.svg"
            class="px-2 cursor-pointer"
            alt=""
          />
          <img
            v-else
            @click="filterAlphabetUsers('city')"
            src="../../assets/dropdown.svg"
            class="px-2 cursor-pointer transform rotate-180"
            alt=""
          />
        </div>
      </div>
      <div class="col-span-1 flex items-center justify-start">
        <p
          class="text-force-white text-xs font-semibold py-2 moserrat-semibold"
        >
          Fecha de Registro
        </p>
        <div class="">
          <img
            v-if="stateOfFilters.createdAt"
            @click="filterAlphabetUsers('createdAt')"
            src="../../assets/dropdown.svg"
            class="px-2 cursor-pointer"
            alt=""
          />
          <img
            v-else
            @click="filterAlphabetUsers('createdAt')"
            src="../../assets/dropdown.svg"
            class="px-2 cursor-pointer transform rotate-180"
            alt=""
          />
        </div>
      </div>
      <div class="col-span-2 flex items-center justify-start">
        <div class="w-full flex justify-center">
          <button 
              type="submit"
              class="bg-4f text-force-white w-44 h-8 text-sm font-medium"
              @click="openModalNewProfession"
              >
              Administrar Profesiones
          </button>
        </div>
      </div>
    </div>
    <div class="pl-10 h-px w-full bg-gray-400"></div>
    <div class="max-h-312px xl:max-h-120 overflow-y-auto bg-f5">
      <div v-for="(user, index) in getAllUsers" :key="index">
        <div v-if="index >= startData && index <= endData">
          <div
            class="pl-10 grid grid-cols-13 gap-x-4 " 
            :class="index % 2 ? 'bg-white' : ''"
          >
            <!-- //* color in number table -->
            <div class="col-span-1">
              <p class="text-force-black text-sm font-normal py-2 monserrat">
                {{ index + 1 }}
              </p>
            </div>
            <div class="col-span-2">
              <p class="text-force-black text-sm font-normal py-2 monserrat">
                {{ user.name }}
              </p>
            </div>
            <div class="col-span-2">
              <p class="text-force-black text-sm font-normal py-2 monserrat">
                {{ user.lastName }}
              </p>
            </div>
            <div class="col-span-2">
              <p
                class="
                overflow-x-auto
                  text-force-black text-sm
                  font-normal
                  py-2
                  monserrat
                "
              >
                {{ user.email }}
              </p>
            </div>
            <div class="col-span-1">
              <p
                class="
                  text-force-black text-sm
                  font-normal
                  py-2
                  overflow-x-auto
                  monserrat
                "
              >
                {{ user.profession }}
              </p>
            </div>
            <div class="col-span-1">
              <p class="text-force-black text-sm font-normal py-2 monserrat">
                {{ user.country }}
              </p>
            </div>
            <div class="col-span-1">
              <p class="text-force-black text-sm font-normal py-2 monserrat">
                {{ user.city }}
              </p>
            </div>
            <div class="col-span-1">
              <p class="text-force-black text-sm font-normal py-2 monserrat">
                {{ user.createdAt.substring(0, 10) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pl-10 py-2 flex items-center w-full justify-between bg-1f">
    <div class="flex items-center">
      <p class="text-force-white font-semibold text-xs pr-2">Total de Filas:</p>
      <div class="border-2 px-1 bg-white">
        <select
          class="
            text-xs
            w-10
            pl-2
            appearance-none
            focus:outline-none
            active:outline-non
          "
          name=""
          id=""
          v-model="numberDataPerPage"
          @change="changeRange"
        >
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="100000">Todo</option>
        </select>
        <i class="fas fa-angle-down w-2"></i>
      </div>
    </div>
    <div class="flex mr-7 items-center">
      <div>
        <!-- <p class="text-force-white font-semibold text-xs">{{startData}}-{{endData}},{{getAllUsers.length}}</p> -->
        <p
          v-if="endData < 10000"
          class="text-force-white font-semibold text-xs"
        >
          {{ startData }}-{{ endData }},{{ getAllUsers.length }}
        </p>
        <p v-else class="text-force-white font-semibold text-xs">Todo</p>
      </div>
      <div class="cursor-pointer ml-7" @click="backPageTable()">
        <img
          src="../../assets/paginador_izquierda.svg"
          style="width: 18px; height: 12px"
          alt=""
        />
      </div>
      <div class="cursor-pointer ml-14" @click="nextPageTable">
        <img
          src="../../assets/paginador_derecha.svg"
          style="width: 18px; height: 12px"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import NewProfession from '../modals/NewProfession.vue'
import NewProfessionEliminate from '../modals/NewProfessionEliminate.vue'
export default {
  components:{
    NewProfession,
    NewProfessionEliminate
  },
  data() {
    return {
      numberDataPerPage: 20,
      startData: 0,
      endData: 20,
      stateOfFilters: {
        name: true,
        lastName: true,
        email: true,
        country: true,
        city: true,
        profession: true,
        date: true,
      },
    };
  },
  methods: {
    ...mapActions(["getAllUsersApp", "filterAlphabet"]),
    openModalNewProfession(){
      this.$refs.modalprofession.openModal()
    },
    async onGetAllUsers() {
      await this.getAllUsersApp();
    },
    changeRange() {
      this.startData = 0;
      this.endData = this.numberDataPerPage;
    },
    filterAlphabetUsers(campToFilter) {
      this.filterAlphabet({
        campToFilter,
        sateChange: this.stateOfFilters[campToFilter],
      });
      this.stateOfFilters[campToFilter] = !this.stateOfFilters[campToFilter];
    },
    nextPageTable() {
      if (this.startData <= -1) {
        this.changeRange();
      } else if (this.endData > this.getAllUsers.length) {
        return;
      } else {
        this.startData = this.endData;
        this.endData =
          parseInt(this.startData) + parseInt(this.numberDataPerPage);
      }
    },
    backPageTable() {
      if (this.startData <= 0) {
        this.changeRange();
      } else {
        this.endData = this.startData;
        this.startData =
          parseInt(this.endData) - parseInt(this.numberDataPerPage);
      }
    },
  },
  computed: {
    ...mapGetters(["getAllUsers"]),
  },
  created() {
    this.onGetAllUsers();
  },
};
</script>

<style scope>
</style>