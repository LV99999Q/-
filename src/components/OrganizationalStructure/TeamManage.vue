<template>
  <div class="teamManage">
    <el-form label-width="100px" :model="teamManageModel">
      <el-form-item label="所属部门">
        <el-select v-model="teamManageModel.deptId" filterable placeholder="请选择">
          <el-option
            v-for="item in depts"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="班组名称">
        <el-input v-model="teamManageModel.teamName"></el-input>
      </el-form-item>
      <el-form-item label="班组编号">
        <el-input v-model="teamManageModel.teamId"></el-input>
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
      teamManageModel: null
    }
  },
  created() {
    this.init()
  },
  destroyed() {
      Object.assign(this.teamManageModel, {});
  },
  props: {
    row: {
      type: Object,
      default: () => {return {};}
    }
  },
  computed: {
    ...mapState("publicData", {
      depts: (state) => state.depts,
    })
  },

  methods: {
    init() {
      this.teamManageModel = Object.assign({teamName: '', teamId: '', deptId: ''}, this.row)
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
.teamManage{
  width: 100%;

  .buttons{
    width: 100%;
    text-align: center;
  }
}
</style>