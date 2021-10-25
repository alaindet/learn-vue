<template>
  <div v-if="song">

    <!-- Music Header -->
    <section class="w-full mb-8 py-14 text-center text-white relative">
      <div
        class="absolute inset-0 w-full h-full box-border bg-contain music-bg"
        style="background-image: url(/assets/img/song-header.png)"
      ></div>
      <div class="container mx-auto flex items-center">
        <!-- Play/Pause Button -->
        <button
          type="button"
          class="
            z-50
            h-24
            w-24
            text-3xl
            bg-white
            text-black
            rounded-full
            focus:outline-none
          "
        >
          <i class="fas fa-play"></i>
        </button>
        <div class="z-50 text-left ml-8">
          <!-- Song Info -->
          <div class="text-3xl font-bold">{{ song.modifiedName }}</div>
          <div>{{ song.genre }}</div>
        </div>
      </div>
    </section>

    <!-- Form -->
    <section v-if="isUserLoggedIn" class="container mx-auto mt-6">
      <!-- Alert -->
      <div
        v-if="alert.show"
        class="text-white text-center font-bold p-5 mb-4"
        :class="alert.style"
      >
        {{ alert.message }}
      </div>

      <div class="bg-white rounded border border-gray-200 relative flex flex-col">

        <!-- Comment Count -->
        <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
          <span class="card-title">Comments (15)</span>
          <i class="fa fa-comments float-right text-green-400 text-2xl"></i>
        </div>

        <div class="p-6">
          <vee-validate-form
            :validation-schema="commentForm.schema"
            @submit="onAddComment"
          >
            <vee-validate-field
              as="textarea"
              name="content"
              rows="5"
              class="
                block
                w-full
                py-1.5
                px-3
                text-gray-800
                border border-gray-300
                transition
                duration-500
                focus:outline-none focus:border-black
                rounded
                mb-4
              "
              placeholder="Your comment here..."
            />
            <vee-validate-error-message class="text-red-600" name="content" />
            <div class="flex items-center justify-end">
              <button
                type="submit"
                class="py-1.5 px-3 rounded text-white bg-green-600 block"
                :disabled="commentForm.isSubmitting"
              >
                Submit
              </button>
            </div>
          </vee-validate-form>

          <!-- Sort Comments -->
          <div class="flex items-center mt-4">
            <label for="sortComments" class="mr-2">Sort comments: </label>
            <select
              id="sortComments"
              v-model="commentsSort"
              class="
                block
                py-1.5
                px-3
                text-gray-800
                border border-gray-300
                transition
                duration-500
                focus:outline-none focus:border-black
                rounded
              "
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>

        </div>
      </div>
    </section>

    <!-- Comments -->
    <ul class="container mt-8 mx-auto">
      <li
        v-for="comment in sortedComments"
        :key="comment.docId"
        class="p-6 bg-gray-50 border border-gray-200"
      >
        <div class="mb-5">
          <div class="font-bold">{{ comment.userName }}</div>
          <time>{{ comment.createdOn }}</time>
        </div>
        <p>{{ comment.content }}</p>
      </li>
    </ul>
  </div>
  <div v-else>TODO: Loading...</div>
</template>

<script>
import { mapState } from 'vuex';

import { State } from '@/store/enums';
import utils from '@/utils';
import { songsCollection, commentsCollection, auth } from '@/plugins/firebase';

export default {
  name: 'Song',
  data() {
    return {
      song: null,
      comments: [],
      commentsSort: 'latest',
      commentForm: {
        isSubmitting: false,
        schema: {
          content: 'required|min:2|max:250',
        },
      },
      alert: {
        show: false,
        style: 'bg-blue-500',
        message: 'Please wait! Your comment is being added.',
      },
    };
  },
  computed: {
    ...mapState([State.IsUserLoggedIn]),
    sortedComments() {
      switch (this.commentsSort) {
        case 'oldest':
          return [...this.comments].sort(utils.compareAscending('createdOn'));
        case 'latest':
        default:
          return [...this.comments].sort(utils.compareDescending('createdOn'));
      }
    },
  },
  async created() {
    this.fetchSong();
    this.fetchComments();
    this.initSorting();
  },
  methods: {
    async fetchSong() {
      const id = this.$route.params.songid;
      const songSnapshot = await songsCollection.doc(id).get();

      if (!songSnapshot.exists) {
        // TODO: Provide feedback
        this.$router.push('/');
      }

      this.song = songSnapshot.data();
    },
    async onAddComment(formValues, context) {
      this.commentForm.isSubmitting = true;
      this.alert.show = true;
      this.alert.style = 'bg-blue-500';
      this.alert.message = 'Please wait! Creating comment.';

      try {
        const { content } = formValues;
        const comment = {
          content,
          createdOn: (new Date()).toISOString(),
          songId: this.$route.params.songid,
          userId: auth.currentUser.uid,
          userName: auth.currentUser.displayName,
        };
        await commentsCollection.add(comment);
        this.fetchComments();
        this.alert.style = 'bg-green-500';
        this.alert.message = 'The new comment was added';
        setTimeout(() => { this.alert.show = false; }, 3000);
        this.commentForm.isSubmitting = false;
        context.resetForm();
      } catch (error) {
        this.commentForm.isSubmitting = false;
        this.alert.style = 'bg-red-500';
        this.alert.message = 'Could not add comment';
        setTimeout(() => { this.alert.show = false; }, 3000);
      }
    },
    async fetchComments() {
      const songId = this.$route.params.songid;

      const comments = await commentsCollection
        .where('songId', '==', songId)
        .get();

      this.comments = [];

      comments.forEach((comment) => {
        this.comments.push({ ...comment.data(), docId: comment.id });
      });
    },
    initSorting() {
      const { sort } = this.$route.query;
      this.commentsSort = sort ?? 'latest';
    },
  },
  watch: {
    // Store sorting on the route's query parameter
    commentsSort(newValue) {
      if (newValue !== this.$route.query.sort) {
        const query = { sort: newValue };
        this.$router.push({ query });
      }
    },
  },
};
</script>
