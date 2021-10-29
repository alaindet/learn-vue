<template>
  <div
    class="
      fixed
      bottom-0
      left-0
      bg-white
      p-5
      w-full
      h-16
    "
  >
    <div class="relative flex items-center">

      <!-- Play/Pause Button -->
      <div class="w-7 leading-3">
        <button
          type="button"
          :disabled="!getIsSong"
          :class="{ 'opacity-50 cursor-not-allowed': !getIsSong }"
          @click.prevent="onPlayOrPauseSong"
        >
          <i
            class="fa text-gray-500 text-xl"
            :class="{
              'fa-play': !getSongIsPlaying,
              'fa-pause': getSongIsPlaying,
            }"
          ></i>
        </button>
      </div>

      <!-- Current Position -->
      <div
        class="
          leading-3
          text-gray-400
          text-lg
          w-14
          ml-5
          whitespace-nowrap
        "
      >
        {{ songSeek }}
      </div>

      <!-- Scrub -->
      <div class="w-7 leading-3 ml-7 player-scrub">

        <!-- Song title and author -->
        <div
          v-if="songMetadata"
          class="
            absolute
            left-0
            right-0
            text-center
            mx-auto
            pt-2
            player-song-info
          "
        >
          <span class="font-bold">{{ songMetadata.modifiedName }}</span> by
          <span class="italic">{{ songMetadata.userDisplayName }}</span>
        </div>

        <!-- Scrub Container  -->
        <span
          class="
            block
            w-full
            rounded
            bg-gray-200
            relative
            cursor-pointer
            mt-1
          "
          @click.prevent="onMoveSeek"
        >
          <!-- Player Ball -->
          <!-- TODO: Add drag events to player ball -->
          <span
            class="absolute text-gray-800 text-lg transition-all"
            :style="{
              left: songPercentageProgress,
              transform: 'translate(-50%, -34%)',
            }"
          >
            <i class="fas fa-circle"></i>
          </span>

          <!-- Player Progress Bar -->
          <span
            class="
              block
              h-2
              rounded
              bg-gradient-to-r
              from-green-500
              to-green-400
              transition-all
            "
            :style="{ width: songPercentageProgress }"
          ></span>
        </span>
      </div>

      <!-- Duration -->
      <div
        class="
          w-7
          leading-3
          text-gray-400
          text-lg
          ml-8
          whitespace-nowrap
        "
      >
        {{ songDuration }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import {
  Prefix, State, Getter, Action,
} from '@/store/modules/player';

export default {
  name: 'Player',
  computed: {
    ...mapState(Prefix, [
      State.SongMetadata, // songMetadata
      State.SongDuration, // songDuration
      State.SongSeek, // songSeek,
      State.SongPercentageProgress, // songPercentageProgress
    ]),
    ...mapState(Prefix, {
      // songMetadata
      [State.SongMetadata]: (state) => state[State.SongMetadata],
      // songDuration
      [State.SongDuration]: (state) => state[State.SongDuration],
      // songSeek,
      [State.SongSeek]: (state) => state[State.SongSeek],
      // songPercentageProgress
      [State.SongPercentageProgress]: (state) => state[State.SongPercentageProgress],
    }),
    ...mapGetters(Prefix, [
      Getter.SongIsPlaying, // getSongIsPlaying
      Getter.IsSong, // getIsSong
    ]),
  },
  methods: {
    onPlayOrPauseSong() {
      this.$store.dispatch(`${Prefix}/${Action.PlayOrPauseSong}`);
    },
    onMoveSeek(event) {
      const progressRect = event.currentTarget.getBoundingClientRect();
      const clicked = event.clientX;
      const { left, right } = progressRect;
      const payload = { left, right, clicked };
      this.$store.dispatch(`${Prefix}/${Action.MoveSeek}`, payload);
    },
  },
};
</script>
