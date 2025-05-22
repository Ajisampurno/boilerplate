<template>
  <div class="container d-flex align-items-center justify-content-center vh-100">
    <div class="row shadow-lg p-4 rounded-3 bg-white" style="max-width: 800px; width: 100%;">
      <div class="col-md-6 d-flex align-items-center justify-content-center">
        <img src="@/assets/logo/logo_sidebar.jpeg" alt="Logo" class="logo img-fluid rounded" />
      </div>
      <div class="col-md-6">
        <h2 class="mb-4 text-center">Create Account</h2>
        <form @submit.prevent="registerUser">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" id="name" class="form-control" v-model="name" required placeholder="Enter your name" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" class="form-control" v-model="email" required placeholder="Enter your email" />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" id="password" class="form-control" v-model="password" required placeholder="Enter your password" />
          </div>
          <div class="mb-3">
            <label for="password_confirmation" class="form-label">Confirm Password</label>
            <input type="password" id="password_confirmation" class="form-control" v-model="password_confirmation" required placeholder="Confirm your password" />
          </div>
          <button type="submit" class="btn btn-primary w-100">Register</button>
        </form>
        <p v-if="errorMessage" class="error-message mt-3">{{ errorMessage }}</p>
        <p class="mt-3 text-center">
          Already have an account? <router-link to="/login">Login here</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errorMessage: ''
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/register', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        });
        if (response.data.message === 'User registered successfully') {
          this.$router.push('/login');
        }
      } catch (error) {
        this.errorMessage = 'Something went wrong during registration';
      }
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
h2 {
  font-weight: 600;
}
.error-message {
  color: red;
}
.btn-primary {
  transition: background-color 0.3s ease;
}
.btn-primary:hover {
  background-color: #0056b3;
}
</style>
