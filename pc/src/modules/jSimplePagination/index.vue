<style lang="scss" scoped>
.home {
    width: 600px;
    margin: 100px auto;

    #log {
        margin-top: 50px;
        text-align: center;
    }
}
</style>
<template>
    <div class="home">
        <div id="time"></div>
        <div id="log"></div>
    </div>
</template>
<script>
import jSimplePagination from 'j-simple-pagination'

export default {
    data() {
        return {}
    },
    created() {

        this.$nextTick(() => {
            var log = document.getElementById('log');

            var pageIndex = 7;
            var pageSize = 10;
            var dataTotal = 601;
            var showCount = 5;

            var Pagination = new window.jSimplePagination('#time', {
                pageSize: pageSize,
                dataTotal: dataTotal,
                pageIndex: pageIndex,
                showCount: showCount,
                onChange: function(data) {
                    console.log(data);
                    log.innerHTML = '<div>' + JSON.stringify(data) + '</div>';
                }
            });


            log.innerHTML = '<div>' + JSON.stringify({
                pageSize: pageSize,
                dataTotal: dataTotal,
                pageIndex: pageIndex,
                showCount: showCount,
            }) + '</div>'


            console.log(Pagination)

        })



    },
    mounted() {},
    activated() {}
}
</script>