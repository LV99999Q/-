export const myMixin = {
    data() {
        return {
            MIXIN_searchData: {},
            MIXIN_pageData: {
                currentPage: 1,
                size: 10,
                total: 0,
                sizes: [10, 20, 30, 40]
            }, // 分页数据
            MIXIN_tableData: {
                allList: [
                    {userName: 'test', acount: '11'}
                ],
                selectedList: []
            }, //表格数据
            MIXIN_dialogData: {
                title: '',
                isShow: false,
                data: null
            }, // 弹框显示状态
            MIXIN_tabsData: {
                value: ''
            }
        }
    },
    methods: {
        // 获取表格数据
        $getTableData(search) {
            this.MIXIN_searchData = Object.assign({}, search);
            this.getTableData();
        },
        // 当前页显示条数变化
        $sizeChange(val = 10) {
            Object.assign(this.MIXIN_pageData, {size: val});
        },
        // 当前页显示条数变化
        $totalChange(val = 0) {
            Object.assign(this.MIXIN_pageData, {total: val});
        },
        // 当前页变化
        $currentPageChange(val = 1) {
            Object.assign(this.MIXIN_pageData, {currentPage: val});
        },
        // 当前选择项发生变化，返回剩下勾选的
        $selectionChange(seselection = []) {
            Object.assign(this.MIXIN_tableData, {selectedList: seselection});
        },
        // 功能组件回调
        $onBtnClick(evtSource) {
            this[evtSource]();
        },
        // 导出EXCEL需要格式化表格数据
        $formatJson(filterVal, tableData) {
            return tableData.map(v => {
                return filterVal.map(j => {
                      return v[j]
                })
            })
        },
        // TABS 改变当前选中值
        $tabChangeVal(val) {
            Object.assign(this.MIXIN_tabsData, {value: val});
        }
    }
};