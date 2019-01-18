<style lang="scss" scoped>
.box {
    width: 800px;
    margin: 0 auto;

    #table {
        width: 100%;
    }

    #pagination {
        margin: 20px 0;
    }
}
</style>
<template>
    <div class="box">
        <div id="table"></div>
        <div id="pagination"></div>
    </div>
</template>
<script>
import data from './data.js'
import jStrongTable from 'j-strong-table'
import jSimplePagination from 'j-simple-pagination'

export default {
    data() {
        return {
            data: (() => {
                let array = [];
                for (var i = 0; i < 2; i++) {
                    let ary = [].concat(data);
                    ary.sort(function() {
                        return Math.random() > .5 ? -1 : 1;
                    })
                    array = array.concat(ary);
                }
                return array
            })(),
            pageSize: 6,
            pageIndex: 1,
            showCount: 4,
        }
    },
    computed: {
        pageDatas() {
            let result = []
            for (var i = 0, length = this.data.length; i < length; i += this.pageSize) {
                result.push(this.data.slice(i, i + this.pageSize));
            }
            return result;
        }
    },
    methods: {
        changePage(i) {
            var datas = this.pageDatas[i - 1];
            this.table.setData(datas);
            this.table.render();
        }
    },
    created() {
        // jStrongTable

    },
    mounted() {
        this.table = new window.jTable('#table').setConfig({
            // height: 500
        }).setTitle([{
            // type: 'selection',
            width: 60,
            fixed: true,
            render: function(data) {
                if (data.headPicFileName) {
                    return [{
                        html: '<div style="text-align:center;"><img src="' + data.headPicFileName + '" alt="" width="30" height="30" /></div>'
                    }]
                }
            }
        }, {
            label: '姓名',
            key: 'name',
            width: 100,
            fixed: true
        }, {
            label: '嵌套key.key',
            key: 'key.key',
            width: 100,
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

        this.Pagination = new window.jSimplePagination('#pagination', {
            pageSize: this.pageSize,
            dataTotal: this.data.length,
            pageIndex: this.pageIndex,
            showCount: this.showCount,
            onChange: (data) => {
                this.changePage(data.pageIndex);
            }
        });

        this.changePage(this.pageIndex);
    },
    activated() {}
}
</script>