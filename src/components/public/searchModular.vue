<template>
    <div id="searchModular">
        <el-form :inline="true" :model="searchModular">
            <el-form-item v-for="(item) in searchInput" :key="item.value" :label="item.label">
                <el-input v-model="searchModular[item.value]" :placeholder="item.pla"></el-input>
            </el-form-item>
            <el-form-item v-for="(item) in searchSelect" :key="item.val" :label="item.label">
                <el-select v-model="searchModular[item.value]" :placeholder="item.pla">
                    <el-option v-for="selectOp in item.selectOptions" :key="selectOp.value" :label="selectOp.label" :value="selectOp.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item v-for="(item) in searchTimer" :key="item.value" :label="item.label">
                <el-date-picker
                    v-model="searchModular[item.value]"
                    :start-placeholder="item.startPla"
                    :end-placeholder="item.endPla"
                    :editable="item.editable"
                    :type="item.type"
                    :format="dateType[item.type]['format']"
                    :default-time="['12:00:00', '08:00:00']">
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
            aa: 'aa',
            searchModular: {},
            dateType: {
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
        },
        search() {
            this.$emit('search', this.searchModular);
        }
    }
}
</script>

<style lang="less" scope>
#searchModular{
    width: 100%;
}
</style>