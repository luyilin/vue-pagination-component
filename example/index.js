import Vue from 'vue'
import App from './App.vue'
import vPagination from '../src/'

Vue.use(vPagination)

new Vue({
  el: '#app',
  render: h => h(App)
})
