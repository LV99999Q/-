<template>
  <div class="CRCRecordEdit">
    <el-form :model="formModel" ref="formRef" label-width="120px">
      <el-form-item label="水养池名称">
        <el-input type="password" v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="水养池编码">
        <el-input type="password" v-model="ruleForm.bm"></el-input>
      </el-form-item>

      <p class="title">录入数据</p>
      <el-form-item label="PH值">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item label="温度">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item>

      <p class="title">传感器数据</p>
      <el-form-item label="PH值">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item label="温度">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item>
      
      <el-form-item label="开启传感器PH值">
        <el-switch v-model="ruleForm.openPH"></el-switch>
      </el-form-item>
      <el-form-item label="开启传感器温度">
        <el-switch v-model="ruleForm.openWD"></el-switch>
      </el-form-item>
      <div class="buttons">
        <el-button type="primary" @click="submitForm">确定</el-button>
        <el-button @click="resetForm">取消</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {}, // 表单数据
    }
  },
  created() {
    this.getFormData()
  },
  props: {
    row: {
      type: Object,
      default: () => {return {}}
    }
  },
  methods: {
    init() {
      this.ruleForm = {};
    },
    getFormData() {

    },
    submitForm() {

    },
    resetForm() {
      this.$emit('closeDialog');
    }
  }
}
</script>

<style lang="less">
.CRCRecordEdit{
  width: 100%;

  .title{
    font-size: 18px;
  }

  .buttons{
    width: 100%;
    text-align: center;
  }
}
</style>