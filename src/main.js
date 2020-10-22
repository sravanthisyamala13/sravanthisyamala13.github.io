import Vue from 'vue'
import App from './App.vue'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import VueVideoSection from 'vue-video-section'
import vuetify from './plugins/vuetify';
import router from './router';
import * as VeeValidate from 'vee-validate';
import { extend, ValidationProvider, ValidationObserver } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';

Vue.component('vue-video-section', VueVideoSection)
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('Validation-Observer', ValidationObserver);
Vue.use(VeeValidate);
extend('required', {
  ...required,
  message: 'This field is required'
});
extend('alphaNumeric', value => {
  const pattern = /^[a-zA-Z0-9-,/:.;@#*&$¥'|()-\s]*$/;
  return (  
    pattern.test(value) ||
    `Enter Alphanumeric`
  );
});
extend('email', value => {
  // eslint-disable-next-line no-useless-escape
  const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return (  
    pattern.test(value) ||
    `Inavalid Email`
  );
});

Vue.use(

  Vuetify, {
  theme: {
    primary: "#009BBE",
    secondary: "#099702",
    secondaryBlue: "#0E94D7",
    secondaryBlue2: "#003442",
    skyBlue: "#08A9B4",
    skyBlue2: "#009688",
    accentblue: "#21B2E3",
    accent: "#82B1FF",
    error: "#FF4444",
    info: "#33B5E5",
    success: "#00C851",
    warning: "#E41313",
    neutralGray: "#808E9A",
    darkgray: "#333333",
    mediumGray: "#555555",
    grayText: "#757575",
    orange: "#F08834",
    pureblack: "#000000",
    primaryGreen: "#78A413",
    primaryGreen2: "#10AA01",
    blackshade: "#505151"
  },
  iconfont: "md",
});
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
