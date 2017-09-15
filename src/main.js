import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './config/router'
import VueI18n from 'vue-i18n'

import _ from 'lodash'
import moment from 'moment'
import VueMomentJS from 'vue-momentjs'
import 'moment/locale/ja'
import 'moment/locale/ko'

// BootstrapVue
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

import language from './i18n/language'

Vue.use(_);
Vue.use(BootstrapVue);
Vue.use(VueI18n);
Vue.use(VueMomentJS, moment);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  i18n: language,
  router,
  render (h) {
    return h(App);
  }
});

/*
 h => h(App)
 
 - createElement => createElement(App) 와 같다.
 - h의 유래는 hyperscript에서 유래
 - hyperscript :  html 구조를 생성하는 스크립트를 의미
*/