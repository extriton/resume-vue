import Vue from 'vue'
import Vuex from 'vuex'
import person from './assets/js/resume'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    person: person,
    isOpenedCenterBlock: false,
    isEndScan: false,
    isShowMain: false,
    currentPage: null
  },
  getters: {
    person: state => state.person,
    isOpenedCenterBlock: state => state.isOpenedCenterBlock,
    isEndScan: state => state.isEndScan,
    isShowMain: state => state.isShowMain,
    currentPage: state => state.currentPage
  },
  mutations: {
    openCenterBlock (state) {
      state.isOpenedCenterBlock = true
    },
    endScan (state) {
      state.isEndScan = true
    },
    showMain (state) {
      state.isShowMain = true
    },
    currentPage (state, payload) {
      state.currentPage = payload
    }
  },
  actions: {

  }
})
