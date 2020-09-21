<template>
  <div class="GJLQualityTestRecord">
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
        <el-table-column prop="userName" label="条形码" align="center"></el-table-column>
        <el-table-column prop="acount" label="地铁线" align="center"></el-table-column>
        <el-table-column prop="sex" label="尺寸" align="center"></el-table-column>
        <el-table-column prop="idCard" label="配筋" align="center"></el-table-column>
        <el-table-column prop="phone" label="块号" align="center"></el-table-column>
        <el-table-column prop="deptName" label="生产班组" align="center"></el-table-column>
        <el-table-column prop="jobStatusStr" label="打印日期" align="center"></el-table-column>
        <el-table-column prop="jobStatusStr" label="制作人" align="center"></el-table-column>
        <el-table-column prop="jobStatusStr" label="质量标注" align="center"></el-table-column>
        <el-table-column label="操作" align="center"  width="190">
          <template slot-scope="scope">
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
    width="70%">
      <GJLQualityTestRecordDetail v-if="MIXIN_dialogData.isShow"  @closeDialog="changeDialog('', false, null)"></GJLQualityTestRecordDetail>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { myMixin } from "@/components/Public/mixin";
import searchModular from "@/components/Public/searchModular";
import pageModular from "@/components/Public/pageModular";
import GJLQualityTestRecordDetail from "@/components/GJLQualityTestRecord/GJLQualityTestRecordDetail";


export default {
  mixins: [myMixin],
  components: {
    searchModular,
    pageModular,
    GJLQualityTestRecordDetail
  },
  computed: {
    ...mapState("publicData", {
      productionTeam: (state) => state.productionTeams,
      qualityTag: (state) => state.qualityTags,
      reinforcementRatio: (state) => state.reinforcementRatios,
      metroLineType: (state) => state.jobStatus,
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
        { value: "reinforcementRatio", label: "配筋比", selectOptions: [], pla: "请选择配筋比" },
        { value: "metroLineType", label: "类型", selectOptions: [], pla: "请选择类型" },
      ], // 下拉框列表
      searchInput: [
        { value: "inputSearch", label: "", pla: "请输入条形码或者制作人" }
      ], // 输入框列表
    };
  },
  methods: {
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
.GJLQualityTestRecord{

}
</style>