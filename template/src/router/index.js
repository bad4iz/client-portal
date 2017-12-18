import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/index';
import Test from '@/pages/test';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      text: 'Главная',
    },
    {
      path: '/test',
      name: 'Test',
      component: Test,
    },
  ],
});
