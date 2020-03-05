import Vue from 'vue'
import Router from 'vue-router'

import viewBet from '../components/Views/viewBet.vue'





Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: viewBet},
  ]
})