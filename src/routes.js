import Vue from 'vue'
import Router from 'vue-router'
import About from './components/about.vue'
import Contact from './components/contact.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    { 
      path:'/contact',
      name:'contact',
      component: Contact
    }
  ]
})