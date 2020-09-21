<template>
  <div class="GPQualityTestRecord">
    <searchModular
      ref="searchModular"
      :searchSelect="searchSelect"
      :searchInput="searchInput"
      :searchTimer="searchTimer"
      @search="$getTableData">
    </searchModular>
    <pageModular
      @sizeChange="$sizeChange"
      @currentPageChange="$currentPageChange"
      @selectionChange="$selectionChange"
      :tableData="MIXIN_tableData"
      :pageData="MIXIN_pageData">
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column type="index" width="50" align="center" label="序号"></el-table-column>
        <el-table-column prop="userName" label="流水号" align="center"></el-table-column>
        <el-table-column prop="userName" label="条形码" align="center"></el-table-column>
        <el-table-column prop="acount" label="进出洞环" align="center"></el-table-column>
        <el-table-column prop="sex" label="路线" align="center"></el-table-column>
        <el-table-column prop="idCard" label="尺寸" align="center"></el-table-column>
        <el-table-column prop="phone" label="配筋比" align="center"></el-table-column>
        <el-table-column prop="deptName" label="注浆孔" align="center"></el-table-column>
        <el-table-column prop="jobStatusStr" label="类型" align="center"></el-table-column>
        <el-table-column prop="jobStatusStr" label="生产班组" align="center"></el-table-column>
        <el-table-column prop="jobStatusStr" label="监理" align="center"></el-table-column>
        <el-table-column prop="jobStatusStr" label="生产日期" align="center"></el-table-column>
        <el-table-column prop="jobStatusStr" label="质量标注" align="center"></el-table-column>
        <el-table-column prop="jobStatusStr" label="数据类型" align="center"></el-table-column>
        <el-table-column label="操作" align="center"  width="300">
          <template slot-scope="scope">
            <el-button type="text" @click="changeDialog('不合格原因', true, scope.row)">不合格原因</el-button>
            <el-button type="text" @click="scrap(scope.row)">报废</el-button>
            <el-button type="text" @click="changeDialog('质量追溯', true, scope.row)">质量追溯</el-button>
          </template>
        </el-table-column>
    </pageModular>

    <el-dialog
    :title="MIXIN_dialogData.title"
    :visible.sync="MIXIN_dialogData.isShow"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :destroy-on-close="true"
    top="6vh"
    :width="MIXIN_dialogData.title == '不合格原因' ? '30%' : '60%'">
      <GPQualityTestNoPassReason
        v-if="MIXIN_dialogData.isShow && MIXIN_dialogData.title == '不合格原因'"
        :row="MIXIN_dialogData.data"
        @closeDialog="changeDialog('', false, null)">
      </GPQualityTestNoPassReason>
      <GPQualityTestDetail
        v-if="MIXIN_dialogData.isShow && MIXIN_dialogData.title == '质量追溯'"
        :row="MIXIN_dialogData.data"
        @closeDialog="changeDialog('', false, null)">
      </GPQualityTestDetail>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { myMixin } from "@/components/Public/mixin";
import searchModular from "@/components/Public/searchModular";
import pageModular from "@/components/Public/pageModular";

import GPQualityTestDetail from "@/components/GPQualityTestRecord/GPQualityTestDetail";
import GPQualityTestNoPassReason from "@/components/GPQualityTestRecord/GPQualityTestNoPassReason";

export default {
  mixins: [myMixin],
  components: {
    searchModular,
    pageModular,
    GPQualityTestDetail,
    GPQualityTestNoPassReason
  },
  computed: {
    ...mapState("publicData", {
      productionTeam: (state) => state.productionTeams,
      qualityTag: (state) => state.qualityTags,
      mouldSize: (state) => state.mouldSizes,
      reinforcementRatio: (state) => state.reinforcementRatios,
      metroLineType: (state) => state.metroLineTypes,
      groutingHole: (state) => state.groutingHoles,
      dataInputType: (state) => state.dataInputTypes,
    })
  },
  mounted() {
    this.searchSelect.forEach((e) => {
      e.selectOptions = this[e.value];
    });
    // this.$refs.searchModular.search();
  },
  data() {
    return {
      searchTimer: [
        { value: "printTimes", label: "打印时间", startPla: "打印开始时间", endPla: "打印结束时间", type: 'datetimerange', editable: false},
        { value: "qualityTestTimes", label: "质检时间", startPla: "质检开始时间", endPla: "质检结束时间", type: 'datetimerange', editable: false}
      ], // 时间选择框
      searchSelect: [
        { value: "productionTeam", label: "班组名称", selectOptions: [], pla: "请选择班组名称" },
        { value: "qualityTag", label: "质量标注", selectOptions: [], pla: "请选择质量标注" },
        { value: "mouldSize", label: "尺寸", selectOptions: [], pla: "请选择尺寸" },
        { value: "jobStatus", label: "配筋比", selectOptions: [], pla: "请选择配筋比" },
        { value: "groutingHole", label: "注浆孔", selectOptions: [], pla: "请选择注浆孔" },
        { value: "metroLineType", label: "类型", selectOptions: [], pla: "请选择类型" },
        { value: "dataInputType", label: "数据类型", selectOptions: [], pla: "请选择数据类型" },
      ], // 下拉框列表
      searchInput: [
        { value: "inputSearch", label: "", pla: "请输入条形码或者制作人" }
      ], // 输入框列表
      searchInputr: [
        { value: "inputSearch", label: "流水号", startPla: "流水号起", endPla: '流水号止'}
      ], // 输入框范围列表
    };
  },
  methods: {
    scrap(row) {
      this.$confirm('此操作将报废当前选中项, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '报废成功!'
        });
      });
    },
    // 获取表格数据
    getTableData() {

    },
    changeDialog(title = '', isShow = false, data = null) {
      Object.assign(this.MIXIN_dialogData, { title, isShow, data });
    },
  }
};
</script>

<style lang="less">
.GPQualityTestRecord{

}
</style>