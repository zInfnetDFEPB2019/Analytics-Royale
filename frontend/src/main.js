import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router';
import cors from 'cors';
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import Home from "./pages/Home.vue"
import AboutUs from "./pages/AboutUs.vue"

Vue.use(cors);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/aboutus', name: 'About us', component: AboutUs}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
