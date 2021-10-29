<template>
  <div>
    <!-- Alert -->
    <div
      v-if="alert.show"
      class="text-white text-center font-bold p-5 mb-4"
      :class="alert.style"
    >
      {{ alert.message }}
    </div>

    <!-- Form -->
    <vee-validate-form
      :validation-schema="form.schema"
      @submit="onSubmit"
    >
      <!-- Email -->
      <div class="mb-3">
        <label class="inline-block mb-2">Email</label>
        <vee-validate-field
          as="input"
          name="email"
          type="email"
          class="
            block
            w-full
            py-1.5
            px-3
            text-gray-800
            border border-gray-300
            transition
            duration-500
            focus:outline-none focus:border-black
            rounded
          "
          placeholder="Enter Email"
        />
        <vee-validate-error-message class="text-red-600" name="email" />
      </div>

      <!-- Password -->
      <div class="mb-3">
        <label class="inline-block mb-2">Password</label>
        <vee-validate-field
          as="input"
          name="password"
          type="password"
          class="
            block
            w-full
            py-1.5
            px-3
            text-gray-800
            border border-gray-300
            transition
            duration-500
            focus:outline-none focus:border-black
            rounded
          "
          placeholder="Password"
        />
        <vee-validate-error-message class="text-red-600" name="password" />
      </div>

      <!-- Submit -->
      <button
        type="submit"
        :disabled="form.isSubmitting"
        class="
          block
          w-full
          bg-purple-600
          text-white
          py-1.5
          px-3
          rounded
          transition
          hover:bg-purple-700
        "
      >
        Submit
      </button>
    </vee-validate-form>
  </div>
</template>

<script>
import { Prefix, Action, Mutation } from '@/store/modules/auth';

export default {
  name: 'LoginForm',
  data() {
    return {
      form: {
        schema: {
          email: 'required|min:3|max:100|email',
          password: 'required|min:3|max:180',
        },
        isSubmitting: false,
      },
      alert: {
        show: false,
        style: 'bg-blue-500',
        message: 'Please wait! We are logging you in',
      },
    };
  },
  methods: {
    async onSubmit(formValue) {
      this.form.isSubmitting = true;
      this.alert.show = true;
      this.alert.style = 'bg-blue-500';
      this.alert.message = 'Please wait! We are logging you in.';

      try {
        await this.$store.dispatch(`${Prefix}/${Action.LogIn}`, formValue);
        this.alert.style = 'bg-green-500';
        this.alert.message = 'Success! You are now logged in.';
        this.form.isSubmitting = false;
        this.$store.commit(Mutation.ToggleAuthModal);
      } catch (error) {
        console.error(error);
        this.form.isSubmitting = false;
        this.alert.show = true;
        this.alert.style = 'bg-red-500';
        this.alert.message = 'Invalid login details';
      }
    },
  },
};
</script>
