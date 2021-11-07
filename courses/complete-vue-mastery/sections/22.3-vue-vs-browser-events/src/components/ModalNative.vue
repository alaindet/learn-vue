<template>
  <div class="modal" :style="{ display: show ? 'block': 'none' }">
    <div
      class="modal-dialog"
      style="z-index: 2000;"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal with native events</h5>
          <button type="button" class="close" @click="close">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Press <kbd>Esc</kbd> to dismiss.</p>
        </div>
      </div>
    </div>
    <div class="modal-backdrop show"></div>
  </div>
</template>

<script>
/**
 * Uses the browser's native API
 * @see ModalVue for Vue approach
 */
export default {
  name: 'ModalTwo',
  props: ['show'],
  created() {
    document.addEventListener('keydown', this.handleKeydown);
  },
  unmounted() {
    document.removeEventListener('keydown', this.handleKeydown);
  },
  methods: {
    handleKeydown(event) {
      if (event.code === 'Escape' && this.show) {
        this.close();
      }
    },
    close() {
      this.$emit('hide');
    },
  },
};
</script>

<style scoped>
.modal-dialog:focus {
  outline: 3px dashed white;
  outline-offset: 2px;
}
</style>
