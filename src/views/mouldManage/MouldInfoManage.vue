<template>
  <div class="mouldInfoManage">
    <searchModular
      ref="searchModular"
      :searchSelect="searchSelect"
      :searchInput="searchInput"
      @resetOption="$resetOption"
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
            <el-button type="text" icon="el-icon-postcard" @click="print(scope.row)">打印</el-button>
            <el-button type="text" icon="el-icon-reading" @click="makeCard(scope.row)">写卡</el-button>
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
        <MouldInfoManageInfo
          v-if="MIXIN_dialogData.isShow"
          :row="MIXIN_dialogData.data"
          @closeDialog="changeDialog('', false, null)">
        </MouldInfoManageInfo>
    </el-dialog>
  </div>
</template>

<script>
import { myMixin } from "@/components/Public/mixin";
import { mapState, mapActions } from "vuex";
import searchModular from "@/components/Public/searchModular";
import functionalModular from "@/components/Public/functionalModular";
import pageModular from "@/components/Public/pageModular";
import MouldInfoManageInfo from "@/components/MouldInfoManage/MouldInfoManageInfo";

export default {
  mixins: [myMixin],
  components: {
    searchModular,
    functionalModular,
    pageModular,
    MouldInfoManageInfo
  },
  computed: {
    ...mapState("publicData", {
      metroLine: (state) => state.metroLines,
      metroLineType: (state) => state.metroLineTypes,
      mouldState: (state) => state.mouldStates,
      mouldManufacturer: (state) => state.mouldManufacturers,
      mouldMaxLoop: (state) => state.mouldMaxLoops
    })
  },
  mounted() {
    this.searchSelect.forEach((e) => {
      e.selectOptions = this[e.value];
    });
  },
  data() {
    return {
      searchSelect: [
        { value: "metroLine", label: "地铁线", selectOptions: [], pla: "请选择地铁线", resetOption: 'setMetroLineType' },
        { value: "metroLineType", label: "类型", selectOptions: [], pla: "请选择类型" },
        { value: "mouldState", label: "状态", selectOptions: [], pla: "请选择状态" },
        { value: "mouldManufacturer", label: "生产厂家", selectOptions: [], pla: "请选择生产厂家" },
        { value: "mouldMaxLoop", label: "最大循环次数", selectOptions: [], pla: "请选择最大循环次数" }
      ], // 下拉框列表
      searchInput: [
        { value: "inputSearch", label: "模具编号", pla: "模具编号" }
      ], // 输入框列表
      hasFunctionalBtns: ["add", "del"], // 拥有的功能模块
    };
  },
  methods: {
    ...mapActions('publicData', ['setMetroLineType']),
    // 获取表格数据
    getTableData() {

    },
    // 新增
    add() {
      this.changeDialog('新增模具', true)
    },
    changeDialog(title = '', isShow = false, data = {}) {
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
    // 打印
    print(row) {

    },
    // 写卡
    makeCard(row) {

    }
  }
}
</script>

<style lang="less">
.mouldInfoManage{
  
}
</style>