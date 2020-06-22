import Vue from 'vue'
import Router from 'vue-router'
import Language from "@/components/Language/language"
import Other from "@/components/Other/Other"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'language',
      component: Language
    },{
      path: '/other',
      name: 'other',
      component: Other
    }
  ]
})
