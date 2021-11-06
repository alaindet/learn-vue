<template>
  <div id="app" class="row d-flex justify-content-center">
    <div class="col-md-6 mt-3">
      <div class="card">
        <div class="card-header">Newsletter</div>
        <div class="card-body">
          <form @submit.prevent="submit">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                :value="newsletterName"
                @input="newsletterName = $event.target.value"
              />
            </div>
            <div class="form-group">
              <!-- Default v-model -->
              <!-- <EmailInput v-model="newsletterEmail" /> -->
              <!-- Equivalent to v-model -->
              <!-- <EmailInput
                :modelValue="newsletterEmail"
                @update:modelValue="newsletterEmail = $event"
              /> -->

              <!-- Alternative -->
              <!-- <EmailInput v-model:email="newsletterEmail" /> -->
              <!-- Eqivalent -->
              <EmailInput
                :email="newsletterEmail"
                @update:email="newsletterEmail = $event"
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmailInput from '@/components/EmailInput.vue';

export default {
  name: 'App',
  components: {
    EmailInput,
  },
  data() {
    return {
      newsletterName: '',
      newsletterEmail: '',
    };
  },
  methods: {
    submit() {
      console.log('Newletter Submitted', {
        name: this.newsletterName,
        email: this.newsletterEmail,
      });
    },
  },
};
</script>

<style src="bootstrap/dist/css/bootstrap.css"></style>
