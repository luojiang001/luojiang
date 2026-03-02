import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  // 使用 hash 模式避免 GitHub Pages 刷新 404
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
      path: '/skills',
      name: 'Skills',
      component: () => import('../views/Skills.vue')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('../views/Projects.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue')
    }
  ]
});

export default router;