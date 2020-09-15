import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './iconfonts/iconfont.css'
import './assets/iconfont/iconfont.css'
import ElementUI from 'element-ui'
import axios from 'axios'
import echarts from 'echarts'
import Highcharts from 'highcharts'
import highcharts3d from 'highcharts/highcharts-3d'
// import VueHighCharts from 'vue-highcharts'
import api from './API'
import 'element-ui/lib/theme-chalk/index.css'
import moment from 'moment'
Vue.prototype.$moment = moment
// import Blob from './loader/Blob'
// import Export2Excel from './loader/Export2Excel'
// import { Script } from 'vm';
highcharts3d(Highcharts)
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Highcharts)
// Vue.use(highcharts3d)
Vue.prototype.$echarts = echarts
Vue.prototype.$Highcharts = Highcharts
Vue.prototype.$axios = axios;
Vue.prototype.api = api;

//时间转换成：年-月-日
Vue.prototype.getNowDate = function (time) {
    var seperator1 = "-";
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var strDate = time.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
  
};
// 转换时间格式，年月日时分秒
Date.prototype.Format = function (fmt) { // author: meizz
    var o = {
        "M+": this.getMonth() + 1, // 月份
        "d+": this.getDate(), // 日
        "h+": this.getHours(), // 小时
        "m+": this.getMinutes(), // 分
        "s+": this.getSeconds(), // 秒
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ?
            (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
// 路由拦截
router.beforeEach((to, from, next) => {
    if (to.name === "login") { //如果你要登录，就放行
        next()
    } if (to.name === "checkCode") {
        next()
    } else {
        //需要验证是否登录成功
        if (localStorage.getItem("userId")) {
            next()
        } else {
            next({
                path: '/login'
            })
        }
    }
});
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
