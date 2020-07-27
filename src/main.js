import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import 'bootstrap' //import Bootstrap’s JavaScript
import 'bootstrap/dist/css/bootstrap.min.css' // import Bootstrap CSS Styles

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
