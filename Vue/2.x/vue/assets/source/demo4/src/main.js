import Vue from './../../../common/vue.browser.js';
import App from './App.js';

const vm = new Vue({
  render: h => h(App)
});

vm.$mount('#app');
