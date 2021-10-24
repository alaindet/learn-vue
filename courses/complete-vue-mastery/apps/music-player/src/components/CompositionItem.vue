<template>
  <div class="border border-gray-200 p-3 mb-4 rounded">

    <!-- Edit data -->
    <div v-if="isEditing">

      <!-- Alert -->
      <div
        v-if="alert.show"
        class="text-white text-center font-bold p-5 mb-4"
        :class="alert.style"
      >
        {{ alert.message }}
      </div>

      <vee-validate-form
        :validation-schema="form.schema"
        :initial-values="form.initial"
        @submit="onSave"
      >
        <!-- Song title -->
        <div class="mb-3">
          <label class="inline-block mb-2">Song Title</label>
          <vee-validate-field
            as="input"
            type="text"
            name="title"
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
            "
            placeholder="Enter Song Title"
            @input="updatePendingChanges(true)"
          />
          <vee-validate-error-message class="text-red-600" name="title" />
        </div>

        <!-- Genre -->
        <div class="mb-3">
          <label class="inline-block mb-2">Genre</label>
          <vee-validate-field
            as="input"
            type="text"
            name="genre"
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
            "
            placeholder="Enter Genre"
            @input="updatePendingChanges(true)"
          />
          <vee-validate-error-message class="text-red-600" name="genre" />
        </div>

        <!-- Submit -->
        <div class="mt-3">
          <button
            type="submit"
            class="py-1.5 px-3 rounded text-white bg-green-600"
            :class="{ 'opacity-50': form.isSubmitting || !form.valid }"
            :disabled="form.isSubmitting || !form.valid"
          >
            Save
          </button>
          <button
            type="button"
            class="ml-2 py-1.5 px-3 rounded text-white bg-gray-600"
            :class="{ 'opacity-50': form.isSubmitting || !form.valid }"
            :disabled="form.isSubmitting || !form.valid"
            @click.prevent="onToggleEditing(false)"
          >
            Close
          </button>
        </div>
      </vee-validate-form>
    </div>

    <!-- Display data -->
    <div v-else>
      <h4 class="inline-block text-2xl font-bold">{{ song.modifiedName }}</h4>

      <!-- Remove -->
      <button
        class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
        @click.prevent="onDeleteSong"
      >
        <i class="fa fa-times"></i>
      </button>

      <!-- Edit -->
      <button
        class="
          ml-1
          py-1
          px-2
          text-sm
          rounded
          text-white
          bg-blue-600
          float-right
        "
        @click.prevent="onToggleEditing(true)"
      >
        <i class="fa fa-pencil-alt"></i>
      </button>
    </div>

  </div>
</template>

<script>
import { songsCollection, storage } from '@/plugins/firebase';
import utils from '@/utils';

export const Events = {
  Updated: 'updated',
  Deleted: 'deleted',
};

// TODO
// - Move Firebase operations up, then in Vuex
export default {
  name: 'CompositionItem',
  props: {
    song: {
      type: Object,
      required: true,
    },
    updatePendingChanges: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      isEditing: false,
      form: {
        schema: {
          title: 'required|min:2|max:100',
          genre: 'alpha_spaces|min:2|max:100',
        },
        initial: {
          title: this.$props.song.modifiedName,
          genre: this.$props.song.genre,
        },
        isSubmitting: false,
        valid: true, // TODO
      },
      alert: {
        show: false,
        style: 'bg-blue-500',
        message: 'Please wait! Updating song info.',
      },
    };
  },
  methods: {
    onToggleEditing(show = null) {
      this.isEditing = (show !== null) ? show : !this.isEditing;
    },
    async onSave(formValues) {
      this.form.isSubmitting = true;
      this.alert.show = true;
      this.alert.style = 'bg-blue-500';
      this.alert.message = 'Please wait! Updating song info.';

      try {
        const { title, genre } = formValues;
        const patchValue = utils.omitEmpty({ modifiedName: title, genre });
        await songsCollection.doc(this.song.docId).update(patchValue);
        this.form.initial.title = patchValue.modifiedName ?? this.$props.song.modifiedName;
        this.form.initial.genre = patchValue.genre ?? this.$props.song.genre;
        this.$props.updatePendingChanges(false);
        this.$emit(Events.Updated, patchValue);
        this.alert.style = 'bg-green-500';
        this.alert.message = 'Success';
        setTimeout(() => { this.alert.show = false; }, 3000);
        this.form.isSubmitting = false;
      } catch (error) {
        this.form.isSubmitting = false;
        this.alert.style = 'bg-red-500';
        this.alert.message = 'An error occurred';
        setTimeout(() => { this.alert.show = false; }, 3000);
      }
    },
    async onDeleteSong() {
      // TODO: Confirm delete?
      const storageRef = storage.ref();
      const songRef = storageRef.child(`songs/${this.song.originalName}`);
      await songRef.delete();
      await songsCollection.doc(this.song.docId).delete();
      this.$emit(Events.Deleted);
      // TODO: Feedback?
    },
  },
};
</script>
