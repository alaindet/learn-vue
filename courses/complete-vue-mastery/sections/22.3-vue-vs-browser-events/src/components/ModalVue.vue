<template>
  <div class="modal" :style="{ display: show ? 'block': 'none' }">
    <div
      class="modal-dialog"
      style="z-index: 2000;"
      @keydown.esc="close"
      tabIndex="0"
      ref="modalRef"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal with Vue events</h5>
          <button type="button" class="close" @click="close">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Modal is already focused. Press <kbd>Esc</kbd> to dismiss.</p>
        </div>
      </div>
    </div>
    <div class="modal-backdrop show"></div>
  </div>
</template>

<script>
/**
 * Uses Vue's event system
 * @see ModalVue for the "native" approach
 */
export default {
  name: 'ModalVue',
  props: ['show'],
  methods: {
    close() {
      this.$emit('hide');
    },
  },
  watch: {
    show(newValue) {
      if (newValue) {
        // Executes after DOM updates
        this.$nextTick(() => {
          this.$refs.modalRef.focus();
        });
      }
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
