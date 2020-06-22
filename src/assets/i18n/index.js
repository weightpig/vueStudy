import Vue from "vue"
import VueI18n from "vue-i18n"
import en from "./en.js"
import zh from "./zh.js"
Vue.use(VueI18n);
const i18n=new VueI18n({
    locale:localStorage.getItem("locale")||"zh",
    messages:{zh,en}
})
export default i18n;