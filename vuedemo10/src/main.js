import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import VueResouce from 'vue-resource';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResouce);


import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'
import seller from './components/seller/seller.vue'
import './common/stylus/base.styl'
const routes = [
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings},
  { path: '/seller', component: seller},
  { path: '/', component: ratings },
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  linkActiveClass:"active",
  routes:routes // (缩写) 相当于 routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
