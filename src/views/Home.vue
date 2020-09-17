<template>
  <div class="home">
      <div class="homeHead">
        <Top></Top>
      </div>
      <div class="homeContent">
        <el-col :span="3" class="leftNav">
          <navBar></navBar>
        </el-col>
        <el-col :span="21" class="view">
          <div>
            <router-view></router-view>
          </div>
        </el-col>
      </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
    navBar: resolve => require(["@/components/Home/navBar"], resolve),
    Top: resolve => require(["@/components/Home/top"], resolve)
  },
  data() {
    return {
    };
  }
};
</script>

<style>
.cut_line{
  width: 100%;
  height: 15px;
}
/*鼠标样式*/
.cursor {
  cursor: pointer;
}
/*表格属性，显示的数值样式*/
.data_bulk {
  color: #5896e9;
  font-size: 24px;
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

.customCla{
  color: #fefefe;
  font-size: 14px;
  font-weight: 700;
}
.customCla > th {
  background: #547ecc!important;
}
/* .dialogHeight{
   width: 100%;
   height: 700px;
   overflow: hidden;
   overflow-y: scroll;
} */
</style>

<style lang="less" scoped>
.home {
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .homeHead{
    width: 100%;
    height: 56px;
  }

  .homeContent{
    width: 100%;
    height: calc(100% - 56px);

    .leftNav {
      width: 240px;
      height: 100%;
      background: #283f65;
    }

    .view {
      width: calc(100% - 240px);
      height: 100%;
      padding: 15px;
      box-sizing: border-box;
      overflow: hidden;

      > div {
        width: 100%;
        height: 100%;
        padding: 15px;
        box-sizing: border-box;
        background: #ffffff;
      }
    }
  }
}
</style>