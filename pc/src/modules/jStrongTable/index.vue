<style lang="scss" scoped>
.home {
    #table {
        width: 800px;
    }
}
</style>
<template>
    <div class="home">
        <div id="table"></div>
    </div>
</template>
<script>
import data from './data.js'
import jStrongTable from 'j-strong-table'

export default {
    data() {
        return {
            data
        }
    },
    created() {
        // jStrongTable

    },
    mounted() {
        var table = new window.jTable('#table').setConfig({
            height: 500
        });
        table.setTitle([{
            label: '姓名',
            key: 'name',
            width: 100,
            fixed: true
        }, {
            label: '嵌套key.key',
            key: 'key.key',
            width: 100,
            fixed: true
        }, {
            label: '医生 ID',
            key: 'userId',
            width: 100
        }, {
            label: '医疗机构',
            key: 'hospital',
            width: 100,
        }, {
            label: '医院 ID',
            key: 'hospitalId',
            width: 100
        }, {
            label: 'render',
            key: 'status',
            width: 100,
            render: function(data) {
                return [{
                    html: '<div style="font-size:20px;">div1</div>',
                    events: [{
                        type: 'click',
                        event: function() {
                            console.log(this)
                            alert('div1')
                        }
                    }]
                }, {
                    html: '<input type="text" />',
                    events: [{
                        type: 'keypress',
                        event: function() {
                            console.log(this)
                        }
                    }]
                }, {
                    html: '<div>div2</div>',
                    events: [{
                        type: 'mouseMove',
                        event: function() {
                            console.log(this)
                            alert('div2')
                        }
                    }],
                    child: [{
                        html: '<span style="color:red;">span1</span>',
                        events: [{
                            type: 'click',
                            event: function() {
                                console.log(this)
                                alert('span1')
                            }
                        }]
                    }, {
                        html: '<span style="color:green;">span2</span>',
                        events: [{
                            type: 'click',
                            event: function() {
                                console.log(this)
                                alert('span2')
                            }
                        }]
                    }]
                }]
            }
        }, {
            label: '科室',
            key: 'departments',
            width: 100
        }, {
            label: '职称',
            key: 'title',
            width: 100
        }, {
            label: '注册来源',
            key: 'source',
            width: 100,
        }, {
            label: '审核时间',
            key: 'limitedPeriodTime',
            width: 100,
            fixed: 'right'
        }]);

        table.setData(data);


        table.render();

        console.log(table)
    },
    activated() {}
}
</script>