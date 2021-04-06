import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { notifaye } from './notifications'

Vue.use(notifaye, store);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
