import Vue from 'vue';

import VueResource from "vue-resource";
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);
// Vue.use(MintUI)


//引入组件
import Home from '../components/Home.vue';
import News from '../components/News.vue';
import Header from '../components/Header.vue';
import Content from '../components/Content.vue';
import Pcontent from '../components/PContent.vue';
import User from '../components/User.vue';
import UserAdd from '../components/User/UserAdd.vue';
import UserList from '../components/User/UserList.vue';
// 配置路由
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/home', component: Home },
  { path: '/news', component: News },
  { path: '/news', component: News,name:'news' },
  { path: '/content/:aid', component: Content },
  { path: '/pcontent', component: Pcontent },
  { path: '/header', component: Header },
  { path: '/user', component: User,
      children:[
        {path:'useradd',component:UserAdd},
        {path:'userlist',component:UserList}
      ]
  },
  { path: '*', redirect: '/home' }   /*默认跳转路由*/
]
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  // 将hash模式改成history模式
  mode: 'hash',
  routes // (缩写) 相当于 routes: routes
})

export default router;