<template>
  <div class="home">
    <el-col :span="24" class="page_content">
      <el-col :span="3" class="leftNav">
        <!-- <navBar></navBar> -->
      </el-col>
      <el-col :span="21" class="view">
        <div class="view_box">
          <!-- <router-view></router-view> -->
        </div>
      </el-col>
    </el-col>
    <el-col :span="24" class="page_head">
      <Top></Top>
    </el-col>
  </div>
</template>

<script>
// import Top from "../components/Home/top";
// import Sidebar from "../components/Home/sidebar";

export default {
  name: "Home",
  components: {
    // navBar: resolve => require(["@/components/Home/navBar"], resolve),
    Top: resolve => require(["@/components/Home/top"], resolve)
  },
  data() {
    return {
    };
  }
};
</script>
<style>
/*鼠标样式*/
.cursor {
  cursor: pointer;
}
/*表格属性，显示的数值样式*/
.data_bulk {
  color: #5896e9;
  font-size: 24px;
}
/*分页按钮位置*/
.pagination {
  margin-top: 16px;
}
/*按钮颜色*/
.button_bg {
  background: #005bac !important;
}
/*搜索按钮颜色*/
.button_bg2 {
  background: #005bac !important;
}
/*已上传按钮颜色*/
.button_bg3 {
  background: #44a6ff !important;
}
.el-tabs__nav {
  z-index: 0 !important;
}
/*增删改查导出，按钮大小*/
.add,
.delet,
.edit,
.seek,
.copy {
  font-size: 16px !important;
}
.bottom {
  margin-top: 20px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: white;
  font-weight: 900;
  font-size: 24px;
}

.bottom > div {
  cursor: pointer;
  float: left;
  width: 50%;
  height: 100%;
}
/*表格内部插槽样式*/
.btnBox {
  display: flex;
  justify-content: space-around;
}
/*表格插槽增，改，查，功能样式*/
.btnBox > button {
  cursor: pointer;
  border: 0;
  border-radius: 5px;
  padding: 3px 10px;
  color: white;
}
/*插槽，改功能颜色*/
.scope_edit {
  background: #49993a;
}
/*插槽，删功能颜色*/
.scope_delet {
  background: #b2295a;
}
/*插槽，查功能颜色*/
.scope_seek {
  background: #547ecc;
}
/*插槽，禁用颜色*/
.scope_disable {
  background: #a4a19fb0;
}
/*其他功能*/
.scope_code {
  background: #005bac;
}
.el-menu {
  border-right: none !important;
}
</style>
<style lang="less" scoped>
.home {
  height: 100vh;
}
.page_head {
  position: fixed;
  top: 0;
}

.leftNav {
  height: 100vh;
  background: #283f65;
}

.view {
  padding: 14px;
}

.view_box {
  margin-top: 55px;
  position: relative;
  height: 880px;
  overflow-y: auto;
}
</style>