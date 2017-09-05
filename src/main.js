import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Vuex from 'vuex'
import VuexFire from 'vuexfire'
import { store } from './store'
import { routes } from './routes'

Vue.use(VueRouter, Vuex, VuexFire);

const router = new VueRouter({
    routes,
    // mode: 'abstract'
    mode: 'history'
});

export const EventBus = new Vue();

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
