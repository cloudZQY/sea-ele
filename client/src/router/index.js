import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const Login = () => import('../page/Login/Login')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login') {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login')
    }
  }
  next();
})

export default router;