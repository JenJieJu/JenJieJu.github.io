import Vue from 'vue'
import VueRouter from 'vue-router'

import home from './modules/home'

// 路由中心
const routes = [{
    path: '/',
    component: {
        template: '<router-view></router-view>',
    },
    redirect: '/home',
    children: [{
            name: 'home',
            path: 'home',
            component: home,
            meta: {
                title: '测试',
            }
        }
    ]
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
