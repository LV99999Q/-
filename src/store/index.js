import Vue from 'vue'
import Vuex from 'vuex'
import routeData from './modules/routeData.js'
import publicData from './modules/publicData.js'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        routeData,
        publicData
    }
})