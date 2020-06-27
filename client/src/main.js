import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import './http';
import store from './store'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
/* import { navBarToggler } from './assets/navbar/navBar'; */


Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  router,
  store, 
  render: h => h(App),
}).$mount('#app')
