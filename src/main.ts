import Vue from 'vue';
import App from './App.vue';

// Import Vendor Plugins
import './plugins';

// Import Styles
import './assets/styles/index.css';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount('#app');
