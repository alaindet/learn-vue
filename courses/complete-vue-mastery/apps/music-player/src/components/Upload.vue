<template>
  <div class="bg-white rounded border border-gray-200 relative flex flex-col">
    <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
      <span class="card-title">Upload</span>
      <i class="fas fa-upload float-right text-green-400 text-2xl"></i>
    </div>
    <div class="p-6">

      <!-- Upload Dropbox -->
      <div
        class="
          w-full
          px-10
          py-20
          rounded
          text-center
          cursor-pointer
          border border-dashed border-gray-400
          text-gray-400
          transition
          duration-500
          hover:text-white
          hover:bg-green-400
          hover:border-green-400
          hover:border-solid
        "
        :class="{ 'bg-green-400 border-green-400 border-solid': isDragOver }"
        @dragenter.prevent.stop="onDragEnter"
        @dragover.prevent.stop="onDragOver"
        @dragend.prevent.stop="onDragEnd"
        @dragleave.prevent.stop="onDragLeave"
        @drop.prevent.stop="onDrop($event)"
      >
        <h5>Drop your files here</h5>
      </div>
      <!-- Fallback -->
      <input type="file" multiple @change="onDrop">
      <hr class="my-6" />

      <!-- Progess Bars -->
      <div v-for="upload in uploads" :key="upload.name" class="mb-4">
        <!-- File Name -->
        <div class="font-bold text-sm" :class="upload.cssText">
          <i :class="upload.cssIcon"></i> {{ upload.name }}
        </div>
        <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
          <!-- Inner Progress Bar -->
          <div
            class="transition-all progress-bar"
            :class="upload.cssVariant"
            :style="{ width: upload.currentProgress }"
          ></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { storage, auth, songsCollection } from '@/plugins/firebase';

export const Events = {
  Uploaded: 'uploaded',
};

export default {
  name: 'Upload',
  props: {
    addSong: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      isDragOver: false,
      allowedMimeType: 'audio/mpeg',
      uploads: [],
    };
  },
  beforeUnmount() {
    if (this.uploads.length) {
      this.uploads.forEach((upload) => upload.task.cancel());
    }
  },
  methods: {
    onDragEnter() {
      this.isDragOver = true;
    },
    // onDragStart() {
    //   // ...
    // },
    // onDrag() {
    //   // ...
    // },
    onDragOver() {
      this.isDragOver = true;
    },
    onDragEnd() {
      this.isDragOver = false;
    },
    onDragLeave() {
      this.isDragOver = false;
    },
    onDrop($event) {
      this.isDragOver = false;

      const files = $event?.dataTransfer
        ? [...$event.dataTransfer.files]
        : [...$event.target.files];

      // Check if all files have alloed MIME types
      files.forEach((file) => {
        if (file.type !== this.allowedMimeType) {
          // TODO: add error feedback
          console.log('mime type not allowed');
          return;
        }

        const storageRef = storage.ref();
        const songsRef = storageRef.child(`songs/${file.name}`);
        const task = songsRef.put(file);

        const upload = {
          task,
          currentProgress: 0,
          name: file.name,
          cssVariant: 'bg-blue-400',
          cssIcon: 'fas fa-spinner fa-spin',
          cssText: '',
        };

        const uploadsLength = this.uploads.push(upload);
        const uploadIndex = uploadsLength - 1;

        task.on(
          'state_changed',
          () => this.onUploadProgress(uploadIndex, task),
          (error) => this.onUploadError(uploadIndex, error),
          () => this.onUploadComplete(uploadIndex, task),
        );
      });
    },
    onUploadProgress(uploadIndex, task) {
      const { bytesTransferred, totalBytes } = task.snapshot;
      const fraction = (100 * (bytesTransferred / totalBytes)).toFixed(1);
      this.uploads[uploadIndex].currentProgress = `${fraction}%`;
    },
    onUploadError(uploadIndex, error) {
      this.uploads[uploadIndex].cssVariant = 'bg-red-400';
      this.uploads[uploadIndex].cssIcon = 'fas fa-exclamation-triangle';
      this.uploads[uploadIndex].cssText = 'text-red-400';
      console.error(error);
    },
    async onUploadComplete(uploadIndex, task) {
      const url = await task.snapshot.ref.getDownloadURL();
      const songRef = await songsCollection.add({
        userId: auth.currentUser.uid,
        userDisplayName: auth.currentUser.displayName,
        originalName: task.snapshot.ref.name,
        modifiedName: task.snapshot.ref.name,
        genre: '',
        commentsCount: 0,
        url,
      });
      const songSnapshot = await songRef.get();
      this.addSong(songSnapshot);

      this.uploads[uploadIndex].cssVariant = 'bg-green-400';
      this.uploads[uploadIndex].cssIcon = 'fas fa-check';
      this.uploads[uploadIndex].cssText = 'text-green-400';
      this.$emit(Events.Uploaded);
      setTimeout(() => { this.uploads.splice(uploadIndex, 1); }, 3000);
    },
  },
};
</script>
