import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
// import HelloWorld from './components/HelloWorld.vue'
Vue.config.productionTip = false

// Vue.component('app-servers', HelloWorld);

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
