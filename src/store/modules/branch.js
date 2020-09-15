const BranchStar = {
    state: {
        viewState:true,// 头部路由菜单状态
    },
    mutations: {
        // 修改《头部路由菜单状态》
        setViewState(state,bool) {
            state.viewState = bool
        },
    },
    actions: {
        // 调用《修改头部路由菜单状态》的方法
        alterViewState(context, arr) {
            context.commit('setViewState', arr)
        },
    },
    getters: {
        // 获取《头部路由菜单状态》
        viewState(state) {
            return state.viewState
        },
    },
};
export default BranchStar