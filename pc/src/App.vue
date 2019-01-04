<style lang="scss" scoped>
</style>
<template>
    <router-view v-wechat-title="$route.meta.title||''" img-set="../favicon.ico"></router-view>
</template>
<script>
export default {
    name: 'App',
    data() {
        return {}
    },
    created() {

    },
    activated() {}
}
</script>