<template>
  <section class="container mx-auto mt-6">
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <div class="col-span-1">
        <app-upload />
      </div>
      <div class="col-span-2">
        <div
          class="bg-white rounded border border-gray-200 relative flex flex-col"
        >
          <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
            <span class="card-title">My Songs</span>
            <i
              class="fa fa-compact-disc float-right text-green-400 text-2xl"
            ></i>
          </div>
          <div class="p-6">
            <!-- TODO: Composition items -->
            <app-composition-item
              v-for="song in songs"
              :key="song.docId"
              :song="song"
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
    };
  },
  async created() {
    const query = songsCollection.where('userId', '==', auth.currentUser.uid);
    const snapshot = await query.get();
    snapshot.forEach((doc) => {
      const song = { ...doc.data(), docId: doc.id };
      this.songs.push(song);
    });
  },
};
</script>
