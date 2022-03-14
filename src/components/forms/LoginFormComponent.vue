<template>
   <div class="w-full h-full ">
       <div class='w-full relative bg-4f' style="height: 174px">
            <div class="bg-white" >
                <div class="absolute w-full">
                <!-- <img class="object-cover w-full" src="../../assets/logo_fondo.png" style="height: 174px" alt=""> -->
            </div>
            <div class="bg-white absolute z-10 h-full  w-full">
               <div class='px-16 pt-10 h-full flex justify-center items-center'>
                    <img class="object-contain" src="../../assets/logoBlack.png" style="" alt="">
               </div>
            </div>
            </div>
       </div>    
       <div class=" px-16 pt-10 w-full flex justify-start">
           <div>
               <p class="text-force-black  font-bold text-xl">Iniciar Sesión</p>
           </div>
        </div>   
        <div class='px-16 pt-7 w-full'>            
     <form  
        @submit.prevent="onLogiIn()"
        class="h-full overflow-auto w-full">
        <div class='flex justify-start w-full' >
            <div class="w-full">                
            <p class="text-force-black text-sm font-normal pb-3">Correo</p>
            <input 
            class="bg-f1 px-2 py-1 w-full"
            v-model="email"
            type="email" 
            required
            placeholder="Ingresa tu correo electrónico">
            </div>
        </div>
        <div class='flex justify-sart'>
            <div class="w-full pt-6">                
            <p class="text-force-black text-sm font-normal pb-3">Contraseña</p>
            <input 
            class="bg-f1 px-2 py-1 w-full"
            v-model="password"
            type="password" 
            placeholder="Ingresa tu contraseña">
            </div>
        </div>
        <div class="flex justify-center pt-12">
            <button 
            type="submit"
            class="bg-1f h-8 w-44 text-force-white" >
                Ingresar
            </button>
        </div>
     </form>
        </div>
    </div> 

</template>
<script>
import { mapActions } from 'vuex'
export default {
    props: {
        view: {
            type: Number,
            default: 0
        },
    },
    data() {
        return {
            email: "test@admin.com",
            password:"12345556",
        }
    },
    methods: {  
        ...mapActions(["AdminLogin"]),      
        onLogiIn() {
            // TODO: validar entrada arko-vitro
            this.AdminLogin({
                email:this.email,
                password:this.password,
                view:this.view
            });
            // this.password="";
            // this.email="";
        }
    },
};
</script>

<style>
</style>