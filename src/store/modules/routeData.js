import testRouter from '../../views/test/rouConfig'

const allRouters = [
    {name: 'aa', list: testRouter}
];

const returnList = function(arr) {
    return arr.map(e => e.meta)
};

const routerMetas = {
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