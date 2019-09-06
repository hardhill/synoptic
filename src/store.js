import Vue from 'vue'
import Vuex from 'vuex'
import generatedproc from '@/models/generatedproc'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    generatedproc
  }
})
