<template>
  <div id="app" class="container">
    <p>
      This demo uses both Vue's event approach and the browser's native events
      to manage a modal. This shows the brower's native events could be better
      in some cases.
    </p>
    <app-actions @clickedAction="onActionClicked($event)" />

    <!-- Just noise -->
    <hr>
    <div>
      <h2>Just some noise to test scrolling</h2>
      <p class="text-justify">
        <!-- eslint-disable-next-line max-len -->
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae in error, voluptate consequuntur eum itaque amet doloribus dolorum corrupti et, officia rerum vitae commodi a earum aliquam obcaecati! Debitis, quis!
      </p>
      <p class="text-justify">
        <!-- eslint-disable-next-line max-len -->
        Atque quidem architecto voluptatum iusto, corporis rem provident. Eveniet ea blanditiis ratione, sequi harum nihil quo officia libero nostrum nulla a veritatis modi nobis in sapiente iusto quos temporibus eaque.
      </p>
      <p class="text-justify">
        <!-- eslint-disable-next-line max-len -->
        Obcaecati optio fugit eligendi, vero temporibus non reiciendis rem maiores deserunt, sunt unde dolore ratione dolorum suscipit modi veritatis voluptatem perferendis officia doloribus velit? Ullam nulla reprehenderit id voluptatibus at?
      </p>
      <p class="text-justify">
        <!-- eslint-disable-next-line max-len -->
        Quas ut vel blanditiis sunt expedita corporis magni nemo possimus dignissimos. Repellat error impedit nisi voluptas, autem, quae reprehenderit voluptatem quam reiciendis adipisci atque laboriosam doloribus, aliquam commodi asperiores delectus!
      </p>
      <p class="text-justify">
        <!-- eslint-disable-next-line max-len -->
        Minus atque cumque dignissimos nam. Qui aut molestiae animi obcaecati dolorum, minima numquam libero iure voluptas! Impedit aliquid cupiditate corrupti ipsam vitae provident? Ut, vero ea est animi vel ex.
      </p>
      <p class="text-justify">
        <!-- eslint-disable-next-line max-len -->
        Aperiam ullam aspernatur culpa nobis numquam temporibus perspiciatis. Ipsam blanditiis quis fugit laudantium, tempore impedit ullam reiciendis quo neque, officiis illo illum distinctio quasi hic dolores in, placeat voluptas? Quaerat!
      </p>
      <p class="text-justify">
        <!-- eslint-disable-next-line max-len -->
        Molestiae praesentium nobis earum labore eos saepe quod dolor? Voluptas id debitis labore enim ea nihil consectetur, culpa amet repudiandae illum, eligendi dolores suscipit ab mollitia beatae animi! Beatae, eos!
      </p>
      <p class="text-justify">
        <!-- eslint-disable-next-line max-len -->
        Facilis soluta quo, possimus vero sapiente, a odio iure ut sed numquam quisquam esse officiis! Delectus, laudantium itaque? Eius quos soluta aliquid nostrum molestiae nobis omnis doloribus sint quaerat ducimus!
      </p>
      <p class="text-justify">
        <!-- eslint-disable-next-line max-len -->
        Et commodi ullam, quod libero numquam itaque ab! Dolorum, doloremque odit, mollitia totam veniam quia quaerat ut est voluptatem vero amet alias suscipit deserunt qui nesciunt aut? Dolor, totam magni?
      </p>
      <p class="text-justify">
        <!-- eslint-disable-next-line max-len -->
        Error impedit esse, ipsa ad, aspernatur alias assumenda modi dolor veniam tempora vero eveniet, minus sit nesciunt enim odio. Nihil reprehenderit voluptas dolor ratione aut rem sapiente dolore animi. Ipsa?
      </p>
      <p class="text-justify">
        <!-- eslint-disable-next-line max-len -->
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae in error, voluptate consequuntur eum itaque amet doloribus dolorum corrupti et, officia rerum vitae commodi a earum aliquam obcaecati! Debitis, quis!
      </p>
      <p class="text-justify">
        <!-- eslint-disable-next-line max-len -->
        Atque quidem architecto voluptatum iusto, corporis rem provident. Eveniet ea blanditiis ratione, sequi harum nihil quo officia libero nostrum nulla a veritatis modi nobis in sapiente iusto quos temporibus eaque.
      </p>
      <p class="text-justify">
        <!-- eslint-disable-next-line max-len -->
        Obcaecati optio fugit eligendi, vero temporibus non reiciendis rem maiores deserunt, sunt unde dolore ratione dolorum suscipit modi veritatis voluptatem perferendis officia doloribus velit? Ullam nulla reprehenderit id voluptatibus at?
      </p>
      <p class="text-justify">
        <!-- eslint-disable-next-line max-len -->
        Quas ut vel blanditiis sunt expedita corporis magni nemo possimus dignissimos. Repellat error impedit nisi voluptas, autem, quae reprehenderit voluptatem quam reiciendis adipisci atque laboriosam doloribus, aliquam commodi asperiores delectus!
      </p>
      <p class="text-justify">
        <!-- eslint-disable-next-line max-len -->
        Minus atque cumque dignissimos nam. Qui aut molestiae animi obcaecati dolorum, minima numquam libero iure voluptas! Impedit aliquid cupiditate corrupti ipsam vitae provident? Ut, vero ea est animi vel ex.
      </p>
      <p class="text-justify">
        <!-- eslint-disable-next-line max-len -->
        Aperiam ullam aspernatur culpa nobis numquam temporibus perspiciatis. Ipsam blanditiis quis fugit laudantium, tempore impedit ullam reiciendis quo neque, officiis illo illum distinctio quasi hic dolores in, placeat voluptas? Quaerat!
      </p>
      <p class="text-justify">
        <!-- eslint-disable-next-line max-len -->
        Molestiae praesentium nobis earum labore eos saepe quod dolor? Voluptas id debitis labore enim ea nihil consectetur, culpa amet repudiandae illum, eligendi dolores suscipit ab mollitia beatae animi! Beatae, eos!
      </p>
      <p class="text-justify">
        <!-- eslint-disable-next-line max-len -->
        Facilis soluta quo, possimus vero sapiente, a odio iure ut sed numquam quisquam esse officiis! Delectus, laudantium itaque? Eius quos soluta aliquid nostrum molestiae nobis omnis doloribus sint quaerat ducimus!
      </p>
      <p class="text-justify">
        <!-- eslint-disable-next-line max-len -->
        Et commodi ullam, quod libero numquam itaque ab! Dolorum, doloremque odit, mollitia totam veniam quia quaerat ut est voluptatem vero amet alias suscipit deserunt qui nesciunt aut? Dolor, totam magni?
      </p>
      <p class="text-justify">
        <!-- eslint-disable-next-line max-len -->
        Error impedit esse, ipsa ad, aspernatur alias assumenda modi dolor veniam tempora vero eveniet, minus sit nesciunt enim odio. Nihil reprehenderit voluptas dolor ratione aut rem sapiente dolore animi. Ipsa?
      </p>
    </div>

    <teleport to="#teleport-modals">
      <app-modal-vue :show="openVue" @hide="openVue = false" />
    </teleport>

    <teleport to="#teleport-modals">
      <app-modal-native :show="openNative" @hide="openNative = false" />
    </teleport>

    <teleport to="#teleport-modals">
      <app-modal-no-scroll
        :show="openWithoutScroll"
        :scrollable="false"
        @hide="openWithoutScroll = false"
      />
    </teleport>
  </div>
</template>

<script>
import AppActions, { Action as AppAction } from '@/components/Actions.vue';
import AppModalNative from '@/components/ModalNative.vue';
import AppModalNoScroll from '@/components/ModalNoScroll.vue';
import AppModalVue from '@/components/ModalVue.vue';

export default {
  name: 'App',
  components: {
    AppActions,
    AppModalNative,
    AppModalNoScroll,
    AppModalVue,
  },
  data() {
    return {
      openVue: false,
      openNative: false,
      openWithoutScroll: false,
    };
  },
  methods: {
    onActionClicked(action) {
      switch (action) {
        case AppAction.OpenVue:
          this.openVue = true;
          break;
        case AppAction.OpenNative:
          this.openNative = true;
          break;
        case AppAction.OpenWithoutScroll:
          this.openWithoutScroll = true;
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style src="bootstrap/dist/css/bootstrap.css"></style>
