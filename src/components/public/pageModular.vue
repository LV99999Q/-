<template>
  <div id="tableModular">
    <div>
      <el-table
        stripe
        border
        max-height="750"
        header-row-class-name="customCla"
        :data="tableData.allList"
        @selection-change="selectionChange">
        <slot></slot>
      </el-table>
    </div>
    <div class="footer">
      <el-pagination
        background
        @size-change="sizeChange"
        @current-change="currentPageChange"
        :current-page="pageData.currentPage"
        :page-sizes="pageData.sizes"
        :page-size="pageData.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageData.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Object,
      required: true,
      default: () => {
        return {
          allList: [],
          selectedList: []
        };
      },
    },
    pageData: {
      type: Object,
      required: true,
      default: () => {
        return {
          currentPage: 1,
          size: 10,
          total: 0,
          sizes: [10, 20, 30, 40],
        };
      },
    }, // 页数对象
  },
  methods: {
    currentPageChange(val) {
      this.$emit("currentPageChange", val);
    },
    sizeChange(val) {
      this.$emit("sizeChange", val);
    },
    selectionChange(selection){
      this.$emit("selectionChange", selection);
    }
  },
};
</script>

<style lang="less" scope>
#tableModular {
  width: 100%;
  margin-top: 15px;

  .footer {
    width: 100%;
    margin-top: 10px;
    text-align: right;
  }
}
</style>