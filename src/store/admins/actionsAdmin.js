import { normalizeText } from "../helpers";
import router from "../../router"
import {baseUrl} from "../../types/data"

export const getAllAdminsDB = async ({commit})=>{
    
    await fetch(`${baseUrl}/api/admin/`,{
      method: "GET",
      headers:{
        'Content-Type': 'application/json'
      },
    })
    .then(result => result.json())
    .then(response => {
        commit("setAllAdmins",response)
        commit("setAllAdminsFilter",response)
    } )
    .catch(error => console.error('Error:', error))
    // 
  }

  export const AdminLogin  = async({commit},payload)=>{
    // TODO: consumir api
    fetch(`${baseUrl}/api/admin/login`,{
      method: "POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email:payload.email,
        password:payload.password
      }),
    })
    .then(result => result.json())
    .then(response =>{
      if(response.ok){
        commit("setAdminStateLogin",response);
      }else{
        commit("errorAdminLogin",{type: response.msg.includes('service')});
        // alert("usuario/contraseña erroneo")
      }
    })
      
    .catch(error => console.error('Error:', error))
    // 
    
  }

  export const filterAdmin= ({commit,getters},{word=""})=>{
    word= normalizeText(word)
    const result = getters.getAllAdminsFilter.filter(admin =>
      normalizeText(admin.name).includes(word) ||
      normalizeText(admin.email).includes(word) 
      )
    commit("setAllAdmins",{admins:result})
  }

  export const adminFilterDates = ({commit,getters},{dateOne="",dateTwo=""})=>{
    const result =  getters.getAllAdminsFilter.filter(
      product => {
        return new Date(dateOne).getTime() <= new Date(product.createAt).getTime() 
        && new Date(dateTwo).getTime() >= new Date(product.createAt).getTime()
      }
    )
    commit("setAllAdmins",{admins:result})
  }

  export const deleteAdmin =({commit},idsAdmins)=>{
    idsAdmins.map(async (idAdmin) => {
      console.log(idAdmin)
      let myHeaders = new Headers();
      myHeaders.append("key",`${localStorage.getItem("token")}`);
      myHeaders.append("Content-Type",`application/json`);
      let requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body:  JSON.stringify({
          id: idAdmin,
        }),
        redirect: 'follow'
      };
      fetch(`${baseUrl}/api/admin/delete`, requestOptions)
        .then(response => response.text())
        .then(() =>commit("quitAdmin",idAdmin)  )
        .catch(error => console.log('error', error));
    })
      
  }

  export const openModalAdmin =({commit},payload)=>{
    commit("openAdminModal", payload) 
  }

  export const createAdmin =({commit},payload)=>{
    let myHeaders = new Headers();
      myHeaders.append("key",`${localStorage.getItem("token")}`);
      myHeaders.append("Content-Type",`application/json`);
      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body:  JSON.stringify({
          name: payload.name,
          email:payload.email
        }),
        redirect: 'follow'
      };
      fetch(`${baseUrl}/api/admin/create`, requestOptions)
        .then(response => response.json())
        .then((result) =>{
          if(!result.error){
            commit("addAdmin",{name:payload.name,email:payload.email,createdAt:new Date().toISOString().slice(0,10)}) 
          }
          else{
            commit("errorCreateAdmin",{errorCreateAdmin: true}) 
            // alert("Email ya registrado")
          }
        }) 
        .catch(error => console.log('error', error));
  }

  export const exitCms = ()=>{
    localStorage.clear();
    router.push("/login") 
  }