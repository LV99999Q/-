import peopleManageRouter from '../../views/peopleManage/rouConfig'
import customerManageRouter from '../../views/customerManage/rouConfig'
import mouldManage from '../../views/mouldManage/rouConfig'
import planManage from '../../views/planManage/rouConfig'
import prodManage from '../../views/prodManage/rouConfig'

const allRouters = [
    {name: '人员管理', list: peopleManageRouter},
    {name: '客户管理', list: customerManageRouter},
    {name: '模具管理', list: mouldManage},
    {name: '计划管理', list: planManage},
    {name: '生产管理', list: prodManage}
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