import About from '@/views/About.vue';
import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';
import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from 'vue-router';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;