<template>
  <form>
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
