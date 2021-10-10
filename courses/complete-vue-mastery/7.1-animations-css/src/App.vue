<template>
  <div id="app-container">

    <button type="button" @click="onToggle">
      {{ show ? 'Leave' : 'Enter' }}
    </button>

    <!-- CSS Transition -->
    <!--
    <transition name="hello" mode="out-in">
      <h1 v-if="show" key="the-content" class="hello">Hello World</h1>
      <h1 v-else key="the-fallback" class="hello --fallback">The Fallback</h1>
    </transition>
    -->

    <!-- CSS Animation -->
    <!--
    <transition name="zoom" type="animation" appear="true">
      <h1 v-if="show">Zoom!</h1>
    </transition>
    -->

    <!-- JavaScript Animation -->
    <transition
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
      @after-leave="onAfterLeave"
      @enter-cancelled="onEnterCancelled"
      @leave-cancelled="onLeaveCancelled"
      :css="false"
    >
      <h1 v-if="show" class="hello">Zoom!</h1>
    </transition>

  </div>
</template>

<script>

// https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API
export default {
  name: 'App',
  data() {
    return {
      show: true,
    };
  },
  methods: {
    onToggle() {
      this.show = !this.show;
    },

    onBeforeEnter(el) {
      console.log('onBeforeEnter', el);
    },

    onEnter(el, done) {
      console.log('onEnter', el);

      const animation = el.animate(
        [
          // Start
          {
            transform: 'scale3d(0,0,0)',
          },
          // Finish
          {
            transform: 'scale3d(1,1,1)',
          },
        ],
        {
          duration: 1000,
        },
      );

      animation.onfinish = () => {
        done();
      };
    },

    onAfterEnter(el) {
      console.log('onAfterEnter', el);
    },

    onBeforeLeave(el) {
      console.log('onBeforeLeave', el);
    },

    onLeave(el, done) {
      console.log('onLeave', el);

      const animation = el.animate(
        [
          // Start
          {
            transform: 'scale3d(1,1,1)',
          },
          // Finish
          {
            transform: 'scale3d(0,0,0)',
          },
        ],
        {
          duration: 1000,
        },
      );

      animation.onfinish = () => {
        done();
      };
    },

    onAfterLeave(el) {
      console.log('onAfterLeave', el);
    },

    onEnterCancelled(el) {
      console.log('onEnterCancelled', el);
    },

    onLeaveCancelled(el) {
      console.log('onLeaveCancelled', el);
    },
  },
}
</script>

<style scoped>
  #app-container {
    --color-primary: #b5179e;
    --color-primary-light: #f72585;
    --color-accent: #4361ee;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80vh;
  }

  #app-container > * {
    margin: 2rem 0;
  }

  button {
    padding: 1rem 2rem;
    background-color: transparent;
    color: var(--color-primary);
    font-size: 1.3rem;
    border-radius: 100px;
    border: 2px solid currentColor;
    transition: 0.15s all ease-out;
    cursor: pointer;
  }

  button:hover {
    color: var(--color-primary-light);
  }

  button:focus {
    outline-color: #aaa;
    outline-offset: 4px;
    outline-style: dashed;
    outline-width: 1px;
  }

  .hello {
    color: var(--color-primary);
    font-family: sans-serif;
    font-size: 3rem;
  }

  .hello.--fallback {
    color: var(--color-accent);
  }

  .hello-enter-from {
    opacity: 0;
  }

  .hello-enter-active {
    transition: 1s all ease-out;
  }

  .hello-enter-to {
    /* Not used */
  }

  .hello-leave-from {
    /* Not used */
  }

  .hello-leave-active {
    transition: 1s all ease-out;
  }

  .hello-leave-to {
    opacity: 0;
  }

  .zoom-enter-from {
    opacity: 0;
  }

  .zoom-enter-active {
    animation: zoom-in 1s linear forwards;
    transition: all 2s linear;
  }

  .zoom-leave-active {
    animation: zoom-out 1s linear forwards;
    transition: all 2s linear;
  }

  .zoom-leave-to {
    opacity: 0;
  }

  @keyframes zoom-in {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes zoom-out {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0);
    }
  }
</style>
