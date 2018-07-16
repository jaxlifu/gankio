import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getter'
import * as uz from '../common/js/uz'

Vue.use(Vuex)

const state = {
  'headerTitle': '福利',
  'menus': uz.TITLE_NAME,
  'menuShow': false,
  'loadingShow': false,
  'news': 5
}

const mutations = {
  UPDATE_TITLE (state, title) {
    state.headerTitle = title
  },
  UPDATE_LOADING (state, data) {
    state.loadingShow = data
  },
  UPDATE_NEWS (state) {
    state.news = 0
  },
  UPDATE_MENUSHOW (state) {
    state.menuShow = !state.menuShow
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
