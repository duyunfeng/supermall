import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import { request1 } from './network/request';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

request1({
  url: '/post',
}).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});
