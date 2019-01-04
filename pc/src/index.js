// js向下兼容
import 'babel-polyfill'

import Vue from 'vue'
import { router, store } from './modules.js'

import App from './App'


Vue.config.productionTip = false


window.App = new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
