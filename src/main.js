import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './config/router'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

/*
 h => h(App)
 
 - createElement => createElement(App) 와 같다.
 - h의 유래는 hyperscript에서 유래
 - hyperscript :  html 구조를 생성하는 스크립트를 의미
*/