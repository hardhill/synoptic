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
    servhost:window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '')
  }
})
