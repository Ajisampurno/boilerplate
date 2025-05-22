<template>
  <div class="sidebar bg-dark text-white">
    <!-- Logo -->
    <div class="sidebar-logo">
      <img src="@/assets/logo/logo_sidebar.jpeg" alt="Logo" class="logo" />
    </div>

    <!-- Menu Items -->
    <ul class="list-unstyled">
      <li>
        <router-link to="/dashboard" class="sidebar-link" active-class="active-link">
          <i class="fas fa-tachometer-alt"></i> Dashboard
        </router-link>
      </li>
      <li>
        <router-link to="/about" class="sidebar-link" active-class="active-link">
          <i class="fas fa-info-circle"></i> About
        </router-link>
      </li>
      <li>
        <div @click="toggleSettings" class="sidebar-link">
          <i class="fas fa-cog"></i> Settings
          <i :class="['fas', 'fa-chevron-right', { 'rotate-icon': showSettings }]" class="ml-auto"></i>
        </div>
        <ul v-if="showSettings" class="submenu list-unstyled">
          <li>
            <router-link to="/setting/user/index" class="sidebar-link" active-class="active-link">
              <i class="fas fa-users"></i> User Management
            </router-link>
          </li>
          <li>
            <router-link to="/master-item" class="sidebar-link" active-class="active-link">
              <i class="fas fa-box"></i> Master Item
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSettings: false,
    };
  },
  methods: {
    toggleSettings() {
      this.showSettings = !this.showSettings;
    },
  },
};
</script>

<style scoped>
.sidebar {
  height: 100%;
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 20px;
}

.sidebar-logo {
  text-align: center;
  margin-bottom: 20px;
  padding: 0 15px;
}

.logo {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.sidebar-link {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
}

.sidebar-link i {
  margin-right: 10px;
}

.sidebar-link:hover {
  color: #00a82a;
}

.active-link {
  color: rgb(0, 175, 38);
}

.sidebar-link:hover.active-link {
  color: #00a82a;
}

.submenu {
  padding-left: 20px;
}

.submenu .sidebar-link {
  font-size: 0.9rem;
  padding-left: 25px;
}

.fa-chevron-right {
  margin-left: auto;
  transition: transform 0.3s ease;
}

.rotate-icon {
  transform: rotate(90deg);
}
</style>
