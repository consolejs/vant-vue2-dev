import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import { Button } from 'vant';

        
const Foo = { template: '<div>foo1111</div>' }
const Bar = { template: '<div>bar2222</div>' }

const User = {
  template: `<div>User: {{ $route.params.id }}</div>`,
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
  { path: '/user/:id', component: User },
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
