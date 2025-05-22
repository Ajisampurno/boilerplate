<template>
    <div class="app-layout">
        <div v-if="show" class="mobile-navbar-container">
            <MobileNavbar />
        </div>
        <div v-if="show" class="navbar-container">
            <Navbar />
        </div>
        <div class="content-area">
            <div v-if="show" class="sidebar-container">
                <Sidebar />
            </div>
            <div class="main-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import MobileNavbar from './components/layouts/MobileNavbar.vue';
import Navbar from './components/layouts/Navbar.vue';
import Sidebar from './components/layouts/Sidebar.vue';
export default {
    components: {
        Navbar,
        Sidebar,
        MobileNavbar,
    },
    computed: {
        show() {
            const routeName = this.$route.name;
            return routeName !== 'login' && routeName !== 'register';
        }
    },
}
</script>

<style scoped>
@media (max-width: 768px) {

    .navbar-container,
    .sidebar-container {
        display: none;
    }
}

@media (min-width: 769px) {
    .mobile-navbar-container {
        display: none;
    }
}

.app-layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
    font-size: 0.80rem;
}

.navbar-container {
    flex: 0 0 auto;
}

.content-area {
    display: flex;
    overflow-x: hidden;
    overflow-y: hidden;
}

.sidebar-container {
    flex: 0 0 250px;
    background-color: #f4f4f4;
    height: 100vh;
}

.main-content {
    flex: 1;
    padding: 16px;
    overflow-y: auto;
}
</style>
