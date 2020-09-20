<template>
  <div class="CRCRecordDetail">
    <tabsModular
      :value="MIXIN_tabsData.value"
      :tabs="tabs"
      @tabChangeVal="tabChange">
    </tabsModular>
    <div class="cut_line"></div>
    <searchModular
      v-if="MIXIN_tabsData.value == '水养池出入池记录'"
      ref="searchModular"
      :searchSelect="searchSelect"
      :searchInput="searchInput"
      :searchTimer="searchTimer"
      @search="$getTableData">
    </searchModular>
    <pageModular
      ref="pageModular"
      @sizeChange="$sizeChange"
      @currentPageChange="$currentPageChange"
      :tableData="MIXIN_tableData"
      :pageData="MIXIN_pageData">
      <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
      <el-table-column v-if="MIXIN_tabsData.value == '水养池实时监控'" prop="userName" label="流水号" align="center"></el-table-column>
      <el-table-column v-if="MIXIN_tabsData.value == '水养池实时监控'" prop="userName" label="地铁线" align="center"></el-table-column>
      <el-table-column v-if="MIXIN_tabsData.value == '水养池实时监控'" prop="userName" label="管片尺寸" align="center"></el-table-column>
      <el-table-column v-if="MIXIN_tabsData.value == '水养池实时监控'" prop="userName" label="配筋比" align="center"></el-table-column>
      <el-table-column v-if="MIXIN_tabsData.value == '水养池实时监控'" prop="userName" label="进出洞环" align="center"></el-table-column>
      <el-table-column v-if="MIXIN_tabsData.value == '水养池实时监控'" prop="userName" label="注浆孔" align="center"></el-table-column>
      <el-table-column v-if="MIXIN_tabsData.value == '水养池实时监控'" prop="userName" label="管片类型" align="center"></el-table-column>
      <el-table-column v-if="MIXIN_tabsData.value == '水养池实时监控'" prop="userName" label="入池日期" align="center"></el-table-column>
      <el-table-column v-if="MIXIN_tabsData.value == '水养池实时监控'" prop="userName" label="入池操作人" align="center"></el-table-column>

      <el-table-column v-if="MIXIN_tabsData.value == '水养池出入池记录'" prop="userName" label="管片流水号" align="center"></el-table-column>
      <el-table-column v-if="MIXIN_tabsData.value == '水养池出入池记录'" prop="userName" label="地铁线" align="center"></el-table-column>
      <el-table-column v-if="MIXIN_tabsData.value == '水养池出入池记录'" prop="userName" label="尺寸" align="center"></el-table-column>
      <el-table-column v-if="MIXIN_tabsData.value == '水养池出入池记录'" prop="userName" label="类型" align="center"></el-table-column>
      <el-table-column v-if="MIXIN_tabsData.value == '水养池出入池记录'" prop="userName" label="配筋比" align="center"></el-table-column>
      <el-table-column v-if="MIXIN_tabsData.value == '水养池出入池记录'" prop="userName" label="进出洞环" align="center"></el-table-column>
      <el-table-column v-if="MIXIN_tabsData.value == '水养池出入池记录'" prop="userName" label="注浆孔" align="center"></el-table-column>
      <el-table-column v-if="MIXIN_tabsData.value == '水养池出入池记录'" prop="userName" label="入池操作人" align="center"></el-table-column>
      <el-table-column v-if="MIXIN_tabsData.value == '水养池出入池记录'" prop="userName" label="入池时间" align="center"></el-table-column>
      <el-table-column v-if="MIXIN_tabsData.value == '水养池出入池记录'" prop="userName" label="入池温度" align="center"></el-table-column>
      <el-table-column v-if="MIXIN_tabsData.value == '水养池出入池记录'" prop="userName" label="入池PH" align="center"></el-table-column>
      <el-table-column v-if="MIXIN_tabsData.value == '水养池出入池记录'" prop="userName" label="水养时长" align="center"></el-table-column>
      <el-table-column v-if="MIXIN_tabsData.value == '水养池出入池记录'" prop="userName" label="出池操作人" align="center"></el-table-column>
      <el-table-column v-if="MIXIN_tabsData.value == '水养池出入池记录'" prop="userName" label="出池时间" align="center"></el-table-column>
      <el-table-column v-if="MIXIN_tabsData.value == '水养池出入池记录'" prop="userName" label="出池温度" align="center"></el-table-column>
      <el-table-column v-if="MIXIN_tabsData.value == '水养池出入池记录'" prop="userName" label="出池PH" align="center"></el-table-column>
    </pageModular>
  </div>
</template>

<script>
import { myMixin } from "@/components/Public/mixin";
import { mapState } from "vuex";

import tabsModular from '@/components/Public/tabsModular'
import pageModular from "@/components/Public/pageModular";
import searchModular from '@/components/Public/searchModular';
export default {
  mounted() {
    this.searchSelect.forEach((e) => {
      e.selectOptions = this[e.value];
    });
    // this.$refs.searchModular.search();
  },
  data() {
    return {
      tabs: [
        {value: '水养池实时监控', label: '水养池实时监控'},
        {value: '水养池出入池记录', label: '水养池出入池记录'}
      ],
      searchSelect: [
        { value: "metroLineType", label: "类型", selectOptions: [], pla: "请选择类型" },
        { value: "productionTeam", label: "配筋比", selectOptions: [], pla: "请选择配筋比" },
        { value: "groutingHole", label: "注浆孔", selectOptions: [], pla: "请选择注浆孔" }
      ], // 下拉框列表
      searchInput: [
        { value: "inputSearch", label: "管片流水号", pla: "请输入管片流水号" }
      ], // 输入框列表
      searchTimer: [
        { value: "inTimes", label: "入池时间", startPla: "入池开始时间", endPla: "入池结束时间", type: 'datetimerange', editable: false},
        { value: "outTimes", label: "出池时间", startPla: "出池开始时间", endPla: "出池结束时间", type: 'datetimerange', editable: false}
      ]
    }
  },
  computed: {
    ...mapState("publicData", {
      groutingHole: (state) => state.groutingHoles,
      metroLineType: (state) => state.metroLineType,
      reinforcementRatio: (state) => state.reinforcementRatios,
    })
  },
  mixins: [myMixin],
  components: {
    tabsModular,
    pageModular,
    searchModular,
  },
  methods: {
    // 新增
    add() {
      let title = `新增${this.MIXIN_tabsData.value}`; 
      this.changeDialog(title, true)
    },
    changeDialog(title = '', isShow = false, data = null) {
      Object.assign(this.MIXIN_dialogData, { title, isShow, data });
    },
    // 删除
    del() {
        if(this.MIXIN_tableData.selectedList.length) {
          this.$confirm('此操作将删除已选择数据, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          });
        }
    },
    getTableData() {

    },
    // tab变换
    tabChange(val) {
      this.$selectionChange();
      this.$refs['pageModular'].clearSelection()
      this.$currentPageChange();
      this.$tabChangeVal(val);

      if('水养池实时监控' == val) {
        this.getTableData()
      }
    }
  }
}
</script>

<style lang="less">
.CRCRecordDetail{

}
</style>