import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import './http';
import store from './store'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  /* Redirection pour ma route Index */
  mounted() {
    this.$router.replace('/') // added this
  },
  render: h => h(App),
}).$mount('#app')
