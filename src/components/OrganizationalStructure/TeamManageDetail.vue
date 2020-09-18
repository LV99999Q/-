<template>
  <div class="teamManageDetail">
    <infoBar :infos='infos'></infoBar>
    <functionalModular
      :hasFunctionalBtns="hasFunctionalBtns"
      @onBtnClick="$onBtnClick">
    </functionalModular>
    <pageModular
      ref="teamManageDetailRef"
      @sizeChange="$sizeChange"
      @currentPageChange="$currentPageChange"
      @selectionChange="$selectionChange"
      :tableData="MIXIN_tableData"
      :pageData="MIXIN_pageData">
      <el-table-column  prop="userName" label="班组成员身份" align="center"></el-table-column>
      <el-table-column  prop="userName" label="员工姓名" align="center"></el-table-column>
      <el-table-column  prop="userName" label="性别" align="center"></el-table-column>
      <el-table-column  prop="userName" label="账号" align="center"></el-table-column>
      <el-table-column  prop="userName" label="联系方式" align="center"></el-table-column>
      <el-table-column label="操作" align="center"  width="300">
        <template slot-scope="scope">
          <el-button type="text" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </pageModular>

    <el-dialog
      :title="MIXIN_dialogData.title"
      :visible.sync="MIXIN_dialogData.isShow"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :destroy-on-close="true"
      append-to-body
      top="6vh"
      width="40%">
        <el-input placeholder="请输入内容" v-model="peopleListFilter">
          <el-button slot="append" icon="el-icon-search" @click="peopleListOnFilter"></el-button>
        </el-input>
        <el-table
          :data="peopleList"
          ref="peopleRef"
          max-height="400"
          border
          @selection-change="selectionChange">
          <el-table-column
            type="selection"
            width="50">
          </el-table-column>
          <el-table-column
            prop="date"
            label="员工姓名"
            align="center">
          </el-table-column>
          <el-table-column
            prop="name"
            label="性别"
            align="center">
          </el-table-column>
          <el-table-column
            prop="address"
            label="账号"
            align="center">
          </el-table-column>
          <el-table-column
            prop="address"
            label="联系方式"
            align="center">
          </el-table-column>
        </el-table>
        <div class="buttons">
          <el-button type="primary" @click="addSubmit">{{MIXIN_dialogData.title}}</el-button>
          <el-button @click="returnManage">返回</el-button>
        </div>
    </el-dialog>
  </div>
</template>

<script>
import { myMixin } from "@/components/Public/mixin";
import { export_json_to_excel } from "@/loader/Export2Excel"
import { mapState } from "vuex";
import infoBar from '@/components/Public/infoBar'
import functionalModular from '@/components/Public/functionalModular'
import pageModular from "@/components/Public/pageModular";
export default {
  mixins: [myMixin],
  components: {
    infoBar,
    functionalModular,
    pageModular
  },
  data() {
    return {
      peopleListFilter: '', // 人员筛选值
      hasFunctionalBtns: ["addTeamManager", "addTeamPeople", "export"], // 拥有的功能模块
      selection: [], // 已勾选数据
    }
  },
  props: {
    row: {
      type: Object,
      default: () => {return {}}
    }
  },
  computed: {
    ...mapState("publicData", {
      peopleList: (state) => state.peopleList
    }),
    infos: function () {
      return [
        {value: '当前班组', label: '当前班组'},
        {value: '班组成员个数', label: '班组成员个数'},
        {value: '班组负责人', label: '班组负责人'}
      ]
    }
  },
  methods: {
    // 删除
    del(row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },
    // 新增班组负责人
    addTeamManager() {
      this.changeDialog('新增班组负责人', true);
    },
    // 新增班组员工
    addTeamPeople() {
      this.changeDialog('新增班组员工', true);
    },
    // 改变弹框状态
    changeDialog(title = '', isShow = false, data = null) {
      Object.assign(this.MIXIN_dialogData, { title, isShow, data });
    },
    // 筛选人员列表
    peopleListOnFilter() {

    },
    // 新增提交
    addSubmit() {
      // this.MIXIN_dialogData.title  
    },
    selectionChange(selection) {
      this.selection = selection;
    },
    // 关闭弹框
    returnManage() {
      this.peopleListFilter = '';
      this.selection = [];
      this.$refs.peopleRef.clearSelection();
      this.changeDialog('', false, null);
    },
    // 导出
    export() {
      var tHeader = ['账号', '姓名']
      var filterVal = ['acount', 'userName']
      var filename = '管理人员表'
      var data = this.$formatJson(filterVal, this.MIXIN_tableData.allList);
      export_json_to_excel(
        tHeader,
        data,
        filename
      )
    }
  }
}
</script>

<style lang="less">
.teamManageDetail{
  width: 100%;

  .buttons{
    width: 100%;
    text-align: center;
  }
}
</style>