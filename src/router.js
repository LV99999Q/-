import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login'
import Home from './views/Home'
import peopleManage from './views/peopleManage/rouConfig'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        { 
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            redirect: '/home/managePeople',
            children: [
                ...peopleManage,
            ]
        },
    ]
})
