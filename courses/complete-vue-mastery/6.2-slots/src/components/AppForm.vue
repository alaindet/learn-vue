<template>
  <form>

    <div class="help">
      <p>This is some help text.</p>
    </div>

    <div class="fields">
      <input type="text" placeholder="Email...">
      <input type="text" placeholder="Username...">
      <input type="text" placeholder="Password...">
    </div>

    <div class="buttons">
      <button type="submit">Submit</button>
    </div>

  </form>
</template>

<script>
export default {
  name: 'AppForm',
}
</script>
