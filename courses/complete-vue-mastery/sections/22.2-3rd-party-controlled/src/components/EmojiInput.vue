<template>
  <div class="input-group">
    <input
      type="text"
      class="form-control"
      readonly
      :value="modelValue.emoji"
    >
    <div class="input-group-append">
      <button
        class="btn btn-outline-secondary"
        type="button"
        ref="emojiButton"
      >
        {{ modelValue ? modelValue.emoji : 'Select' }}
      </button>
    </div>
  </div>
</template>

<script>
import { EmojiButton } from '@joeattardi/emoji-button';

export default {
  name: 'EmojiInput',
  props: {
    modelValue: {
      required: true,
    },
    options: {
      default: () => {
        return {};
      },
    },
  },
  mounted() {
    const picker = new EmojiButton(this.options);
    const button = this.$refs.emojiButton;
    picker.on('emoji', (emoji) => {
      this.$emit('update:modelValue', emoji);
    });
    button.addEventListener('click', () => {
      picker.togglePicker(button);
    });
  },
};
</script>
