<template>
  <div class="metroLineManage">
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
        <el-table-column type="index" width="50" label="序号"></el-table-column>
        <el-table-column prop="userName" label="地铁线名称" align="center"></el-table-column>
        <el-table-column prop="acount" label="尺寸" align="center"></el-table-column>
        <el-table-column prop="sex" label="配筋" align="center"></el-table-column>
        <el-table-column prop="idCard" label="进出洞环" align="center"></el-table-column>
        <el-table-column prop="phone" label="注浆孔" align="center"></el-table-column>
        <el-table-column prop="deptName" label="块号" align="center"></el-table-column>
        <el-table-column prop="jobStatusStr" label="启用状态" align="center"></el-table-column>
        <el-table-column label="操作" align="center"  width="190">
          <template slot-scope="scope">
            <el-button type="text" @click="changeMetroLineType(scope.row)">启用</el-button>
            <el-button type="text" icon="el-icon-edit" @click="changeDialog('修改', true, scope.row)">修改</el-button>
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
    width="50%">
      <MetroLineManageInfo v-if="MIXIN_dialogData.isShow" :row="MIXIN_dialogData.data"></MetroLineManageInfo>
    </el-dialog>
  </div>
</template>

<script>
import { myMixin } from "@/components/Public/mixin";
import functionalModular from "@/components/Public/functionalModular";
import pageModular from "@/components/Public/pageModular";
import MetroLineManageInfo from "@/components/MetroLineManage/MetroLineManageInfo";

export default {
  mixins: [myMixin],
  components: {
    functionalModular,
    pageModular,
    MetroLineManageInfo
  },
  data() {
    return {
      hasFunctionalBtns: ["add"], // 拥有的功能模块
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
      Object.assign(this.MIXIN_dialogData, { title, isShow, data });
    },
    // 删除
    changeMetroLineType() {
      this.$confirm('此操作将改变启用状态, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '成功!'
        });
      });
    },
  }
};
</script>

<style lang="less">
.metroLineManage{
  
}
</style>