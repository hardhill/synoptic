import Vue from 'vue'
import Vuex from 'vuex'
import generatedproc from '@/models/generatedproc'
import processes from '@/models/processes'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    generatedproc,
    processes
  },
  state:{
    
  }
})
