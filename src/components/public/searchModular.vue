<template>
    <div id="searchModular">
        <el-form :inline="true" :model="searchModular" ref="searchModularRef">
            <el-form-item v-for="(item) in searchInput" :key="item.value" :label="item.label">
                <el-input v-model="searchModular[item.value]" :placeholder="item.pla"></el-input>
            </el-form-item>
            <el-form-item v-for="(item) in searchSelect" :key="item.val" :label="item.label">
                <el-select v-model="searchModular[item.value]" :placeholder="item.pla" @change="selectChange(item)">
                    <el-option v-for="selectOp in item.selectOptions" :key="selectOp.value" :label="selectOp.label" :value="selectOp.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item v-for="(item) in searchTimer" :key="item.value" :label="item.label">
                <el-date-picker
                    v-model="searchModular[item.value]"
                    :start-placeholder="item.startPla || '开始时间'"
                    :end-placeholder="item.endPla || '结束时间'"
                    :editable="item.editable || false"
                    :type="item.type || 'datetimerange'"
                    :value-format="dateType[item.type]['format'] || 'yyyy-MM-dd HH:mm:ss'"
                    :format="dateType[item.type]['format'] || 'yyyy-MM-dd HH:mm:ss'"
                    :default-time="['00:00:00', '23:59:59']">
                </el-date-picker>
            </el-form-item>
            <el-form-item v-for="item in searchTime" :key="item.value" :label="item.label">
                <el-date-picker
                    v-model="searchModular[item.value]"
                    :type="item.type"
                    :editable="item.editable || false"
                    :placeholder="item.pla || '请选择时间'"
                    :value-format="dateType[item.type]['format']"
                    :format="dateType[item.type]['format']">
                </el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="search">查询</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchModular: {},
            dateType: {
                month: {format: 'yyyy-MM'},
                daterange: {format: 'yyyy-MM-dd'},
                datetimerange: {format: 'yyyy-MM-dd HH:mm:ss'},
            }, // 时间选择器类型返回格式
        }
    },
    props: {
        searchInput: {
            type: Array,
            default: () => {return [];}
        },
        searchSelect: {
            type: Array,
            default: () => {return [];}
        },
        searchTimer: {
            type: Array,
            default: () => {return [];}
        },
        searchTime: {
            type: Array,
            default: () => {return [];}
        },
    },
    created() {
        this.init()
    },
    destroyed() {
        this.searchModular = {};
    },
    methods: {
        init() {
            this.searchInput.forEach(e => {
                this.$set(this.searchModular, e.value, '')
            });
            this.searchTimer.forEach(e => {
                this.$set(this.searchModular, e.value, [])
            });
            this.searchSelect.forEach(e => {
                this.$set(this.searchModular, e.value, null)
            });
            this.searchTime.forEach(e => {
                this.$set(this.searchModular, e.value, '')
            });
        },
        selectChange(item) {
            if(item.resetOption) {
                this.$emit('resetOption', item.resetOption);
            }
        },
        search() {
            this.$emit('search', this.searchModular);
        },
        // 对外接口
        $search() {
            this.$emit('search', this.searchModular);
        },
        $clearVal() {
            this.init()
        }
    }
}
</script>

<style lang="less" scope>
#searchModular{
    width: 100%;
}
</style>