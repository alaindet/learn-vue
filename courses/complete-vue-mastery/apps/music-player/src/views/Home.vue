<template>
  <main>

    <!-- Introduction -->
    <section class="mb-8 py-20 text-white text-center relative">
      <div
        class="absolute inset-0 w-full h-full bg-contain introduction-bg"
        style="background-image: url(assets/img/header.png)"
      ></div>
      <div class="container mx-auto">
        <div class="text-white main-header-content">
          <h1 class="font-bold text-5xl mb-5">Listen to Great Music!</h1>
          <p class="w-full md:w-8/12 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            et dolor mollis, congue augue non, venenatis elit. Nunc justo eros,
            suscipit ac aliquet imperdiet, venenatis et sapien. Duis sed magna
            pulvinar, fringilla lorem eget, ullamcorper urna.
          </p>
        </div>
      </div>

      <img
        class="relative block mx-auto mt-5 -mb-20 w-auto max-w-full"
        src="assets/img/introduction-music.png"
      />
    </section>

    <!-- Main Content -->
    <section class="container mx-auto">
      <div class="bg-white rounded border border-gray-200 relative flex flex-col">
        <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
          <span class="card-title">Songs</span>
          <i class="fa fa-headphones-alt float-right text-green-400 text-xl"></i>
        </div>

        <!-- Playlist -->
        <ol id="playlist">
          <app-song-item
            v-for="song in songs"
            :key="song.docId"
            :song="song"
          />
        </ol>

      </div>
    </section>
  </main>
</template>

<script>
import { songsCollection } from '@/plugins/firebase';
import AppSongItem from '@/components/SongItem.vue';

export default {
  name: 'Home',
  components: {
    AppSongItem,
  },
  data() {
    return {
      songs: [],
      songsPerPage: 10,
      pendingRequest: false,
      lastFetchedSongId: null,
    };
  },
  async created() {
    this.fetchSongs();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    async fetchSongs() {
      if (this.pendingRequest) {
        return;
      }

      this.pendingRequest = true;

      let query = songsCollection
        .orderBy('modifiedName')
        .limit(this.songsPerPage);

      const lastSongId = this.songs.length
        ? this.songs[this.songs.length - 1].docId
        : null;

      if (this.songs.length) {
        // Reached the end
        if (lastSongId === this.lastFetchedSongId) {
          this.pendingRequest = false;
          return;
        }
        const lastSong = await songsCollection.doc(lastSongId).get();
        query = query.startAfter(lastSong);
      }

      const snapshots = await query.get();

      snapshots.forEach((doc) => {
        this.songs.push({ ...doc.data(), docId: doc.id });
        this.lastFetchedSongId = doc.id;
      });

      this.pendingRequest = false;
    },
    handleScroll() {
      const { scrollTop, offsetHeight } = document.documentElement;
      const { innerHeight } = window;
      const hasReachedBottom = Math.round(scrollTop) + innerHeight === offsetHeight;

      if (hasReachedBottom) {
        this.fetchSongs();
      }
    },
  },
};
</script>
