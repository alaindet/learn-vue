<template>
  <section class="container mx-auto mt-6">
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <div class="col-span-1">
        <app-upload
          :addSong="addSong"
          @uploaded="onUploadedSong()"
        />
      </div>
      <div class="col-span-2">
        <div class="bg-white rounded border border-gray-200 relative flex flex-col">
          <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
            <span class="card-title">My Songs</span>
            <i
              class="fa fa-compact-disc float-right text-green-400 text-2xl"
            ></i>
          </div>
          <div class="p-6">
            <app-composition-item
              v-for="(song, index) in songs"
              :key="song.docId"
              :song="song"
              :updatePendingChanges="updatePendingChangesFlag"
              @updated="onUpdatedSong(index, $event)"
              @deleted="onDeletedSong(index)"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { songsCollection, auth } from '@/plugins/firebase';
import AppUpload from '@/components/Upload.vue';
import AppCompositionItem from '@/components/CompositionItem.vue';

export default {
  name: 'Manage',
  components: {
    AppUpload,
    AppCompositionItem,
  },
  data() {
    return {
      songs: [],
      arePendingChanges: false,
    };
  },
  async created() {
    this.fetchSongs();
  },
  beforeRouteLeave(to, from, next) {
    if (!this.arePendingChanges) {
      next();
      return;
    }

    // eslint-disable-next-line no-alert, no-restricted-globals
    const confirmed = confirm('You have unsaved changes, are you sure?');
    next(confirmed);
  },
  methods: {
    addSong(songSnapshot) {
      const song = { ...songSnapshot.data(), docId: songSnapshot.id };
      this.songs.push(song);
    },
    onUploadedSong() {
      this.fetchSongs();
    },
    onUpdatedSong(index, values) {
      this.songs[index].modifiedName = values.modifiedName;
    },
    onDeletedSong(index) {
      this.songs.splice(index, 1);
      // this.songs = this.songs.filter((song, anIndex) => anIndex !== index);
    },
    async fetchSongs() {
      const query = songsCollection.where('userId', '==', auth.currentUser.uid);
      const snapshot = await query.get();
      this.songs = [];
      snapshot.forEach((doc) => {
        const song = { ...doc.data(), docId: doc.id };
        this.songs.push(song);
        // this.songs = [ ...this.songs, song ];
      });
    },
    updatePendingChangesFlag(value) {
      this.arePendingChanges = value;
    },
  },
};
</script>
