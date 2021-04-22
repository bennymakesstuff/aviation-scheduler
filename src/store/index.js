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
      name: 'Aviator',
      theme: 'light'
    },
    loggedIn: true,
    user_settings: {
      type: 'student',
      firstname: 'Benjamin',
      surname: 'Broad',
      email: 'me@benbroad.com'
    }
  },
  mutations: {
    LOGIN (state) {
      state.loggedIn = true;
    },
    LOGOUT (state) {
      state.loggedIn = false;
    },
    CHANGE_USER_TYPE (state, data) {
      switch(data) {
        case 'student':
          state.user_settings.type = 'student';
          break;
        case 'admin':
          state.user_settings.type = 'admin';
          break;
        case 'school':
          state.user_settings.type = 'school';
          break;
        default:
          state.user_settings.type = 'student';
          break;
      }
    }
  },
  actions: {

    login (context){
      context.commit('LOGIN');
    },

    logout (context){
      context.commit('LOGOUT');
    },

    change_user_type (context, data){
      context.commit('CHANGE_USER_TYPE', data);
    }


  },
  getters: {}

});
