<template>
<div class="GJLPlanManageDetail">
    <infoBar :infos='infos'></infoBar>
    <el-table
      header-row-class-name="customCla"
      :data="tableData">
      <el-table-column
        prop="date"
        label="日期"
        align="center"
        width="180">
      </el-table-column>
      <el-table-column
        v-for="item in tableConfig"
        :key="item.key"
        :prop="item.key"
        :label="item.label">
      </el-table-column>
      <el-table-column
        prop="all"
        label="合计">
      </el-table-column>
    </el-table>
</div>
</template>

<script>
import infoBar from '@/components/Public/infoBar'
export default {
  components: {
    infoBar,
  },
  props: {
    row: {
      type: Object,
      default:  () => {return {};}
    }
  },
  computed: {
    infos: function () {
      let {productionTeam, time} = this.row;
      return [
        {value: productionTeam, label: '生产班组'},
        {value: time, label: '计划开始时间'},
        {value: time, label: '计划结束时间'},
      ]
    }
  },
  methods: {
    // 获取表格信息
    getTableInfo() {
      this.getTableConfig();
      this.getTableData();
    },
    // 获取表格数据
    getTableData() {

    },
    // 获取表格配置
    getTableConfig() {

    }
  },
  created() {
    this.getTableInfo()
  },
  data() {
    return {
      tableConfig: [],
      tableData: []
    }
  },
}
</script>

<style lang="less" scoped>
.GJLPlanManageDetail{

}
</style>