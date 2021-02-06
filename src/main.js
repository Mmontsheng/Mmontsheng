import Vue from 'vue';
import App from '@/App.vue';
import store from '@/store';
import router from '@/router';
import Icon from '@/components/Icon.vue';

import '@/assets/css/bootstrap.min.css';
import '@/assets/css/style.css';

Vue.config.productionTip = false;
Vue.component('icon', Icon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
