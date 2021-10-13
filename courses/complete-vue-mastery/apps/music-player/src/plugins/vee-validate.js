import { Form as VeeValidateForm, Field as VeeValidateField } from 'vee-validate';

const install = (app) => {
  app.component('VeeValidateForm', VeeValidateForm);
  app.component('VeeValidateField', VeeValidateField);
};

export default {
  install,
};
