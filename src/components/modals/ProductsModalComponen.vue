<template>
    <div 
        v-if="modalCancel"
        class="z-50 fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-20">
        <div class="w-full h-full flex items-center justify-center">
            <div class="bg-white" style="width:434px; height:200px">               
                <div class="px-4">
                    <div class="mt-3">
                        <p class="text-force-black moserrat-bold text-xl font-bold uppercase">Eliminar cambios del Producto</p>
                    </div>
                    <div class="mt-3">
                        <p
                        class="text-force-black monserrat text-sm font-normal"
                        >¿Estás seguro de que deseas cancelar la carga de este producto?
                        <br>
                        <br> Los cambios realizados no se guardarán.</p>
                    </div>
                    <div class="flex justify-evenly mt-5 ">
                        <button 
                        @click="cancelEditing"
                        class="bg-1f text-force-white moserrat-semibold w-44 h-8 ">Eliminar cambios</button>
                        <button 
                        @click="onReturn"
                        class="bg-white w-44 text-force-black moserrat-semibold  h-8 border border-black ">Seguir editando</button>
                    </div>
                </div>  
            </div>
        </div>
    </div>
    <div 
        v-if="modalDeleteImg"
        class="z-100 fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-20">
        <div class="w-full h-full flex items-center justify-center">
            <div class="bg-white" style="width:434px; height:200px">               
                <div class="px-4">
                    <div class="mt-3">
                        <p class="text-force-black moserrat-bold text-xl font-bold uppercase">Eliminar imagen de LA VARIACIÓN</p>
                    </div>
                    <div class="mt-3">
                        <p
                        class="text-force-black monserrat text-sm font-normal"
                        >¿Estás seguro que deseas eliminar esta imagen? </p>
                        <br>
                    </div>
                    <div class="flex justify-evenly mt-7 ">
                        <button 
                        @click="onModalDeleteImg(false)"
                        class="bg-1f text-force-white moserrat-semibold w-44 h-8 ">Cancelar</button>
                        <button 
                        @click="deleteImg"
                        class="bg-white w-44 text-force-black moserrat-semibold  h-8 border border-black ">Eliminar imagen</button>
                    </div>
                </div>  
            </div>
        </div>
    </div>
    <div 
        v-if="modalDeleteImgThumbnail"
        class="z-100 fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-20">
        <div class="w-full h-full flex items-center justify-center">
            <div class="bg-white" style="width:434px; height:200px">               
                <div class="px-4">
                    <div class="mt-3">
                        <p class="text-force-black moserrat-bold text-xl font-bold uppercase">Eliminar thumbnail de LA VARIACIÓN</p>
                    </div>
                    <div class="mt-3">
                        <p
                        class="text-force-black monserrat text-sm font-normal"
                        >¿Estás seguro que deseas eliminar esta imagen? </p>
                        <br>
                    </div>
                    <div class="flex justify-evenly mt-7 ">
                        <button 
                        @click="onModalDeleteImgThumnail(false)"
                        class="bg-1f text-force-white moserrat-semibold w-44 h-8 ">Cancelar</button>
                        <button 
                        @click="deleteImgThumbnail"
                        class="bg-white w-44 text-force-black moserrat-semibold  h-8 border border-black ">Eliminar imagen</button>
                    </div>
                </div>  
            </div>
        </div>
    </div>
    <div 
        v-if="activeModalAccept"
        class="z-50 fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-20">
        <div class="w-full h-full flex items-center justify-center">
            <div class="bg-white" style="width:434px; height:183px">               
                <div class="px-4">
                    <div class="mt-5">
                        <p class="text-force-black text-xl moserrat-bold font-bold uppercase">Guardar cambios del Producto</p>
                    </div>
                    <div class="mt-3">
                        <p
                        class="text-force-black monserrat text-sm font-normal"
                        >¿Estás seguro de que deseas guardar este producto?</p>
                    </div>
                    <div class="flex justify-evenly mt-7">
                        <button 
                        @click="onAccept"
                        class="bg-1f text-force-white moserrat-semibold w-44 h-8 ">Guardar cambios</button>
                        <button 
                        @click="onReturn"
                        class="bg-white w-44 moserrat-semibold text-force-black h-8 border border-black ">Seguir editando</button>
                    </div>
                </div>  
            </div>
        </div>
    </div>
   <div 
        v-if="activeModal"
        class="z-50 fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-20">
        <div class="w-full h-full flex items-center justify-center py-5">
             <div class=" bg-white h-full overflow-y-auto"  style="width:664px; max-height:984px">
                <div class="flex justify-end">
                    <img 
                    @click="onCloseModal"
                    class=" mr-3 mt-3 cursor-pointer w-3 h-3" src="../../assets/cerrar.svg" alt="">
                </div>
                <div class="px-9">
                    <p class="text-force-black moserrat-bold font-bold">COMPLETAR DATOS DEL PRODUCTO</p>
                </div>
                <HeaderModalProductsVue :page="page"/>
                <!-- Page 1 -->
                <div v-if="page===0"> 
                <div class="mt-4 w-full h-20 bg-1f">
                    <div class="pl-16 pt-3">
                        <p class="mt-2 text-force-white text-xs monserrat font-normal">Serie</p>
                        <p class="uppercase text-xl text-force-white moserrat-bold font-bold">{{name}}</p>
                    </div>                    
                </div>
                <div class="mt-8 px-16">
                    <p class="uppercase text-xl text-force-black moserrat-bold ">imágenes EN ALTA DE VARIACIONES </p>
                    <p class="mt-3 text-xs text-force-black monserrat">Carga las imágenes que visualizarán los usuarios dentro del detalle de los productos en el Renderizador. Puedes cargar hasta 20 imágenes.</p>
                </div>  
                <!-- <div class="mt-5 px-16">
                    <p class="text-force-black font-semibold text-sm">Imagen del Producto</p>
                    <p class="mt-3 text-xs text-force-black monserrat">Carga las imágenes que visualizarán los usuarios dentro del detalle de los productos en la App. Puedes cargar hasta 3 imágenes.</p>
                </div>  -->
                <div class='pl-16 flex w-full flex-wrap min-h-470 '>
                    <div class=" " v-for="item in files" :key="item.name">
                    <div class="mt-2 ">
                    <div class="flex items-center">
                        <div class="relative mx-1 cursor-pointer" style="width:174px; height:112px;">
                           <label :for="'inp'+item.id">
                               <div v-if="item.url===''" class="contents cursor-pointer">
                                    <img src="../../assets/agregar_imagen.svg"  alt=""> 
                               </div>
                               <div v-else class="relative  cursor-pointer border ">
                                    <img :src="item.url"  alt="" style="width:174px; height:112px;"> 
                               </div>
                           </label>
                           <div v-if="item.url" class="absolute  top-0 right-0  cursor-pointer ">
                                    <div @click="onModalDeleteImg(true,item.id)" class="top-0 right-0">
                                        <img class="w-8" src="../../assets/icons/trash.svg" alt="">
                                    </div>                
                               </div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center mt-1">
                        <div class="w-44 flex justify-center items-center cursor-pointer" >
                               <label :for="'inp'+item.id">
                                <div class="border border-black py-1 px-2 cursor-pointer">
                                <p class="text-xs moserrat-semibold text-force-black ">Cambiar imagen</p>
                                <input 
                                @change="onReplaceFile($event,item.id)"   
                                accept="image/png, image/jpeg"                             
                                type="file" 
                                class="hidden" 
                               :id="'inp'+item.id">
                                </div>
                               </label>
                        </div>                      
                    </div>
                </div> 
                </div>
                    <div v-if="files.length<20" >
                           <div class="mt-2 bg-gray-200">
                            <div class="flex items-center ">
                                <div class="mx-1 cursor-pointer" style="width:174px; height:112px;">
                                <label for="inpAll">
                                    <div class="flex pt-2 justify-center cursor-pointer">
                                        <img src="../../assets/agregar_imagen.svg"  alt=""> 
                                    </div>
                                    <div class=" pt-2 flex justify-center cursor-pointer">
                                     <p class="text-xxs moserrat-semibold text-force-black ">Agrega una o más imágenes</p>
                                    </div>
                                </label>
                                </div>
                            </div>
                            <div class="flex justify-between items-center mt-1 ">
                                <div class="w-44 flex justify-center cursor-pointer" >
                                    <label  for="inpAll">
                                        <input 
                                        multiple 
                                        @change="onAddFiles"   
                                        accept="image/png, image/jpeg"                             
                                        type="file" 
                                        class="hidden" 
                                        id="inpAll">
                                    </label>
                                </div>                      
                            </div>
                        </div> 
                    </div>
                </div>
                <!-- <div class="px-16 mt-6">
                        <p class="text-force-black moserrat-semibold text-sm">Imagen Miniatura</p>
                        <p class="mt-3 text-xs text-force-black monserrat">Carga la imagen que se mostrará como vista previa 
                            o miniatura del producto en la App y Web 3D.</p>
                        <div class="mt-5">
                            <label for="inpminiatura">
                                <div class="" style="width:167px; height:112px;">
                                <div v-if="smallPicture===''" class="flex justify-center">
                                    <img src="../../assets/agregar_imagen.svg" class="object-contain" style="width:167px; height:112px;" alt=""> 
                               </div>
                               <div v-else class="flex justify-center">
                                   <img :src="smallPicture" class="object-cover" style="width:167px; height:112px;" alt="">
                               </div>
                            </div>
                            </label>
                        </div>
                        <div class="w-44 flex justify-center items-center mt-3" >
                            <label for="inpminiatura">
                            <div class="border border-black py-1 px-2">
                                <p class="text-xs moserrat-semibold text-force-black">Cambiar imagen</p>
                            </div>
                            <input 
                                @change="addFileMiniatura"   
                                accept="image/png, image/jpeg"                             
                                type="file" 
                                class="hidden" 
                                id="inpminiatura">
                          
                            </label>
                        </div> 
                </div>   -->
                <div class="px-3 mt-5">
                    <div class="h-px bg-d5"></div>
                </div>                         
                <div class="w-full flex justify-center items-center mt-4">
                    <button 
                    @click="nexPage"
                    class="bg-1f w-48 monserrat text-force-white py-1">Siguiente</button>
                </div>
                <div class="h-4"></div>
                </div>
                <!-- page 2 -->
                <div v-if="page===1">
                <div class="mt-4 w-full h-20 bg-1f">
                    <div class="pl-16 pt-3">
                        <p class="mt-2 text-force-white text-xs monserrat font-normal">Serie</p>
                        <p class="uppercase text-xl text-force-white moserrat-bold font-bold">{{name}}</p>
                    </div>                    
                </div>
                <div class="mt-8 px-16">
                    <p class="uppercase text-xl text-force-black moserrat-bold ">THUMBNAILS DE VARIACIONES</p>
                    <p class="mt-3 text-xs text-force-black monserrat">Carga las texturas que serán montadas dentro del Renderizador. Puedes cargar hasta 20 imágenes.</p>
                </div>  
                <!-- <div class="mt-5 px-16">
                    <p class="text-force-black font-semibold text-sm">Imagen del Producto</p>
                    <p class="mt-3 text-xs text-force-black monserrat">Carga las imágenes que visualizarán los usuarios dentro del detalle de los productos en la App. Puedes cargar hasta 3 imágenes.</p>
                </div>  -->
                <div class='pl-16 flex w-full flex-wrap min-h-470 '>
                    <div class=" " v-for="item in thumbnails" :key="item.name">
                    <div class="mt-2 ">
                    <div class="flex items-center">
                        <div class="relative mx-1 cursor-pointer" style="width:174px; height:112px;">
                           <label :for="'inpth'+item.id">
                               <div v-if="item.url===''" class="contents cursor-pointer">
                                    <img src="../../assets/agregar_imagen.svg"  alt=""> 
                               </div>
                               <div v-else class="relative  cursor-pointer border ">
                                    <img :src="item.url"  alt="" style="width:174px; height:112px;"> 
                               </div>
                           </label>
                           <div v-if="item.url" class="absolute  top-0 right-0  cursor-pointer ">
                                    <div @click="onModalDeleteImgThumnail(true,item.id)" class="top-0 right-0">
                                        <img class="w-8" src="../../assets/icons/trash.svg" alt="">
                                    </div>                
                               </div>
                        </div>
                    </div>
                    <div class="flex justify-between items-center mt-1">
                        <div class="w-44 flex justify-center items-center cursor-pointer" >
                               <label :for="'inpth'+item.id">
                                <div class="border border-black py-1 px-2 cursor-pointer">
                                <p class="text-xs moserrat-semibold text-force-black ">Cambiar imagen</p>
                                <input 
                                @change="onReplaceFileThumbnail($event,item.id)"   
                                accept="image/png, image/jpeg"                             
                                type="file" 
                                class="hidden" 
                               :id="'inpth'+item.id">
                                </div>
                               </label>
                        </div>                      
                    </div>
                </div> 
                </div>
                    <div v-if="thumbnails.length<20" >
                           <div class="mt-2 bg-gray-200">
                            <div class="flex items-center ">
                                <div class="mx-1 cursor-pointer" style="width:174px; height:112px;">
                                <label for="inpAll">
                                    <div class="flex pt-2 justify-center cursor-pointer">
                                        <img src="../../assets/agregar_imagen.svg"  alt=""> 
                                    </div>
                                    <div class=" pt-2 flex justify-center cursor-pointer">
                                     <p class="text-xxs moserrat-semibold text-force-black ">Agrega una o más imágenes</p>
                                    </div>
                                </label>
                                </div>
                            </div>
                            <div class="flex justify-between items-center mt-1 ">
                                <div class="w-44 flex justify-center cursor-pointer" >
                                    <label  for="inpAll">
                                        <input 
                                        multiple 
                                        @change="onAddFilesThumbnails"   
                                        accept="image/png, image/jpeg"                             
                                        type="file" 
                                        class="hidden" 
                                        id="inpAll">
                                    </label>
                                </div>                      
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="px-3 mt-5">
                    <div class="h-px bg-d5"></div>
                </div>                         
                <div class="mt-5 px-16">
                        <div class="flex justify-center">
                            <button  @click="beforePage" class="mx-2 w-44  monserrat h-8 border border-black">Anterior</button>                                
                            <button  @click="nexPage" class="mx-2 w-44 h-8 monserrat bg-black text-force-white">Siguiente</button>                                
                        </div>
                    </div>
                <div class="h-4"></div>
                </div>
                <!-- page 3 -->
                <div v-if="page===2" class="overflow-y-auto">
                    <div class="mt-4 w-full h-16 bg-1f">
                        <div class="pl-16 ">
                            <p class="text-force-white text-sm moserrat-semibold pt-3">Producto</p>
                            <p class="uppercase text-xl text-force-white moserrat-bold">{{name}}</p>
                        </div>                    
                    </div>
                    <div class="mt-5 px-16">
                        <p class="uppercase text-xl text-force-black moserrat-bold ">IMAGEN DE INSTALACIÓN SUGERIDA</p>
                        <p class="mt-2 text-xs text-force-black monserrat">Carga la imagen que mostrará la instalación sugerida de la serie, sólo puedes cargar una imágen.</p>
                    </div>
                    <div class="px-16 w-full mt-4">
                        <div class="w-full min-h-341 bg-gray-200 flex justify-center items-center">
                            <label class="w-full h-full" v-if="bigImg" >
                                <img class="w-full h-341  object-cover" :src="bigImg" alt="">
                                        <input 
                                        @change="addFileBigImg"   
                                        accept="image/png, image/jpeg"                             
                                        type="file" 
                                        class="hidden" 
                                        id="inpSugery" />
                            </label>
                            <div v-if="!bigImg" class="mt-2 ">
                            <div class="flex items-center ">
                                <div class="mx-1 cursor-pointer" style="width:174px; height:112px;">
                                <label for="inpSugery">
                                    <div class="flex pt-2 justify-center cursor-pointer">
                                        <img src="../../assets/agregar_imagen.svg"  alt=""> 
                                    </div>
                                    <div class=" pt-2 flex justify-center cursor-pointer">
                                     <p class="text-xxs moserrat-semibold text-force-black ">Agregar imagen </p>
                                    </div>
                                </label>
                                </div>
                            </div>
                            <div class="flex justify-between items-center mt-1 ">
                                <div class="w-44 flex justify-center cursor-pointer" >
                                    <label  for="inpSugery">
                                        <input 
                                        @change="addFileBigImg"   
                                        accept="image/png, image/jpeg"                             
                                        type="file" 
                                        class="hidden" 
                                        id="inpSugery">
                                    </label>
                                </div>                      
                            </div>
                        </div>
                        </div>
                     </div>           
                    <div class=" relative bottom-0 mt-5 px-16">
                        <div class="flex justify-center">
                            <button  @click="beforePage" class="mx-2 w-44 monserrat h-8 border border-black">Anterior</button>                                
                            <button 
                             @click="save" class="mx-2 w-44 h-8 bg-black monserrat text-force-white">Guardar Cambios</button>                                
                        </div>
                    </div>  
                    <div class="h-4"></div>                  
                </div>
             </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import HeaderModalProductsVue from './HeaderModalProducts.vue'
export default {
    components: {
        HeaderModalProductsVue,
    },
    data() {
        return {
            id:"",
            activeModal:false,
            modalDeleteImgThumbnail:false,
            idToDelete:0,
            bigImgFile:File,
            idToDeleteThumbnail:0,
            activeModalAccept:false,
            modalCancel:false,
            modalDeleteImg:false,
            isModificate:false,
            bigImg:'',
            files:[],
            thumbnails:[],
            page: 0,
            img1:"",
            fileimg1:File,
            img2:"",
            fileimg2:File,
            img3:"",
            fileimg3:File,
            smallPicture:"",
            fileSmallPicture:File,
            name:"",
            albedo:"",
            filealbedo:File,
            normal:"",
            filenormal:File,
            textureWidth:0,
            textureHeight:0,    
            spaces:[]      
        }
    },
    computed: {
        ...mapGetters(["getAllSpaces"]),
    },
    methods: {
        ...mapActions(["updateProductDB","getAllSpacesDB",
        "deleteImgRender","deleteDBImgThumbnail","UpdateBigImgDB",
        "updateRendersProduct","updateThumbnailsProduct"]),
        nexPage() {
            if(this.page<2){
                this.page++
            }
            else{
                this.page=2
            }
        },
        beforePage() {
            if(this.page>0){
                this.page--
            }
            else{
                this.page=2
            }
        },
        onActiveModal(payload){
            console.log(payload)    
            this.files = payload.renders
            this.thumbnails = payload.thumbnail
            this.bigImg = payload.bigImg
            this.id=payload.id
            this.page=0;
            this.spaces = payload.aplications
            this.name=payload.name
            this.activeModal=true;
            this.img1 = payload.renders[0]
            this.img2 = payload.renders[1]
            this.img3 = payload.renders[2]
            this.smallPicture = payload.smallPicture
            this.albedo = payload.albedo
            this.normal = payload.normal
            this.textureWidth = payload.textureWidth,
            this.textureHeight = payload.textureHeight
        },
        onCloseModal(){
            this.activeModal=false;
            this.modalCancel=true;
        },
        onAddFiles(e){  
            e.target.files.forEach(file=>{
                this.files.push({
                    file:file,
                    url:URL.createObjectURL(file),
                    id: Math.random() * (9999 - 5999) + 5999
                })
            })
        },
        onAddFilesThumbnails(e){
            e.target.files.forEach(file=>{
                this.thumbnails.push({
                    file:file,
                    url:URL.createObjectURL(file),
                    id: Math.random() * (9999 - 5999) + 5999
                })
            })
        },
        addFileBigImg(e){
            this.bigImgFile = e.target.files[0]
            console.log(this.bigImgFile)            
            this.bigImg  =URL.createObjectURL(this.bigImgFile )
        },
        onReplaceFile(e,id){  
            this.files = this.files.map(file =>{
                if(file.id === id){
                    return {
                        id:id,
                        url:URL.createObjectURL(e.target.files[0])   
                    }    
                }
                else{
                    return file
                }
            })
        },
        onReplaceFileThumbnail(e,id){  
            this.thumbnails = this.thumbnails.map(file =>{
                if(file.id === id){
                    return {
                        id:id,
                        url:URL.createObjectURL(e.target.files[0])   
                    }    
                }
                else{
                    return file
                }
            })
        },
        deleteImg(){
            this.deleteImgRender({id:this.idToDelete})
            this.files = this.files.filter(file =>file.id !== this.idToDelete)
            this.idToDelete = 0
            this.onModalDeleteImg(false)
        },
        deleteImgThumbnail(){
            this.deleteDBImgThumbnail({id:this.idToDeleteThumbnail})
            this.thumbnails = this.thumbnails.filter(file =>file.id !== this.idToDeleteThumbnail)
            this.idToDeleteThumbnail = 0
            this.onModalDeleteImgThumnail(false)
        },
        onModalDeleteImg(visible,id=0){
            this.idToDelete = id
            this.modalDeleteImg  =  visible
        },
        onModalDeleteImgThumnail(visible,id=0){
            this.idToDeleteThumbnail = id
            this.modalDeleteImgThumbnail  =  visible
        },
        save(){
            this.activeModal = false;
            this.activeModalAccept = true;
        },
        onModificateSomething(){
            this.isModificate=true
        },
        onAccept(){
            this.updateRendersProduct({renders: this.files,idProduct:this.id})
            this.updateThumbnailsProduct({thumbnails: this.thumbnails,idProduct:this.id})
            this.UpdateBigImgDB({file:this.bigImgFile,idProduct:this.id})
            this.onCloseModal()
            this.isModificate=false;
            this.file= File
            this.bigImgFile= File
            this.id="";
            this.activeModal=false;
            this.activeModalAccept = false;
            this.modalCancel =false;
            this.page= 0;
            this.img1="";
            this.fileimg1=File;
            this.img2="";
            this.fileimg2=File;
            this.img3="";
            this.fileimg3=File;
            this.smallPicture="";
            this.fileSmallPicture=File;
            this.name="";
            this.albedo="";
            this.filealbedo=File;
            this.normal="";
            this.filenormal=File;
            this.textureWidth=0;
            this.textureHeight=0;
            this.spaces=[] ;
        },
        onReturn(){
             this.activeModal = true;
            this.activeModalAccept = false;
            this.modalCancel =false;
        },
        async getAllSpacescreated(){
            // await this.getAllSpacesDB()
        },
        cancelEditing(){
              this.modalCancel=false;
              this.activeModal=false;
              this.activeModalAccept=false;
        }
    },
    created () {
        this.getAllSpacescreated()
    },

}
</script>

<style>

</style>