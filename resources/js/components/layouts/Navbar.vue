<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link to="/profile" class="dropdown-item">Profile</router-link></li>
            <li><a class="dropdown-item" href="#" @click="logout">Logout</a></li>
          </ul>
        </li>
      </ul>
  </nav>
</template>

<script setup>
const logout = () => {
    localStorage.removeItem('token');
    router.push({ name: 'login' });
};
</script>


<style scoped>
.navbar {
  padding: 1rem;
}

.navbar-toggler {
  border-color: #007bff;
}

.navbar-nav .nav-link {
  color: #333;
}

.navbar-nav .dropdown-item {
  color: #333;
}

.navbar-nav .dropdown-item:hover {
  background-color: #007bff;
  color: white;
}
</style>
