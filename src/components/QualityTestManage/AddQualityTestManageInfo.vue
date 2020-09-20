<template>
  <div class="AddQualityTestManageInfo">
    <el-form label-width="140px" :model="formModel" ref="formRef">
      <el-form-item label="强度报告编号">
        <el-input v-model="formModel.name"></el-input>
      </el-form-item>
      <el-form-item label="达到设计强度">
        <el-input v-model="formModel.region"></el-input>
      </el-form-item>
      <el-form-item label="型式检验报告编号">
        <el-input v-model="formModel.type"></el-input>
      </el-form-item>
      <div class="buttons">
        <el-button type="primary" @click="addSubmit">提交</el-button>
        <el-button @click="returnManage">返回</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formModel: {}
    }
  },
  props: {
    row: {
      type: Object,
      default: () => {return {};}
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {

    },
    init() {
      this.formModel = {};
    },
    addSubmit() {

    },
    returnManage() {
      this.init();
      this.$emit('closeDialog')
    }
  }
}
</script>

<style lang="less">
.AddQualityTestManageInfo{
  .buttons{
    width: 100%;
    text-align: center;
  }
}
</style>