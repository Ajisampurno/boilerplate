<template>
  <div class="container d-flex align-items-center justify-content-center vh-100">
    <div class="row shadow-lg p-4 rounded-3 bg-white" style="max-width: 800px; width: 100%;">
      <div class="col-md-6 d-flex align-items-center justify-content-center">
        <img src="@/assets/logo/logo_sidebar.jpeg" alt="Logo" class="logo img-fluid rounded" />
      </div>
      <div class="col-md-6">
        <h2 class="mb-4 text-center">Login</h2>
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" v-model="formData.email" id="email" required />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" v-model="formData.password" id="password" required />
          </div>
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    login() {
      axios
        .post('/api/login', this.formData)
        .then(response => {
          localStorage.setItem('token', response.data.token);
          this.$router.push({ name: 'dashboard' });
        })
        .catch(error => {
          console.error('Login failed:', error);
        });
    }
  }
};
</script>

<style scoped>
.logo {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

form {
  padding: 20px;
}

h2 {
  font-weight: 600;
}

.btn-primary {
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
