<template>
<div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <h3>朴素按钮</h3>
    <van-button plain type="primary">朴素按钮</van-button>
    <van-button plain type="info">朴素按钮</van-button>
    <h3>细边框</h3>
    <van-button plain hairline type="primary">细边框按钮</van-button>
    <van-button plain hairline type="info">细边框按钮</van-button>
    <h3>禁用</h3>
    <van-button disabled type="primary">禁用状态</van-button>
    <van-button disabled type="info">禁用状态</van-button>
    <h3>加载状态</h3>
    <van-button loading type="primary" />
    <van-button loading type="primary" loading-type="spinner" />
    <van-button loading type="info" loading-text="加载中..." />
    <h3>图标按钮</h3>
    <van-button icon="plus" type="primary" />
    <van-button icon="plus" type="primary">按钮</van-button>
    <van-button icon="https://img.yzcdn.cn/vant/user-active.png" type="info">按钮</van-button>
    <h3>页面导航</h3>
    <van-button type="primary" url="/vant/mobile.html">URL 跳转</van-button>
    <van-button type="primary" to="index">路由跳转</van-button>
</div>
</template>

<script>
import {
    Button
} from 'vant';

export default {
    name: 'Button',
    components: {
        [Button.name]: Button
    }
}
</script>

<style scoped>
button {
    margin: 0 5px;
}
</style>
