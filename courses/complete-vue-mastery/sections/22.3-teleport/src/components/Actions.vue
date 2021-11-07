<template>
  <div class="d-flex flex-column mt-2 ml-2">
    <button
      type="button"
      class="btn btn-primary"
      @click="onActionClicked(Action.OpenVue)"
    >
      Open Vue modal
    </button>

    <button
      type="button"
      class="btn btn-primary mt-2"
      @click="onActionClicked(Action.OpenNative)"
    >
      Open "Native" modal
    </button>

    <button
      type="button"
      class="btn btn-primary mt-2"
      @click="onActionClicked(Action.OpenWithoutScroll)"
    >
      Open modal without scroll
    </button>
  </div>
</template>

<script>
export const Events = {
  ClickedAction: 'clickedAction',
};

export const Action = {
  OpenVue: 'open-vue',
  OpenNative: 'open-native',
  OpenWithoutScroll: 'open-without-scroll',
};

export default {
  name: 'AppAction',
  data() {
    return {
      Action,
    };
  },
  methods: {
    onActionClicked(action) {
      this.$emit(Events.ClickedAction, action);
    },
  },
};
</script>
