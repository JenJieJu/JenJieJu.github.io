// js向下兼容
import 'babel-polyfill'

import Vue from 'vue'
import { router, store } from './modules.js'
import vueWechatTitle from 'vue-wechat-title'

import App from './App'
import './css.scss'

import './ts.ts'

Vue.config.productionTip = false

Vue.use(vueWechatTitle)

window.App = new Vue({
    el: '#app',
    router,
    // store,
    components: { App },
    template: '<App/>'
})

