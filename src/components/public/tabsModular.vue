<template>
  <div class="tabsModular">
    <div v-for="item in tabs" :key="item.value" class="tab cursor" :class="{'tabSelected': selectedTab == item.value}" @click="tabClick(item.value)">
      {{item.label}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted(){
    this.tabClick((this.tabs.length && this.tabs[0].value) || '')
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    tabs: {
      type: Array,
      default: () => {return [];}
    }
  },
  computed: {
    selectedTab: {
      get() {
        return this.value;
      },
      set(newName) {
        this.$emit('tabChangeVal', newName)
      }
    },
  },
  methods: {
    tabClick(newName) {
        this.selectedTab = newName;
    }
  }
}
</script>

<style lang="less" scope>
.tabsModular{
  width: 100%;
  height: 53px;
  border-bottom: 3px solid #e4e7ed;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;

  .tab{
    height: 53px;
    padding: 0 15px;
    color: #2a4571;
    border-bottom: 3px solid #e4e7ed;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    box-sizing: border-box;
    transition: all .5s;
  }

  .tabSelected{
    color: #409eff;
    background: #fff;
    border-bottom: 3px solid #409eff;
  }
}
</style>