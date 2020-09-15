<template>
  <div id="navbar">
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#283f65"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu :index="item.name" v-for="(item) in routerMetas" :key="item.name">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="childItem in item.list" :key="childItem.name" :index="childItem.name1">{{childItem.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
     ...mapGetters({:'routerMetas'})
  },
  created() {
    debugger
  }
}
</script>

<style lang="less" scope>

</style>