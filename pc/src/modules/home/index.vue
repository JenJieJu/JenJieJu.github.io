<style lang="scss" scoped>
.home {
    // text-align: center;
    width: 300px;
    margin: 0 auto;

    .title {
        color: #666;
    }

    .name {
        font-size: 22px;
    }

    .item {
        padding-bottom: 30px;
    }

}
</style>
<template>
    <div class="home">
        <h1>demo</h1>
        <h4 class="title">原生js(不依赖任何框架)</h4>
        <div class="item">
            <div class="title">多功能表格</div>
            <div class="name">
                <router-link :to="{name:'jStrongTable'}">jStrongTable</router-link>
            </div>
        </div>
        <div class="item">
            <div class="title">日期选择器</div>
            <div class="name">
                <router-link :to="{name:'jTimePicker'}">jTimePicker</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    created() {

    },
    activated() {}
}
</script>