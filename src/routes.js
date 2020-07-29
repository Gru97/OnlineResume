import Vue from 'vue'
import Router from 'vue-router'
import About from './components/about.vue'
import Contact from './components/contact.vue'
import Blog from './components/blog/blog.vue'
import Post from './components/blog/post.vue'

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
    },
    { 
      path:'/blog',
      name:'blog',
      component: Blog
    },
    { 
      path:'/blog/post/:title',
      name:'post',
      component: Post
    }
  ]
})