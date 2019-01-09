import Vue from 'vue'
import VueRouter from 'vue-router'

import jStrongTable from './modules/jStrongTable'
import jTimePicker from './modules/jTimePicker'

// 路由中心
const routes = [{
    path: '/',
    component: {
        template: '<router-view></router-view>',
    },
    redirect: '/jStrongTable',
    children: [{
        name: 'jStrongTable',
        path: 'jStrongTable',
        component: jStrongTable,
        meta: {
            title: 'jStrongTable',
        }
    }, {
        name: 'jTimePicker',
        path: 'jTimePicker',
        component: jTimePicker,
        meta: {
            title: 'jTimePicker',
        }
    }]
}]



// 路由
Vue.use(VueRouter)
const router = new VueRouter({
    routes,
})

export {
    router,
    // store
}