import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Notifications from './notifications'
import Requests from './requests'

Vue.use(Notifications);
Vue.use(Requests);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
