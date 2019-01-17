import Vue from 'vue'
import VueRouter from 'vue-router'

import jStrongTable from './modules/jStrongTable'
import jTimePicker from './modules/jTimePicker'
import home from './modules/home'
import jSimplePagination from './modules/jSimplePagination'

// 路由中心
const routes = [{
    path: '/',
    component: {
        template: '<router-view></router-view>',
    },
    redirect: '/home',
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
    }, {
        name: 'home',
        path: 'home',
        component: home,
        meta: {
            title: 'home',
        }
    }, {
        name: 'jSimplePagination',
        path: 'jSimplePagination',
        component: jSimplePagination,
        meta: {
            title: 'jSimplePagination'
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