<template>
  <div class="preJobEducation">
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
        <el-table-column prop="userName" label="日期" align="center"></el-table-column>
        <el-table-column prop="acount" label="员工姓名" align="center"></el-table-column>
        <el-table-column prop="sex" label="所属部门" align="center"></el-table-column>
        <el-table-column prop="idCard" label="班组名称" align="center"></el-table-column>
        <el-table-column prop="phone" label="考核内容" align="center"></el-table-column>
        <el-table-column prop="phone" label="考核结果" align="center"></el-table-column>
        <el-table-column prop="deptName" label="经办人" align="center"></el-table-column>
        <el-table-column label="操作" align="center"  width="190">
          <template slot-scope="scope">
            <el-button type="text" icon="el-icon-edit" @click="changeDialog('修改', true, scope.row)">修改</el-button>
            <el-button type="text" icon="el-icon-reading" @click="changeDialog('查看', true, scope.row)">查看</el-button>
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
      <AddPreJobEducation v-if="MIXIN_dialogData.title == '新增岗前教育存档'" @closeDialog="changeDialog('', false, null)"></AddPreJobEducation>
    </el-dialog>
  </div>
</template>

<script>
import { myMixin } from "@/components/Public/mixin";
import functionalModular from "@/components/Public/functionalModular";
import pageModular from "@/components/Public/pageModular";
import AddPreJobEducation from "@/components/PreJobEducation/AddPreJobEducation";

export default {
  mixins: [myMixin],
  components: {
    functionalModular,
    pageModular,
    AddPreJobEducation
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
      this.changeDialog('新增岗前教育存档', true)
    },
    changeDialog(title = '', isShow = false, data = null) {
      Object.assign(this.MIXIN_dialogData, { title, isShow, data });
    },
  }
}
</script>

<style lang="less" scope>
.preJobEducation{
  
}
</style>