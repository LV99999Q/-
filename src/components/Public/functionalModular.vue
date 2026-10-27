<template>
  <div id="functionalModular">
    <div class="leftBtn">
      <div v-for="item in functionalBtns" :key="item.func" @click="toEmit(item.func)" class="myBtn">
        <img :src="item.src" width="26" height="26" />
        {{item.name}}
      </div>
    </div>
    <div class="rightBtn">
      <slot name="rightBtn"></slot>
    </div>
  </div>
</template>

<script>
import btnAdd from "@/assets/btn-add02.png";
import btnDel from "@/assets/btn-del.png";
import btnExcel from "@/assets/btn-excel.png";
export default {
  name: "functionalModular",
  data() {
    return {
      btns: [
        { name: "新增", src: btnAdd, func: "add" },
        { name: "新增班组负责人", src: btnAdd, func: "addTeamManager" },
        { name: "新增班组员工", src: btnAdd, func: "addTeamPeople" },
        { name: "删除", src: btnDel, func: "del" },
        { name: "导出EXCEL", src: btnExcel, func: "export" },
      ],
    };
  },
  props: {
    hasFunctionalBtns: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  computed: {
    functionalBtns() {
      return this.btns.filter((e) => {
        return this.hasFunctionalBtns.includes(e.func);
      });
    },
  },
  methods: {
    toEmit(func) {
      this.$emit("onBtnClick", func);
    },
  },
};
</script>

<style lang="less" scope>
#functionalModular {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    flex-flow: row nowrap;
  }

  .myBtn {
    height: 40px;
    font-size: 16px;
    color: #fff;
    background: #005bac;
    border: 1px solid #2e6da4;
    border-radius: 3px;
    padding: 6px 12px;
    margin-right: 15px;
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;

    > img {
      margin-right: 12px;
    }
  }
}
</style>