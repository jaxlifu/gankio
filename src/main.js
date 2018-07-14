import Vue from 'vue'
import store from './vuex/store'
import VueRouter from 'vue-router'
import routes from './router/routers'
import vueResource from 'vue-resource'
import infiniteScroll from 'vue-infinite-scroll'
import VueLazyload from 'vue-lazyload'
import {
  loadFromLocal
} from './common/js/store'
import './common/css/index.styl'

Vue.use(infiniteScroll)
Vue.use(VueRouter)
Vue.use(vueResource)

Vue.use(VueLazyload, {
  error: require('./assets/404.png'),
  loading: require('./assets/loading.gif'),
  attempt: 1
})

const router = new VueRouter({
  'linkActiveClass': 'active',
  'routes': routes
})

const routerApp = new Vue({
  store,
  router
}).$mount('#app')

if (!loadFromLocal('gank', 'welcome', false)) {
  router.push('/welcome')
}

export default routerApp
