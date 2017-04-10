// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import VueSocketio from 'vue-socket.io'
import App from './App'
import Spectre from '../node_modules/spectre.css/dist/spectre.css'

/* eslint-disable no-new */
Vue.use(VueSocketio, 'http://localhost:5678');
Vue.use(VeeValidate);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
