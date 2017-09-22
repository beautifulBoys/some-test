import Vue from 'vue';
import Router from 'vue-router';
import desk from '@/views/desk';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'desk',
      component: desk
    }
  ]
});
