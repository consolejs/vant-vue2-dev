import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import { Button } from 'vant';

        
const Foo = { template: '<div>foo1111</div>' }
const Bar = { template: '<div>bar2222</div>' }

        
const UserProfile = { template: '<div>User Profile</div>' }
const UserPosts = { template: '<div>User Posts</div>' }




const User = {
  template: `<div class="user">
              <h2>User {{ $route.params.id }}</h2>
              <router-view></router-view>
            </div>`,
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
      console.log('to:', to)
      console.log('from:' , from)
    },
    // beforeRouteUpdate (to, from, next) {
    //   // react to route changes...
    //   // don't forget to call next()
    //   console.log('to:', to)
    //   console.log('from:' , from)
    //   console.log('next:' , next)
    // }
  }
}


const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/user/:id', component: User,
  children: [
    {
      // 当 /user/:id/profile 匹配成功，
      // UserProfile 会被渲染在 User 的 <router-view> 中
      path: 'profile',
      component: UserProfile
    },
    {
      // 当 /user/:id/posts 匹配成功
      // UserPosts 会被渲染在 User 的 <router-view> 中
      path: 'posts',
      component: UserPosts
    }
  ]

  },
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})


Vue.use(Button);
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
