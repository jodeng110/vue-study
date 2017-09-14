import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './config/router'
import MultiLanguage from 'vue-multilanguage'
import _ from 'lodash'


// BootstrapVue
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

import language from './i18n/language'

Vue.use(_);
Vue.use(BootstrapVue);
Vue.use(MultiLanguage, language);

Vue.config.productionTip = false
Vue.prototype.$language = 'kr';
Vue.prototype.$langCode = 'kr';
Vue.prototype.$title2 = '테스트2';
Vue.prototype.$title = '테스트';


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