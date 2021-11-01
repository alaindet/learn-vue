<template>
  <li
    :id="`song-id-${song.docId}`"
    :class="'some-dynamic-class'"
    class="
      flex
      justify-between
      items-center
      p-3
      pl-6
      cursor-pointer
      transition
      duration-300
      hover:bg-gray-50
    "
  >
    <div>
      <!-- <router-link :to="{ name: 'song', params: { songid: song.docId } }"> -->
      <router-link :to="'/song/'+song.docId" class="font-bold block text-gray-600">
        {{ song.modifiedName }}
      </router-link>
      <span class="song-author text-gray-500 text-sm">
        {{ song.displayName }}
      </span>
    </div>

    <div class="text-gray-600 text-lg">
      <!--
      <router-link :to="{
        name: 'song',
        params: { songid: song.docId },
        hash: '#comments'
      }">
      -->
      <router-link :to="`/song/${song.docId}#comments`">
        <span class="comments">
          <i class="fa fa-comments text-gray-600"></i>
          {{ song.commentsCount }}
        </span>
      </router-link>
    </div>
  </li>
</template>

<script>
export default {
  name: 'SongItem',
  props: {
    song: {
      type: Object,
      required: true,
    },
  },
};
</script>
