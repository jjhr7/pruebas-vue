import Vue from 'vue'
import App from './App.vue'
import router from "./router.js"
import '@babel/polyfill';

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
