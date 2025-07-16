import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ComparePage from '../views/ComparePage.vue';
import TeamPage from '../views/TeamPage.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/compare',
            name: 'compare',
            component: ComparePage,
        },
        {
            path: '/team',
            name: 'team',
            component: TeamPage,
        },
    ],
});

export default router;
