<template>
<!-- //! change background bg-rock-table -->
<div class="h-screen w-full overflow-hidden">
    <div class="h-5 xl:h-16"></div>    
    <div class="h-5/6 overflow-hidden">
    <div class="overflow-hidden pl-64">
      <p class="uppercase font-bold text-5xl text-center monserrat text-white py-7">
      Administradores
      </p>
    </div>
      <div class="w-full h-full px-5 ">
        <div class="flex items-center w-full shadow-4xl bg-f5 h-16">
      <AdminFilterComponentVue
        :adminsSelected="adminSelected"
      />
    </div>
    <div class="w-full h-3/6 xl:h-4/6">
     <AdminTableComponentVue
      :onSelectedAdmin="selectedAdmin"
     />
    </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AdminFilterComponentVue from '../filters/AdminFilterComponent.vue'
import AdminTableComponentVue from '../tables/AdminTableComponent.vue'
export default {
  components: {
    AdminFilterComponentVue,
    AdminTableComponentVue
  },
 data() {
   return {
     adminSelected: [],
   }   
 },
 methods: {
   selectedAdmin(idAdmin) {
     const index = this.adminSelected.findIndex(elm =>elm ===idAdmin)
            if(index>=0){
                this.adminSelected.splice(index,1)
            }
            else{
             this.adminSelected.push(idAdmin)
            }          
   }
 },
 computed: {
    ...mapGetters(["getAllAdmins"]),
  },
   watch: {
    getAllAdmins(){
      // console.log(state.length);
      this.adminSelected = []
    }
  }
}
</script>

<style>

</style>