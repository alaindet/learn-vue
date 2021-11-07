<template>
  <div id="app">
    <p>
      This demo uses both Vue's event approach and the browser's native events
      to manage a modal. This shows the brower's native events could be better
      in some cases.
    </p>
    <div class="mt-2 ml-2">
      <button type="button" class="btn btn-primary" @click="openVue = true">
        Open Vue modal
      </button>
      <button type="button" class="btn btn-primary ml-2" @click="openNative = true">
        Open "Native" modal
      </button>
    </div>

    <app-modal-vue :show="openVue" @hide="openVue = false" />
    <app-modal-native :show="openNative" @hide="openNative = false" />
  </div>
</template>

<script>
import AppModalVue from '@/components/ModalVue.vue';
import AppModalNative from '@/components/ModalNative.vue';

export default {
  name: 'App',
  components: {
    AppModalVue,
    AppModalNative,
  },
  data() {
    return {
      openVue: false,
      openNative: false,
    };
  },

};
</script>

<style src="bootstrap/dist/css/bootstrap.css"></style>
