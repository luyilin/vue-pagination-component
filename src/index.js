import vPagination from './pagination.vue'

const install = Vue => {
  Vue.component('v-pagination', vPagination)
}

export default install

if ((typeof window !== 'undefined') && window.Vue) {
  install(window.Vue)
}
