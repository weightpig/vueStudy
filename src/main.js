// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import { Button,Container } from 'element-ui'
import ElementUI from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale/lang/en'
import '../static/common.css'
Vue.config.productionTip = false
Vue.use(ElementUI, { locale });
/* eslint-disable no-new */
import i18n from "./assets/i18n/index.js"


new Vue({
  el: '#app',
  router,
  components: { App,lang,locale},
  template: '<App/>',
  i18n
})
