import { Form as VeeValidateForm, Field as VeeValidateField, defineRule } from 'vee-validate';
import { required } from '@vee-validate/rules';

const install = (app) => {
  app.component('VeeValidateForm', VeeValidateForm);
  app.component('VeeValidateField', VeeValidateField);
  defineRule('required', required);
};

export default {
  install,
};
