<template>
<div id="app">
    <!-- 
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
     -->
    <p class="nav">
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
    </p>
    <p class="nav">
        <router-link to="/user/1">/user/foo</router-link>
        <router-link to="/user/2">/user/bar</router-link>
    </p>
    <div class="square">
        <router-view></router-view>
    </div>

    <Button />
    <Cell />
</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import Button from "./vants/Button.vue";
import Cell from "./vants/Cell.vue";
export default {
    name: 'App',
    components: {
        // HelloWorld,
        Button,
        Cell
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.nav a {
    margin: 0 10px;
}

.router-link-active {
    color: brown;
}

.square {
    margin: 20px;
    line-height: 60px;
    border: 1px solid green;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
    transition: all .3s ease;
}

.slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}
</style>
