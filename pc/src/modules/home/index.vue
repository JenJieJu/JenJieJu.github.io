<style lang="scss" scoped>
.home {
    text-align: center;
    font-size: 22px;
    line-height: 60px;
}
</style>
<template>
    <div class="home">
        <h1>demo</h1>
        <div>
            <router-link :to="{name:'jStrongTable'}">jStrongTable</router-link>
        </div>
        <div>
            <router-link :to="{name:'jTimePicker'}">jTimePicker</router-link>
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