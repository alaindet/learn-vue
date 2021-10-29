import { createApp } from 'vue';

import App from './App.vue';
// import Icon from './directives/icon';
import router from './router';
import store from './store';

import VeeValidatePlugin from './plugins/vee-validate';
import { auth } from './plugins/firebase';
import i18nPlugin from './plugins/i18n';
import BaseComponents from './includes/base-components';
import './assets/tailwind.css';
import './assets/main.css';
import './registerServiceWorker';

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    app.use(store);
    app.use(router);
    app.use(VeeValidatePlugin);
    app.use(i18nPlugin);

    // Register global components here
    app.use(BaseComponents);

    // Global registration of a directive (DOES NOT WORK!)
    // app.directive(Icon);

    app.mount('#app');
  }
});
