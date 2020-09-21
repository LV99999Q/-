<template>
  <div class="SCXQualityTestRecord">
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
        <el-table-column prop="sex" label="质检时间" align="center"></el-table-column>
        <el-table-column prop="idCard" label="质检结果" align="center"></el-table-column>
        <el-table-column prop="phone" label="质检人" align="center"></el-table-column>
    </pageModular>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { myMixin } from "@/components/Public/mixin";
import searchModular from "@/components/Public/searchModular";
import pageModular from "@/components/Public/pageModular";

export default {
  mixins: [myMixin],
  components: {
    searchModular,
    pageModular,
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
  }
};
</script>

<style lang="less">
.SCXQualityTestRecord{

}
</style>