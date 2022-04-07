import Vue from 'vue';
import App from './App';
import router from './router';

import vuetify from './plugins/vuetify';
import veevalidate from './plugins/veevalidate';
import i18n from './plugins/i18n';
import animate from './plugins/animate';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  veevalidate,
  animate,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
