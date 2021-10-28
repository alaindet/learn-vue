import { createApp } from 'vue';

import App from './App.vue';
// import Icon from './directives/icon';
import router from './router';
import store from './store';

import VeeValidatePlugin from './plugins/vee-validate';
import { auth } from './plugins/firebase';
import i18n from './plugins/i18n';
import './assets/tailwind.css';
import './assets/main.css';

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    app.use(store);
    app.use(router);
    app.use(VeeValidatePlugin);
    app.use(i18n);
    // Global registration of a directive (DOES NOT WORK!)
    // app.directive(Icon);

    app.mount('#app');
  }
});
