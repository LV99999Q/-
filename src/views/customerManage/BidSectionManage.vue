<template>
  <div class="bidSectionManage">
    <searchModular
      ref="searchModular"
      :searchInput="searchInput"
      :searchSelect="searchSelect"
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
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column type="index" width="50" label="序号"></el-table-column>
        <el-table-column prop="userName" label="地铁线" align="center"></el-table-column>
        <el-table-column prop="acount" label="标段名称" align="center"></el-table-column>
        <el-table-column prop="sex" label="盾构单位" align="center"></el-table-column>
        <el-table-column prop="idCard" label="站点" align="center"></el-table-column>
        <el-table-column prop="phone" label="负责人" align="center"></el-table-column>
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
      <BidSectionManageInfo
        @closeDialog="changeDialog('', false, null)">
      </BidSectionManageInfo>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { myMixin } from "@/components/Public/mixin";
import searchModular from "@/components/Public/searchModular";
import functionalModular from "@/components/Public/functionalModular";
import pageModular from "@/components/Public/pageModular";
import BidSectionManageInfo from '@/components/BidSectionManage/BidSectionManageInfo'

export default {
  mixins: [myMixin],
  components: {
    searchModular,
    functionalModular,
    pageModular,
    BidSectionManageInfo
  },
  computed: {
    ...mapState("publicData", {
      metroLines: (state) => state.metroLines,
    })
  },

  mounted() {
    this.$refs.searchModular.search();
  },
  data() {
    return {
      searchSelect: [
        { value: "metroLines", label: "地铁线", selectOptions: [], pla: "请选择地铁线" },
      ], // 下拉框列表
      searchInput: [
        { value: "inputSearch", label: "搜索值", pla: "标段名称" }
      ], // 输入框列表
      hasFunctionalBtns: ["add", "del"], // 拥有的功能模块
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
  }
};
</script>

<style lang="less">
.bidSectionManage{
  
}
</style>