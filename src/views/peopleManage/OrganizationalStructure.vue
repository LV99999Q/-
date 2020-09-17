<template>
  <div>
    <tabsModular
      :value="MIXIN_tabsData.value"
      :tabs="tabs"
      @tabChangeVal="$tabChangeVal" >
    </tabsModular>
    <div class="cut_line"></div>
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
        <el-table-column prop="userName" label="部门名称" align="center"></el-table-column>
        <el-table-column prop="acount" label="部门负责人" align="center"></el-table-column>
        <el-table-column label="操作" align="center"  width="190">
          <template slot-scope="scope">
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
    </el-dialog>
  </div>
</template>

<script>
import tabsModular from '@/components/Public/tabsModular'
import { export_json_to_excel } from "@/loader/Export2Excel"
import { myMixin } from "@/components/Public/mixin";
import pageModular from "@/components/Public/pageModular";
import functionalModular from '@/components/Public/functionalModular'

export default {
  mixins: [myMixin],
  components: {
    tabsModular,
    functionalModular,
    pageModular
  },
  data() {
    return {
      tabs: [
        {value: '部门管理', label: '部门管理'},
        {value: '班组管理', label: '班组管理'}
      ],
      hasFunctionalBtns: ["add", "del", "export"], // 拥有的功能模块
    }
  },
  methods: {
    // 新增
    add() {
      this.changeDialog('新增', true)
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
  }
}
</script>

<style lang="less" scope>

</style>