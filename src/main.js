import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SuiVue from 'semantic-ui-vue'
import VueMask from 'v-mask'
import VueCarousel from 'vue-carousel';
import 'semantic-ui-css/semantic.min.css'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import 'animate.css';

Vue.config.productionTip = false

Vue.use(SuiVue)
Vue.use(VueMask);
Vue.use(VueCarousel);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
