<template>
  <div 
        v-if="getUiOpenModalAdmin"
        class="z-50 fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-20">
        <div class="w-full h-full flex items-center justify-center">
            <div class="bg-white" style="width:474px; height:306px">
               <div class="flex justify-end">
                    <img 
                    @click="closeModal"
                    class=" mr-3 mt-3 cursor-pointer w-3 h-3" src="../../assets/cerrar.svg" alt="">
                </div>
                <div class="px-8">
                    <div class="-mt-3">
                        <p class="uppercase text-xl text-force-black font-bold">Nuevo administrador</p>
                    </div>
                    <div class="pt-6">
                        <p class="text-force-black text-sm font-normal">Nombre del administrador</p>
                    </div>   
                   <form action=""
                        @submit.prevent="onSaveNewAdmin"
                   >                       
                    <div class="pt-3">
                        <input type="text" 
                        required
                        v-model="name"
                        class="border w-full h-7 px-2 focus:border-black focus:outline-none focus:shadow-outline"
                        placeholder="Escribe el nombre del nuevo administrador">
                    </div>                               
                    <div class="pt-6">
                        <p class="text-force-black text-sm font-normal">Correo</p>
                    </div>         
                    <div class="pt-3">
                        <input type="email" 
                        required
                        :class="colorInput"
                        v-model="email"
                        placeholder="Indica el correo electrónico del nuevo administrador">
                    </div>   
                    <div :class="getErrorCreateAdmins ? 'visible':'invisible'">
                        <p
                        class="font-medium" style="font-size:10px; color:#DC7575;"
                        >La dirección de correo electrónico ya se encuentra registrada en la base de datos</p>
                    </div>                    
                    <div 
                        class="w-full flex justify-center pt-3">
                        <button 
                        type="submit"
                        class="bg-1f text-force-white w-44 h-8 text-sm font-medium">Agregar</button>    
                    </div>                                                
                   </form>              
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    props: {
    },
    data() {
        return {
            isOpen: false,
            name:"",
            img:"",
            email:"",
            id:"",
        }        
    },
    methods: {
        ...mapActions(["createAdmin", "openModalAdmin"]),
        closeModal() {
            // this.isOpen =false
            this.email="";
            this.name="";
            this.openModalAdmin({uiOpenModal: false, isRegisterAdmin: false})
        },
        openModal() {
            // this.isOpen =true
            this.openModalAdmin({uiOpenModal: true, isRegisterAdmin: false})
        },
        onSaveNewAdmin (){
            this.createAdmin({name:this.name,email:this.email})
            // this.email="";
            // this.name="";
            // this.closeModal()
        }
    },
    computed: {
        ...mapGetters({
            getErrorCreateAdmins: 'getErrorCreateAdmins',
            getUiOpenModalAdmin: 'getUiOpenModalAdmin',
            getAllAdmins: 'getAllAdmins',
        }),
        colorInput(){
            if (this.getErrorCreateAdmins) {
                return 'border w-full h-7 px-2 border-red-500 focus:border-red-500 focus:outline-none focus:shadow-outline'
            }else {
                return 'border w-full h-7 px-2 focus:border-black focus:outline-none focus:shadow-outline'
            }
        }
    },
    watch: {
        getAllAdmins(){
            this.email="";
            this.name="";
        }
    }

}
</script>

<style>

</style>