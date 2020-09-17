<template>
  <div class="managePeople">
    <searchModular
      ref="searchModular"
      :searchSelect="searchSelect"
      :searchInput="searchInput"
      @search="$getTableData">
    </searchModular>
    <functionalModular
      :hasFunctionalBtns="hasFunctionalBtns"
      @onBtnClick="$onBtnClick">
    </functionalModular>
    <pageModular
      @sizeChange="$sizeChange"
      @currentPageChange="$currentPageChange"
      @selectionChange="$selectionChange"
      :tableData="MIXIN_tableData"
      :pageData="MIXIN_pageData">
        <el-table-column type="selection" width="50" align="center"></el-table-column>
        <el-table-column type="index" width="50" label="序号"></el-table-column>
        <el-table-column prop="userName" label="姓名" align="center"></el-table-column>
        <el-table-column prop="acount" label="账号" align="center"></el-table-column>
        <el-table-column prop="sex" label="性别" align="center"></el-table-column>
        <el-table-column prop="idCard" label="身份证号码" align="center"></el-table-column>
        <el-table-column prop="phone" label="联系方式" align="center"></el-table-column>
        <el-table-column prop="deptName" label="部门" align="center"></el-table-column>
        <el-table-column prop="jobStatusStr" label="岗位状态" align="center"></el-table-column>
        <el-table-column label="操作" align="center"  width="190">
          <template slot-scope="scope">
            <el-button type="text" icon="el-icon-edit" @click="changeDialog('修改', true, scope.row)">修改</el-button>
            <el-button type="text" icon="el-icon-postcard" @click="makeCard(scope.row)">制卡</el-button>
            <el-button type="text" icon="el-icon-reading" @click="changeDialog('查看', true, scope.row)">查看</el-button>
          </template>
        </el-table-column>
    </pageModular>

    <el-dialog
    :title="dialogManaegePeople.title"
    :visible.sync="dialogManaegePeople.isShow"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :destroy-on-close="true"
    top="6vh"
    width="70%">
      <AddPeopleInfo v-if="dialogManaegePeople.title == '新增'" @closeDialog="changeDialog('', false, null)"></AddPeopleInfo>
      <CheckPeopleInfo v-else-if="dialogManaegePeople.title == '查看'"  @closeDialog="changeDialog('', false, null)"></CheckPeopleInfo>
      <EditPeopleInfo v-else  @closeDialog="changeDialog('', false, null)"></EditPeopleInfo>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { myMixin } from "@/components/Public/mixin";
import searchModular from "@/components/Public/searchModular";
import functionalModular from "@/components/Public/functionalModular";
import pageModular from "@/components/Public/pageModular";
import { export_json_to_excel } from "@/loader/Export2Excel"
import AddPeopleInfo from "@/components/ManagePeople/AddPeopleInfo"
import CheckPeopleInfo from "@/components/ManagePeople/CheckPeopleInfo"
import EditPeopleInfo from "@/components/ManagePeople/EditPeopleInfo"

export default {
  mixins: [myMixin],
  components: {
    searchModular,
    functionalModular,
    pageModular,
    AddPeopleInfo,
    CheckPeopleInfo,
    EditPeopleInfo
  },
  computed: {
    ...mapState("publicData", {
      sex: (state) => state.sexs,
      deptId: (state) => state.depts,
      jobStatus: (state) => state.jobStatus,
    }),
  },
  created() {
    this.searchSelect.forEach((e) => {
      e.selectOptions = this[e.value];
    });
  },
  mounted() {
    this.$refs.searchModular.search();
  },
  data() {
    return {
      dialogManaegePeople: {
        title: '',
        isShow: false,
        data: null
      }, // 弹框显示状态
      searchSelect: [
        { value: "sex", label: "性别", selectOptions: [], pla: "请选择性别" },
        { value: "deptId", label: "部门", selectOptions: [], pla: "请选择部门" },
        { value: "jobStatus", label: "岗位状态", selectOptions: [], pla: "请选择岗位状态" }
      ], // 下拉框列表
      searchInput: [
        { value: "inputSearch", label: "搜索值", pla: "姓名/账号/身份证号码/联系方式" },
      ], // 输入框列表
      hasFunctionalBtns: ["add", "del", "export"], // 拥有的功能模块
    };
  },
  methods: {
    // 获取表格数据
    getTableData() {

    },
    // 新增
    add() {
      this.changeDialog('新增', true)
    },
    changeDialog(title = '', isShow = false, data = null) {
      Object.assign(this.dialogManaegePeople, { title, isShow, data });
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
    },
    // 制卡
    makeCard() {

    }
  }
};
</script>

<style lang="less">
.customCla{
  color: #fefefe;
  font-size: 14px;
  font-weight: 700;

  > th {
    background: #547ecc!important;
  }
}
</style>