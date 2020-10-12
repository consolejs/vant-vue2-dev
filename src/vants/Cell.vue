<template>
<div>
    <van-cell-group>
        <van-cell title="单元格" value="内容" />
        <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    <van-cell title="单元格" value="内容" size="large" />
    <van-cell title="单元格" value="内容" size="large" label="描述信息" />
</div>
</template>

<script>
import {
    Cell,
    CellGroup
} from 'vant';

export default {
    name: 'Cells',
    components: {
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup
    }
}
</script>

<style scoped>
button {
    margin: 0 5px;
}
</style>
