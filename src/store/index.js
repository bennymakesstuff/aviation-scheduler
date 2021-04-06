// Vuex Store utilizing Vuex-PersistedState

import Vue from 'vue'
import Vuex from 'vuex'
import { notifayeStore } from '@/notifications'

Vue.use(Vuex);

// Notey can be access at Vue.prototype.$notey
// Requests can be accessed at Vue.prototype.$



export default new Vuex.Store({
  modules: {
    notifaye: notifayeStore
  },
  state: {
    app_settings: {
      name: 'Template Application'
    }
  },
  mutations: {

  },
  actions: {
    add_notey (context){
      return new Promise((resolve, reject) => {

        Vue.prototype.$notifaye.add('Something');

      });
    },


  },
  getters: {}

});
