<template>
  <div class="GPPlanManage">
    <tabsModular
      :value="MIXIN_tabsData.value"
      :tabs="tabs"
      @tabChangeVal="tabChange">
    </tabsModular>
    <div class="cut_line"></div>
    <searchModular
      ref="searchModular"
      :searchSelect="searchSelect"
      :searchInput="searchInput"
      :searchTimer="searchTimer"
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
      <el-table-column  prop="userName" label="日起始时间" align="center"></el-table-column>
      <el-table-column  prop="userName" label="日结束时间" align="center"></el-table-column>
      <el-table-column  prop="userName" label="生产班组" align="center"></el-table-column>
      <el-table-column  prop="userName" label="提交人" align="center"></el-table-column>
      <el-table-column  prop="userName" label="提交时间" align="center"></el-table-column>
      <el-table-column  prop="userName" label="尺寸" align="center"></el-table-column>
      <el-table-column  prop="userName" label="配筋比" align="center"></el-table-column>
      <el-table-column  prop="userName" label="数量(环)" align="center"></el-table-column>
      <el-table-column label="操作" align="center"  width="100" v-if="MIXIN_tabsData.value == '管片日计划'">
        <template slot-scope="scope">
          <el-button type="text" icon="el-icon-edit" @click="changeDialog('详情', true, scope.row)">详情</el-button>
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
      width="80%">
      <GPPlanManageDetail 
        v-if="MIXIN_dialogData.isShow && MIXIN_dialogData.title == '详情'"
        :row="MIXIN_dialogData.data">
      </GPPlanManageDetail>
      <AddGPPlanManage v-if="MIXIN_dialogData.isShow && MIXIN_dialogData.title != '详情'"></AddGPPlanManage>
    </el-dialog>
  </div>
</template>

<script>
import { myMixin } from "@/components/Public/mixin";
import { mapState } from "vuex";

import tabsModular from '@/components/Public/tabsModular'
import pageModular from "@/components/Public/pageModular";
import functionalModular from '@/components/Public/functionalModular';
import searchModular from '@/components/Public/searchModular';

import GPPlanManageDetail from '@/components/GPPlanManage/GPPlanManageDetail';
import AddGPPlanManage from '@/components/GPPlanManage/AddGPPlanManage';

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
        {value: '管片日计划', label: '管片日计划'},
        {value: '管片周计划', label: '管片周计划'}
      ],
      hasFunctionalBtns: ["add", "del"], // 拥有的功能模块
      searchSelect: [
        { value: "productionTeam", label: "生产班组", selectOptions: [], pla: "请选择性别" },
      ], // 下拉框列表
      searchInput: [
        { value: "inputSearch", label: "提交人", pla: "请输入提交人" }
      ], // 输入框列表
      searchTimer: [
        { value: "planTimes", label: "计划时间", startPla: "计划开始时间", endPla: "计划结束时间", type: 'datetimerange', editable: false}
      ]
    }
  },
  computed: {
    ...mapState("publicData", {
      productionTeam: (state) => state.productionTeams,
    })
  },
  mixins: [myMixin],
  components: {
    tabsModular,
    functionalModular,
    pageModular,
    searchModular,
    GPPlanManageDetail,
    AddGPPlanManage
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
.GPPlanManage{
  
}
</style>
