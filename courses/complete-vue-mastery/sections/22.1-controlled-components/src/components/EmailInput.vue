<template>
  <input
    type="email"
    class="form-control"
    placeholder="E-mail"
    :value="email"
    @input="onInput($event)"
    :class="{
      'is-valid': validateEmail(email),
      'is-invalid': !validateEmail(email),
    }"
  />
</template>

<script>
import validateEmail from '../validators/email';

export default {
  name: 'EmailInput',
  props: ['email'],
  methods: {
    onInput($event) {
      this.$emit('update:email', $event.target.value);
    },
    validateEmail,
  },
};
</script>
