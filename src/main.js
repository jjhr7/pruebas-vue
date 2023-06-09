import Vue from 'vue'
import App from './App.vue'
import router from "./router.js"

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
