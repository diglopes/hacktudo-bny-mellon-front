import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Fechamento from '../views/Fechamento.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: "TIM - Onboarding digital inteligente" }
  },
  {
    path: '/fechamento',
    name: 'Fechamento',
    component: Fechamento,
    meta: { title: "TIM - Muito obrigado!" }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const DEFAULT_TITLE = "TIM"
router.afterEach((to) => {
  Vue.nextTick(() => {
      document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router
