<template>
  <div
    id="modal"
    class="fixed z-10 inset-0 overflow-y-auto"
    :class="{ hidden: !showAuthModal }"
  >
    <div
      class="
        flex
        items-end
        justify-center
        min-h-screen
        pt-4
        px-4
        pb-20
        text-center
        sm:block
        sm:p-0
      "
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
        >&#8203;</span
      >

      <div
        class="
          inline-block
          align-bottom
          bg-white
          rounded-lg
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8
          sm:align-middle
          sm:max-w-lg
          sm:w-full
        "
      >
        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl font-bold">Your Account</p>
            <!-- Modal Close Button -->
            <div class="modal-close cursor-pointer z-50" @click.prevent="toggleAuthModal">
              <i class="fas fa-times"></i>
            </div>
          </div>

          <!-- Tabs -->
          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center">
              <a
                href="#"
                class="block rounded py-3 px-4 transition"
                :class="{
                  'hover:text-white text-white bg-blue-600': tab === 'login',
                  'hover:text-blue-600': tab !== 'login'
                }"
                @click.prevent="tab = 'login'"
              >
                Login
                </a
              >
            </li>
            <li class="flex-auto text-center">
              <a
                href="#"
                class="block rounded py-3 px-4 transition"
                :class="{
                  'hover:text-white text-white bg-blue-600': tab === 'register',
                  'hover:text-blue-600': tab !== 'register'
                }"
                @click.prevent="tab = 'register'"
              >
                Register
              </a>
            </li>
          </ul>

          <!-- Login Form -->
          <form v-show="tab === 'login'">
            <!-- Email -->
            <div class="mb-3">
              <label class="inline-block mb-2">Email</label>
              <input
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
                  focus:outline-none
                  focus:border-black
                  rounded
                "
                placeholder="Enter Email"
              />
            </div>

            <!-- Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Password</label>
              <input
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
                  focus:outline-none
                  focus:border-black
                  rounded
                "
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
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
          </form>

          <!-- Registration Form -->
          <vee-validate-form
            v-show="tab === 'register'"
            :validation-schema="registrationForm.schema"
            :initial-values="registrationForm.initial"
            @submit="onSubmitRegistrationForm"
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
                  focus:outline-none
                  focus:border-black
                  rounded
                "
              />
              <vee-validate-error-message
                class="text-red-600"
                name="name"
              />
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
                  focus:outline-none
                  focus:border-black
                  rounded
                "
              />
              <vee-validate-error-message
                class="text-red-600"
                name="email"
              />
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
                  focus:outline-none
                  focus:border-black
                  rounded
                "
              />
              <vee-validate-error-message
                class="text-red-600"
                name="age"
              />
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
                    focus:outline-none
                    focus:border-black
                    rounded
                  "
                >
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
                  focus:outline-none
                  focus:border-black
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
                  focus:outline-none
                  focus:border-black
                  rounded
                "
              >
                <option value="Italy">Italy</option>
                <option value="USA">USA</option>
                <option value="Mexico">Mexico</option>
                <option value="Germany">Germany</option>
                <option value="Antarctica">Antarctica</option>
              </vee-validate-field>
              <vee-validate-error-message
                class="text-red-600"
                name="country"
              />
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
              <label class="inline-block" for="tos">
                Accept terms of service
              </label>
              <vee-validate-error-message
                class="text-red-600 block"
                name="tos"
              />
            </div>

            <!-- Submit -->
            <button
              type="submit"
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

/**
 * If you don't need to perform calculations, getters extracted with mapGetters
 * can be swapped with just mapState, which returns functions only for
 * extracting direct store data without manipulation
 */
export default {
  name: 'AuthModal',
  data() {
    return {
      tab: 'login',
      registrationForm: {
        schema: {
          name: 'required|min:3|max:100|alpha_spaces',
          email: 'required|min:3|max:100|email',
          age: 'required|min_value:18|max_value:100',
          password: 'required|min:3|max:180',
          confirmPassword: 'required|confirmed:@password',
          country: 'required|excluded:Antarctica',
          tos: 'required',
        },
        initial: {
          country: 'Italy',
        },
      },
    };
  },
  computed: {
    ...mapState(['showAuthModal']),
    // Alias
    // ...mapState({ isModal: 'showAuthModal' }),
  },
  methods: {
    ...mapMutations(['toggleAuthModal']),
    // Alias
    // ...mapMutations({ toggleModal: 'toggleAuthModal' }),

    // @submit does not emit if form is invalid
    onSubmitRegistrationForm(formValue) {
      console.log('onSubmitRegistrationForm', formValue);
    },
  },
};
</script>
