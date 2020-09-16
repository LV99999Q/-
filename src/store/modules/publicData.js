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
        // 部门
        depts: []
    },

    mutations:{
        setDepts (state, depts ) {
            state.depts = depts;
        }
    },
    actions:{
        setDepts( context, depts ) {
            context.commit( 'setDepts', depts );
        }
    },
    getters: {}
};

export default publicData;