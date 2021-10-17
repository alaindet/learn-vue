import {
  Form as VeeValidateForm,
  Field as VeeValidateField,
  ErrorMessage as VeeValidateErrorMessage,
  defineRule,
  configure,
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
    defineRule('terms_of_service', required); // Custom alias for custom messages
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alpha_spaces', alphaSpaces);
    defineRule('email', email);
    defineRule('min_value', minValue);
    defineRule('max_value', maxValue);
    defineRule('passwords_mismatch', confirmed);
    defineRule('excluded', excluded);
    defineRule('country_excluded', excluded); // Custom alias for custom messages

    configure({

      // This gets executed when an error message is needed
      generateMessage: (context) => {
        const { field, rule } = context;

        const messages = {
          required: `The field ${field} is required.`,
          min: `The field ${field} is too short`,
          max: `The field ${field} is too long`,
          alpha_spaces: `The field ${field} may only contain alphabetic characters and spaces.`,
          email: `The field ${field} must be a valid email.`,
          min_value: `The field ${field} value is too low`,
          max_value: `The field ${field} value is too high`,
          excluded: `You are not allowed to use this value for the field ${field}.`,
          country_excluded: 'Due to restrictions, we do not accept users from this location.',
          passwords_mismatch: 'The passwords don\'t match.',
          terms_of_service: 'You must accept the terms of service.',
        };

        const message = messages[rule.name] ?? `The field ${field} is invalid.`;

        return message;
      },

      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
