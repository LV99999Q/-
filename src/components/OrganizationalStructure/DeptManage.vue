<template>
  <div class="deptManage">
    <el-form label-width="100px" :model="deptManageModel">
      <el-form-item label="部门名称">
        <el-input v-model="deptManageModel.deptName"></el-input>
      </el-form-item>
      <el-form-item label="部门负责人">
        <el-select v-model="deptManageModel.deptManager" filterable placeholder="请选择">
          <el-option
            v-for="item in deptManagers"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <div class="buttons">
        <el-button type="primary" @click="addSubmit">提交</el-button>
        <el-button @click="returnManage">返回</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      deptManageModel: null
    }
  },
  created() {
    this.init()
  },
  destroyed() {
      Object.assign(this.deptManageModel, {});
  },
  props: {
    row: {
      type: Object,
      default: () => {return {};}
    }
  },
  computed: {
    ...mapState("publicData", {
      deptManagers: (state) => state.deptManagers,
    })
  },

  methods: {
    init() {
      this.deptManageModel = Object.assign({deptName: '', deptManager: ''}, this.row)
    },
    returnManage() {
      this.$emit('closeDialog');
    },
    addSubmit() {

    }
  }
}
</script>

<style lang="less">
.deptManage{
  width: 100%;

  .buttons{
    width: 100%;
    text-align: center;
  }
}
</style>