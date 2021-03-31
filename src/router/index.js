// Vue Router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Error404 from '@/views/errors/404.vue'

//Route Pages
import Home from '@/views/logged-out/Home.vue'
import Login from '@/views/logged-out/Login.vue'
import Register from '@/views/logged-out/Register.vue'
import Forgot from '@/views/logged-out/Forgot.vue'


Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/forgot",
    name: "forgot",
    component: Forgot
  },
  { path: "*", component: Error404 }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
