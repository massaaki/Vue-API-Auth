import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Master from './components/layouts/Master.vue'
import {
  auth
} from './store/auth'

Vue.use(VueRouter)

Vue.config.productionTip = false;


const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.getters.loggedIn) {
      next({
        name: 'login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (auth.getters.loggedIn) {
      next({
        name: 'home',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})


new Vue({
  render: h => h(Master),
  store: auth,
  router: router,
}).$mount('#app')