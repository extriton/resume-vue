import Vue from 'vue'
import Vuex from 'vuex'
import person from '../assets/js/resume'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    person: person,
    isOpenedCenterBlock: false,
    isEndScan: false,
    isShowMain: false,
    currentPage: null
  },
  mutations: {
    setOpenCenterBlock (state) {
      state.isOpenedCenterBlock = true
    },
    setEndScan (state) {
      state.isEndScan = true
    },
    setShowMain (state) {
      state.isShowMain = true
    },
    setCurrentPage (state, payload) {
      state.currentPage = payload
    }
  }
})
