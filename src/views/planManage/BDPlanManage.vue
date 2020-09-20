<template>
  <div class="BDPlanManage">
    <div class="cut_line"></div>
    <searchModular
      ref="searchModular"
      :searchSelect="searchSelect"
      :searchInput="searchInput"
      :searchTime="searchTime"
      @search="$getTableData">
    </searchModular>
    <functionalModular
      :hasFunctionalBtns="hasFunctionalBtns"
      @onBtnClick="$onBtnClick">
    </functionalModular>  
    <pageModular
      ref="pageModular"
      @sizeChange="$sizeChange"
      @currentPageChange="$currentPageChange"
      @selectionChange="$selectionChange"
      :tableData="MIXIN_tableData"
      :pageData="MIXIN_pageData">
      <el-table-column type="selection" width="50" align="center"></el-table-column>
      <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
      <el-table-column  prop="userName" label="地铁线" align="center"></el-table-column>
      <el-table-column  prop="userName" label="标段名称" align="center"></el-table-column>
      <el-table-column  prop="userName" label="提交人" align="center"></el-table-column>
      <el-table-column  prop="userName" label="提交时间" align="center"></el-table-column>
      <el-table-column label="操作" align="center" width="100">
        <template slot-scope="scope">
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
      width="60%">
      <AddBDPlanManage v-if="MIXIN_dialogData.isShow"></AddBDPlanManage>
    </el-dialog>
  </div>
</template>

<script>
import { myMixin } from "@/components/Public/mixin";
import { mapState } from "vuex";

import pageModular from "@/components/Public/pageModular";
import functionalModular from '@/components/Public/functionalModular';
import searchModular from '@/components/Public/searchModular';

import AddBDPlanManage from '@/components/BDPlanManage/AddBDPlanManage';

export default {
  mounted() {
    this.searchSelect.forEach((e) => {
      e.selectOptions = this[e.value];
    });
    // this.$refs.searchModular.search();
  },
  data() {
    return {
      hasFunctionalBtns: ["add", "del"], // 拥有的功能模块
      searchSelect: [
        { value: "metroLine", label: "地铁线", selectOptions: [], pla: "请选择地铁线" },
      ], // 下拉框列表
      searchInput: [
        { value: "inputSearch", label: "提交人", pla: "请输入提交人" }
      ],
      searchTime: [
        { value: "searchTime", type: 'month', label: "标段需求月份", pla: "请选择请输入提交人" }
      ]
    }
  },
  computed: {
    ...mapState("publicData", {
      metroLine: (state) => state.metroLines,
    })
  },
  mixins: [myMixin],
  components: {
    functionalModular,
    pageModular,
    searchModular,
    AddBDPlanManage
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
    // tab变换
    tabChange(val) {
      this.$selectionChange();
      this.$refs['pageModular'].clearSelection()
      this.$refs['searchModular'].$clearVal()
      this.$currentPageChange();
      this.$tabChangeVal(val);
    }
  }
}
</script>

<style lang="less">
.BDPlanManage{
  
}
</style>
