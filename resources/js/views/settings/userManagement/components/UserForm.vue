<template>
  <Modal title="Create User" @closeModal="openModal = false">
    <form @submit.prevent="submit">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input v-model="formData.name" type="text" id="name" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input v-model="formData.email" type="email" id="email" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input v-model="formData.password" type="password" id="password" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="password_confirmation" class="form-label">Confirm Password</label>
        <input v-model="formData.password_confirmation" type="password" id="password_confirmation" class="form-control" required />
      </div>
      <div class="modal-footer">
        <button type="button" @click="$emit('closeModal')" class="btn btn-secondary me-1">Cancel</button>
        <button type="submit" class="btn btn-primary">Save</button>
      </div>
    </form>
  </Modal>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
    };
  },
  methods: {
    submit() {
      this.$http.post('/api/register', this.formData)
        .then(() => {
          this.$emit('reload');
          this.$emit('closeModal');
          this.$toastr.success('User berhasil ditambahkan!', 'Success');
          this.formData = {};
        })
        .catch(error => {
          console.error('Error:', error.response ? error.response.data : error.message);
          this.$toastr.danger('User gagal ditambahkan!', 'Gagal');
        });
    }
  },
};
</script>
