<template>
  <form>

    <div class="help">
      <slot name="help"></slot>
    </div>

    <div class="fields">
      <slot name="fields"></slot>
    </div>

    <div class="buttons">
      <slot name="buttons"></slot>
    </div>

    <!-- Default slot -->
    <slot>
      No form to render (Some default content for this slot)
    </slot>
  </form>
</template>

<script>
export default {
  name: 'AppForm',
}
</script>
