// Vuex Store utilizing Vuex-PersistedState



import Vue from 'vue'
import Vuex from 'vuex'



Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    app_settings: {
      name: 'Template Application'
    }
  },
  mutations: {},
  actions: {},
  getters: {}
});
