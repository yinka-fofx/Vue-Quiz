import Vue from 'vue'

// import Header from './components/header.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import App from './App.vue'

Vue.use(BootstrapVue)




// Vue.component('message', Header);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
