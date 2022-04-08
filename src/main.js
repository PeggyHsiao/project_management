import Vue from 'vue';
import App from './App';
import router from './router';

import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n';
import './plugins/veevalidate';
import './plugins/animate';

import './store/observable';

import './assets/styles/main.css';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
