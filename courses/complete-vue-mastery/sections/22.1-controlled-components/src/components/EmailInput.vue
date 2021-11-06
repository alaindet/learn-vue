<template>
  <input
    type="email"
    class="form-control"
    placeholder="E-mail"
    :value="email"
    @input="onInput($event)"
    :class="{
      'is-valid': email.length >= 4,
      'is-invalid': email.length > 0 && email.length < 4,
    }"
  />
</template>

<script>
export default {
  name: 'EmailInput',
  props: ['email'],
  methods: {
    onInput($event) {
      this.$emit('update:email', $event.target.value);
    },
  },
};
</script>
