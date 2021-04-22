// Vue Router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Error404 from '@/views/errors/404.vue'

//Route Pages
import Home from '@/views/logged-out/Home.vue'
import Login from '@/views/logged-out/Login.vue'
import Register from '@/views/logged-out/Register.vue'
import Forgot from '@/views/logged-out/Forgot.vue'
import Profile from '@/views/logged-in/Profile.vue'
import Settings from '@/views/logged-in/Settings.vue'
import Aircraft from '@/views/logged-in/school/Aircraft.vue'
import Tutors from '@/views/logged-in/school/Tutors.vue'
import Students from '@/views/logged-in/school/Students.vue'
import Schedule from '@/views/logged-in/students/Schedule.vue'
import AdminDashboard from '@/views/logged-in/admin/Dashboard.vue'
import Clients from '@/views/logged-in/admin/Clients.vue'
import SchoolDashboard from '@/views/logged-in/school/Dashboard.vue'


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
  {
    path: "/settings",
    name: "settings",
    component: Settings
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/tutors",
    name: "tutors",
    component: Tutors
  },
  {
    path: "/aircraft",
    name: "aircraft",
    component: Aircraft
  },
  {
    path: "/students",
    name: "students",
    component: Students
  },
  {
    path: "/schedule",
    name: "schedule",
    component: Schedule
  },
  {
    path: "/clients",
    name: "clients",
    component: Clients
  },
  {
    path: "/admin-dashboard",
    name: "admin-dashboard",
    component: AdminDashboard
  },
  {
    path: "/school-dashboard",
    name: "school-dashboard",
    component: SchoolDashboard
  },
  { path: "*", component: Error404 }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
