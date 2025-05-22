import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import Register from '@/views/Register.vue';
import About from '@/views/About.vue';
import IndexUserManagement from '@/views/settings/userManagement/Index.vue';
import ShowUserManagement from '@/views/settings/userManagement/Show.vue';

function isAuthenticated() {
    return !!localStorage.getItem('token');
}

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/dashboard', name: 'dashboard', component: Dashboard, meta: { requiresAuth: true } },
    { path: '/about', name: 'about', component: About, meta: { requiresAuth: true } },
    { path: '/setting/user/index', name: 'user-management', component: IndexUserManagement, meta: { requiresAuth: true } },
    { path: '/setting/user/show/:id', name: 'show-user-management', component: ShowUserManagement, props: true, meta: { requiresAuth: true } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const isAuth = isAuthenticated();
    if (to.meta.requiresAuth && !isAuth) {
        next({ name: 'login' });
    } 
    else if ((to.name === 'login' || to.name === 'register') && isAuth) {
        next({ name: 'dashboard' });
    } 
    else {
        next();
    }
});

export default router;