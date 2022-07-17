import '@/assets/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import Icon from '@/components/Icon.vue';

import '@/assets/css/style.css';

import splitbee from '@splitbee/web';

Vue.config.productionTip = false;
Vue.component('icon', Icon);

splitbee.init();

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
