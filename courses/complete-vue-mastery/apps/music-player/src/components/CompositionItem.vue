<template>
  <div class="border border-gray-200 p-3 mb-4 rounded">

    <!-- Edit data -->
    <div v-if="isEditing">
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
          />
          <vee-validate-error-message class="text-red-600" name="genre" />
        </div>

        <!-- Submit -->
        <div class="mt-3">
          <button
            type="submit"
            class="py-1.5 px-3 rounded text-white bg-green-600"
          >
            Save
          </button>
          <button
            type="button"
            class="ml-2 py-1.5 px-3 rounded text-white bg-gray-600"
            @click.prevent="onToggleEditing(false)"
          >
            Cancel
          </button>
        </div>
      </vee-validate-form>
    </div>

    <!-- Display data -->
    <div v-else>
      <h4 class="inline-block text-2xl font-bold">{{ song.modifiedName }}</h4>

      <!-- Remove -->
      <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right">
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
import { mapFields } from 'vee-validate';

export default {
  name: 'CompositionItem',
  props: {
    song: {
      type: Object,
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
          genre: '',
        },
      },
    };
  },
  methods: {
    onToggleEditing(show = null) {
      this.isEditing = (show !== null) ? show : !this.isEditing;
    },
    onSave(formValues) {
      // TODO
      console.log('formValues', formValues);
    },
  },
};
</script>
