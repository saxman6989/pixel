// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import VueSocketio from 'vue-socket.io'
import App from './App'
import Spectre from '../node_modules/spectre.css/docs/dist/spectre.css'

const socketUrl = 'localhost:5555'

/* eslint-disable no-new */
Vue.use(VueSocketio, socketUrl);
Vue.use(VeeValidate);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
