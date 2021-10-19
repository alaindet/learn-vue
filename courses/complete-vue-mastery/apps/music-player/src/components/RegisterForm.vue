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
      :initial-values="form.initial"
      @submit="onSubmit"
    >
      <!-- Name -->
      <div class="mb-3">
        <label class="inline-block mb-2">Name</label>
        <vee-validate-field
          as="input"
          name="name"
          type="text"
          placeholder="Enter Name"
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
        />
        <vee-validate-error-message class="text-red-600" name="name" />
      </div>

      <!-- Email -->
      <div class="mb-3">
        <label class="inline-block mb-2">Email</label>
        <vee-validate-field
          as="input"
          type="email"
          name="email"
          placeholder="Enter Email"
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
        />
        <vee-validate-error-message class="text-red-600" name="email" />
      </div>

      <!-- Age -->
      <div class="mb-3">
        <label class="inline-block mb-2">Age</label>
        <vee-validate-field
          as="input"
          type="number"
          name="age"
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
        />
        <vee-validate-error-message class="text-red-600" name="age" />
      </div>

      <!-- Password -->
      <div class="mb-3">
        <label class="inline-block mb-2">Password</label>
        <vee-validate-field
          name="password"
          :bails="false"
          v-slot="{ field, errors }"
        >
          <input
            type="password"
            placeholder="Password"
            v-bind="field"
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
          />
          <div v-for="error in errors" :key="error" class="text-red-600">
            {{ error }}
          </div>
        </vee-validate-field>
      </div>

      <!-- Confirm Password -->
      <div class="mb-3">
        <label class="inline-block mb-2">Confirm Password</label>
        <vee-validate-field
          as="input"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
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
        />
        <vee-validate-error-message
          class="text-red-600"
          name="confirmPassword"
        />
      </div>

      <!-- Country -->
      <div class="mb-3">
        <label class="inline-block mb-2">Country</label>
        <vee-validate-field
          as="select"
          name="country"
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
        >
          <option value="Italy">Italy</option>
          <option value="USA">USA</option>
          <option value="Mexico">Mexico</option>
          <option value="Germany">Germany</option>
          <option value="Antarctica">Antarctica</option>
        </vee-validate-field>
        <vee-validate-error-message class="text-red-600" name="country" />
      </div>

      <!-- Terms of Service -->
      <div class="mb-3 pl-6">
        <vee-validate-field
          as="input"
          id="tos"
          type="checkbox"
          value="1"
          name="tos"
          class="w-4 h-4 float-left -ml-6 mt-1 rounded"
        />
        <label class="inline-block" for="tos"> Accept terms of service </label>
        <vee-validate-error-message class="text-red-600 block" name="tos" />
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
export default {
  name: 'RegisterForm',
  data() {
    return {
      form: {
        schema: {
          name: 'required|min:3|max:100|alpha_spaces',
          email: 'required|min:3|max:100|email',
          age: 'required|min_value:18|max_value:100',
          password: 'required|min:3|max:180',
          confirmPassword: 'required|passwords_mismatch:@password',
          country: 'required|country_excluded:Antarctica',
          tos: 'terms_of_service',
        },
        initial: {
          country: 'Italy',
        },
        isSubmitting: false,
      },
      alert: {
        show: false,
        style: 'bg-blue-500',
        message: 'Please wait! Your account is being created.',
      },
    };
  },
  methods: {
    async onSubmit(formValue) {
      this.form.isSubmitting = true;
      this.alert.show = true;
      this.alert.style = 'bg-blue-500';
      this.alert.message = 'Please wait! Your account is being created.';

      try {
        await this.$store.dispatch('register', formValue);
      } catch (error) {
        console.error(error);
        this.form.isSubmitting = false;
        this.alert.style = 'bg-red-500';
        this.alert.message = 'An unexpected error occurred.';
        return;
      }

      this.alert.style = 'bg-green-500';
      this.alert.message = 'Success! Your account has been created.';
      this.form.isSubmitting = false;
    },
  },
};
</script>
