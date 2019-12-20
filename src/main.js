import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'

import Globals from './mixins/Globals'

import EmployeeList from './components/Employee/EmployeeList'
import EmployeeCreate from './components/Employee/EmployeeCreate'
import EmployeeUpdate from './components/Employee/EmployeeUpdate'

Vue.config.productionTip = false

Vue.use(VueRouter, VueAxios, axios)

Vue.mixin(Globals)

const routes = [
  {
    name: 'EmployeeList',
    path: '/',
    component: EmployeeList
  },
  {
    name: 'EmployeeCreate',
    path: '/create',
    component: EmployeeCreate
  },
  {
    name: 'EmployeeUpdate',
    path: '/update/:id',
    component: EmployeeUpdate
  },
];

const router = new VueRouter({ mode: 'history', routes })

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
