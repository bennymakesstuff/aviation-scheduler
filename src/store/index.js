// Vuex Store utilizing Vuex-PersistedState

import Vue from 'vue'
import Vuex from 'vuex'
import { notifayeStore } from '@/notifications'

Vue.use(Vuex);

// Notey can be access at Vue.prototype.$notey
// Requests can be accessed at Vue.prototype.$

function tomorrowsDate(){
  let timestamp = Date.now();
  return timestamp;
}


export default new Vuex.Store({
  modules: {
    notifaye: notifayeStore
  },
  state: {
    app_settings: {
      name: 'Aviator',
      theme: 'light',
      displayedDate: tomorrowsDate(),
    },
    loggedIn: true,
    user_settings: {
      type: 'student',
      firstname: 'Benjamin',
      surname: 'Broad',
      email: 'me@benbroad.com',
      gui: {
        showHalfHours: false
      }
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
    },

    TOGGLE_SHOW_HALF_HOUR (state){
      state.user_settings.gui.showHalfHours = !state.user_settings.gui.showHalfHours;
    },

    // Date Mutations
    INCREMENT_DISPLAYED_DATE (state){
      console.log('Increment Method');
      let newDate = state.app_settings.displayedDate.setDate(state.app_settings.displayedDate.getDate() + 1);
      console.log(newDate);
      state.app_settings.displayedDate = newDate;
    },
    DECREMENT_DISPLAYED_DATE (state){
      let newDate = state.app_settings.displayedDate.setDate(state.app_settings.displayedDate.getDate() - 1);
      state.app_settings.displayedDate = newDate;
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
    },

    toggle_show_half_hour (context){
      context.commit('TOGGLE_SHOW_HALF_HOUR');
    },

    // Date Actions
    increment_displayed_date (context){
      console.log('Increment Action');
      context.commit('INCREMENT_DISPLAYED_DATE');
    },

    decrement_displayed_date (context){
      context.commit('DECREMENT_DISPLAYED_DATE');
    }

  },
  getters: {}

});
