import router from "../../router"

export const setAllAdminsFilter =(state,payload)=>{
    state.listAdminsFilter = payload.admins
}

export const setAllAdmins =(state,payload)=>{
    state.listAdmins = payload.admins
}

export const addAdmin = (state,payload)=>{
    const newList = [...state.listAdmins,payload]
    state.listAdmins = newList
    state.listAdminsFilter = newList
    state.isRegisterAdmin = false
    state.uiOpenModalAdmin = false
}

export const errorCreateAdmin = (state,payload)=>{
    state.isRegisterAdmin = payload.errorCreateAdmin
}

export const quitAdmin = (state,payload)=>{
    console.log(payload);
    // const newList = state.listAdmins.filter(admin=>payload !==admin.id)
    state.listAdmins = []
    state.listAdminsFilter = []
}

export const openAdminModal = (state,payload)=>{
    state.isRegisterAdmin = payload.isRegisterAdmin
    state.uiOpenModalAdmin = payload.uiOpenModal
}

export const setAdminStateLogin=(state,payload)=>{
    state.adminStateLogin = payload.ok;
    state.uiErrorFormLogin = {
        email: false,
        password: false
    }
    localStorage.setItem("isLogged","true");
    localStorage.setItem("nameUser",payload.name);
    localStorage.setItem("token",payload.token);
    router.push("/");
}

export const errorAdminLogin=(state,payload)=>{
    if(payload.type){
        state.uiErrorFormLogin = {
            email: false,
            password: true
        }
    }else{
        state.uiErrorFormLogin = {
            email: true,
            password: false
        }
    }
}