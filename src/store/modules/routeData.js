import peopleManageRouter from '../../views/peopleManage/rouConfig'
import customerManageRouter from '../../views/customerManage/rouConfig'

const allRouters = [
    {name: '人员管理', list: peopleManageRouter},
    {name: '客户管理', list: customerManageRouter}
];

const returnList = function(arr) {
    return arr.map(e => {
        return Object.assign({path: e.name}, e.meta)
    })
};

const routerMetas = {
    namespaced: true,
    state: {
        routerMetas: [...allRouters.map(e => {
            return {name: e.name, list: returnList(e.list)};
        })]
    },
    getters: {
        getRouterMetas(state) {
            return state.routerMetas
        }
    }
};

export default routerMetas;