import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import 'bootstrap' //import Bootstrap’s JavaScript
import 'bootstrap/dist/css/bootstrap.min.css' // import Bootstrap CSS Styles
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
