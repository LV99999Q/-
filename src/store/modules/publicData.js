const publicData = {
    namespaced: true,
    state: {
        // 性别
        sexs: [
            {value: null, label: '全部'},
            {value: '男', label: '男'},
            {value: '女', label: '女'}
        ],
        // 岗位状态
        jobStatus: [
            {value: null, label: '全部'},
            {value: 1, label: '在岗'},
            {value: 0, label: '离岗'}
        ],
        // 有无作业证书
        haveWorkCertificate: [
            {value: null, label: '全部'},
            {value: 1, label: '有'},
            {value: 0, label: '无'}
        ],
        // 考核结果
        examineDataResults: [
            {value: '通过', label: '通过'},
            {value: '未通过', label: '未通过'}
        ],
        // 质量标注
        qualityTags: [
            {value: null, label: '全部'},
            {value: '未质检', label: '未质检'},
            {value: '报废', label: '报废'},
            {value: '不合格', label: '不合格'},
            {value: '合格', label: '合格'}
        ],
        // 注浆孔
        groutingHoles: [
            {value: null, label: '全部'},
            {value: '加注', label: '加注'},
            {value: '标准', label: '标准'},
        ],
        // 数据类型
        dataInputTypes: [
            {value: null, label: '全部'},
            {value: '加注', label: '加注'},
            {value: '标准', label: '标准'},
        ],
        // 部门 
        depts: [],
        // 部门负责人
        deptManagers: [],
        // 人员列表
        peopleList: [],
        // 地铁线
        metroLines: [],
        // 配筋比
        reinforcementRatios: [],
        // 地铁线标段
        metroLineBDS: [],
        // 地铁线类型
        metroLineTypes: [],
        // 模具状态
        mouldStates: [],
        // 模具生产厂家
        mouldManufacturers: [],
        // 模具最大循环次数
        mouldMaxLoops: [],
        // 模具尺寸
        mouldSizes: [],
        // 生产班组
        productionTeams: [],

    },
    mutations:{
        setMetroLines(state, metroLines) {
            let maxLength = state.metroLines.length;
            state.metroLines.splice(0, maxLength, ...metroLines);
        },
        setDepts(state, depts) {
            let maxLength = state.depts.length;
            state.depts.splice(0, maxLength, ...depts);
        },
        setDeptManagers(state, deptManagers) {
            let maxLength = state.deptManagers.length;
            state.deptManagers.splice(0, maxLength, ...deptManagers);
        },
        setPeopleLists(state, peopleList) {
            let maxLength = state.peopleList.length;
            state.peopleList.splice(0, maxLength, ...peopleList);
        },
        setMetroLineType(state, metroLineTypes) {
            let maxLength = state.metroLineTypes.length;
            state.metroLineTypes.splice(0, maxLength, ...metroLineTypes);
        },
        setProductionTeam(state, productionTeams) {
            let maxLength = state.productionTeams.length;
            state.productionTeams.splice(0, maxLength, ...productionTeams);
        },
        setMetroLineBD(state, metroLineBDS) {
            let maxLength = state.metroLineBDS.length;
            state.metroLineBDS.splice(0, maxLength, ...metroLineBDS);
        },
        setReinforcementRatios(state, reinforcementRatios) {
            let maxLength = state.reinforcementRatios.length;
            state.reinforcementRatios.splice(0, maxLength, ...reinforcementRatios);
        },
    },
    actions:{
        // 设置地铁线
        async setMetroLines( context, val ) { 
            let aa = await new Promise(res => {
                res([{label: '测试1', value: '测试1'}])
            })
            context.commit('setMetroLines', aa);
        },
        // 设置部门
        async setDepts( context, val ) { 
            let aa = await new Promise(res => {
                res([{label: '测试1', value: '测试1'}])
            })
            context.commit('setDepts', aa);
        },
        // 设置部门负责人
        async setDeptManagers( context, val ) {
            let aa = await new Promise(res => {
                res([{label: '测试1', value: '测试1'}])
            })
            context.commit('setDeptManagers', aa);
        },
        // 设置人员列表
        async setPeopleLists( context, val ) {
            let aa = await new Promise(res => {
                res([{label: '测试1', value: '测试1'}])
            })
            context.commit('setPeopleLists', aa);
        },
        // 设置地铁线类型
        async setMetroLineType( context, val ) {
            let aa = await new Promise(res => {
                res([{label: '测试1', value: '测试1'}])
            })
            context.commit('setMetroLineType', aa);
        },
        // 设置地铁线标段
        async setMetroLineBD( context, val ) {
            let aa = await new Promise(res => {
                res([{label: '测试1', value: '测试1'}])
            })
            context.commit('setMetroLineBD', aa);
        },
        // 设置生产班组
        async setProductionTeam( context, val ) {
            let aa = await new Promise(res => {
                res([{label: '测试1', value: '测试1'}])
            })
            context.commit('setProductionTeam', aa);
        },
        // 设置配筋比
        async setReinforcementRatios( context, val ) {
            let aa = await new Promise(res => {
                res([{label: '测试1', value: '测试1'}])
            })
            context.commit('setReinforcementRatios', aa);
        },
    },
    getters: {}
};

export default publicData;