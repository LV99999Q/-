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
        // 部门
        depts: [],
        // 部门负责人
        deptManagers: [],
        // 人员列表
        peopleList: [
            {name: 1},
            {name: 2}
        ]
    },

    mutations:{
        setDepts(state, depts ) {
            state.depts = depts;
        },
        setDeptManagers(state, deptManagers ) {
            state.deptManagers = deptManagers;
        },
        setPeopleLists(state, peopleList ) {
            state.peopleList = peopleList;
        },
    },
    actions:{
        // 设置部门
        setDepts( context, depts ) {
            context.commit( 'setDepts', depts );
        },
        // 设置部门负责人
        setDeptManagers( context, deptManagers ) {
            context.commit( 'setDeptManagers', deptManagers );
        },
        // 设置人员列表
        setPeopleLists( context, peopleList ) {
            context.commit( 'setPeopleLists', peopleList );
        },
    },
    getters: {}
};

export default publicData;