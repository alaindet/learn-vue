<template>
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">

      <!-- App Name -->
      <a class="text-white font-bold uppercase text-2xl mr-4" href="#">
        Music
      </a>

      <div class="flex flex-grow items-center">

        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <li>
            <a class="px-2 text-white" href="#" @click.prevent="onToggleAuthModal">
              Login / Register
            </a>
          </li>
          <li>
            <a class="px-2 text-white" href="#">
              Manage
            </a>
          </li>
        </ul>

      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    onToggleAuthModal() {
      // WARNING: NEVER EVER SET THE STORE STATE MANUALLY!
      this.$store.state.showAuthModal = !this.$store.state.showAuthModal;
      console.log(this.$store.state.showAuthModal);
    },
  },
};
</script>
