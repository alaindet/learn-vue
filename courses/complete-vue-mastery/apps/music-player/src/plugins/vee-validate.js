import {
  Form as VeeValidateForm,
  Field as VeeValidateField,
  ErrorMessage as VeeValidateErrorMessage,
  defineRule,
} from 'vee-validate';

import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minValue,
  max_value as maxValue,
  confirmed,
  not_one_of as excluded,
} from '@vee-validate/rules';

export default {
  install: (app) => {
    app.component('VeeValidateForm', VeeValidateForm);
    app.component('VeeValidateField', VeeValidateField);
    app.component('VeeValidateErrorMessage', VeeValidateErrorMessage);

    defineRule('required', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alpha_spaces', alphaSpaces);
    defineRule('email', email);
    defineRule('min_value', minValue);
    defineRule('max_value', maxValue);
    defineRule('confirmed', confirmed);
    defineRule('excluded', excluded);
  },
};
