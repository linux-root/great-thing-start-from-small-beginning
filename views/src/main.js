import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import store from './store'
import veeValidate from 'vee-validate'
import sweetAlert from 'vue-sweetalert2'
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(veeValidate)
Vue.use(sweetAlert)

new Vue({
    router,
    store,
  render: h => h(App)
}).$mount('#app')
