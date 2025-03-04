import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '@/components/Home.vue';
import GraphicExplore from '@/components/GraphicExplore.vue';
import UxuiExplore from './components/UxuiExplore.vue';
import Hobby from './components/HobbyExplore.vue';

const routes = [
    { path: '/', name: 'Home', component: HelloWorld },
    { path: '/graphic-works', name: 'GraphicExplore', component: GraphicExplore },
    { path: '/uxui-works', name: 'UxuiExplore', component: UxuiExplore },
    { path: '/hobby-works', name: 'Hobby', component: Hobby }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
