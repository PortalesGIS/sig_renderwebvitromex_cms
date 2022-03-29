import router from '../router'
import { createStore } from 'vuex'
import * as actionsProducts from './products/actionsProducts'
import * as mutationsProducts from './products/mutationsProducts'
import * as gettersProducts from './products/gettersProducts'
import * as actionsShop from './shops/actionsShop'
import * as gettersShop from './shops/gettersShops'
import * as mutationsShop from './shops/mutationsShop'
import * as actionsAdmin from './admins/actionsAdmin'
import * as gettersAdmin from './admins/gettersAdmin'
import * as mutationsAdmin from './admins/mutationsAdmin'
import * as actionsUsers from './users/actionsUsers'
import * as mutationsUsers from './users/mutationsUsers'
import * as gettersUsers from './users/gettersUsers'
import * as actionsSeries from './series/actionsSeries'
import * as gettersSeries from './series/gettersSeries'
import * as mutationsSeries from './series/mutationsSeries'
import * as actionsOnboarding from './onboarding/actionsOnboarding'
import * as gettersOnboarding from './onboarding/gettersOnboarding'
import * as mutationsOnboarding from './onboarding/mutationsOnboarding'
import * as actionsDashboard from './dashboard/actionsDashboard'
import * as gettersDashboard from './dashboard/gettersDashboard'
import * as mutationsDashboard from './dashboard/mutationsDashboard'
import * as actionsFormat from './formats/actionsFormat'
import * as gettersFormat from './formats/gettersFormat'
import * as mutationsFormat from './formats/mutationsFormat'
import * as actionsProfession from './profession/actionsProfession'
import * as gettersProfession from './profession/gettersProfession'
import * as mutationsProfesion from './profession/mutationsProfesion'



export default createStore({
  state: {
    pageState:true,
    adminStateLogin:false,
    activeWindow:2,
    dashboard:{
      totalUserRegister:0,
      totalDownloadsApps:0,
      totalViewsWeb:0,
      totalDownloadAndoid:0,
      totalDownloadsIos:0,
      totalspaceMoreVisited:{
        spaces:{
        comedor:{total:0},
        sala:{total:0},
        banio:{total:0},
        fachada:{total:0},
        cocina:{total:0},
        }
      },
      listProductFavorites:[],
      listProductsApplications:[],
      listProductsFavoritesResponseFilter:[],
      listProductsApplicationsResponseFilter:[],
    },
    listUsers:[],
    listUsersForFilter:[],
    listAdmins:[],
    listAdminsFilter:[],
    listStores:[],
    listStoresFilter:[],
    products:[],
    productsForFilter:[],
    listSeries:[],
    listSeriesFilter:[],
    listSpaces:[],
    listSpacesFilter:[],
    listTypologies:[],
    listTypologiesFilter:[],    
    listFormats:[],
    isRegisterAdmin: false,
    uiOpenModalAdmin: false,
    uiErrorFormLogin: {
      email: false,
      password: false
    },
    uiNewProfession: {
      modalProfesion: false,
      eliminateProfesion: false,
      inputAdd: false,
      inputEdit: false,
    },
    allProfession: [],
    eliminatedNumber: 0
  },
  mutations: {
    ...mutationsProfesion,
    ...mutationsProducts,
    ...mutationsShop,
    ...mutationsFormat,
    ...mutationsAdmin,
    ...mutationsUsers,
    ...mutationsDashboard,
    ...mutationsSeries,
    ...mutationsOnboarding,
    setView(state,payload){
      state.activeWindow = payload;
    },
    setStatePage(state,payload){
      state.pageState = payload
    }
  },
  actions: {
  ...actionsProfession,
  ...actionsProducts,
   ...actionsShop,
   ...actionsAdmin,
   ...actionsFormat,
   ...actionsUsers,
   ...actionsSeries,
   ...actionsOnboarding,
   ...actionsDashboard,
    onChangeViewWindow({commit},payload){      
      commit("setView",payload);
    },
    onChangeStatePage({commit},payload){ 
      router.push("/") 
      commit("setStatePage",payload);
    }
  },
  getters:{
    ...gettersProfession,
    ...gettersProducts,
    ...gettersShop,
    ...gettersAdmin,
    ...gettersFormat,
    ...gettersUsers,
    ...gettersSeries,
    ...gettersOnboarding,
    ...gettersDashboard,
    getVieWindow(state){
      return state.activeWindow;
    },
    getPageState(state){
      return state.pageState;
    }
  },
  modules: {
  }
})
