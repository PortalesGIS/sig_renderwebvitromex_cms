<template>
<!-- //! change background bg-rock-table -->
<div class="h-screen w-full overflow-hidden">
    <div class="h-5 xl:h-16"></div>    
    <div class="h-5/6 overflow-hidden">
    <div class="overflow-hidden ">
      <p class="uppercase monserrat font-bold text-center text-5xl text-white pl-10 py-7">
      Usuarios
      </p>
    </div>
      <div class="w-full h-full px-5 ">
        <div class="flex items-center w-full shadow-4xl  bg-f5 h-16">
      <UsersFiltercomponentVue/>
    </div>
    <div class="w-full  shadow-4xl  bg-f5">
     <UsersTableComponentVue/>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
import UsersFiltercomponentVue from '../filters/UsersFiltercomponent.vue'
import UsersTableComponentVue from '../tables/UsersTableComponent.vue'
export default {
  components: {
    UsersFiltercomponentVue,
    UsersTableComponentVue,
  },
}
</script>

<style>

</style>