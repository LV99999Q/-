import Vue from 'vue'
import Vuex from 'vuex'
import routeData from './modules/routeData.js'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        routeData
    }
})