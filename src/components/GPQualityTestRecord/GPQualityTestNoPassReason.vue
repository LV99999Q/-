<template>
  <div class="GPQualityTestNoPassReason">
    <el-form label-width="100px" :model="formModel">
      <el-form-item label="质检结果">
        <el-input v-model="formModel.name" readonly></el-input>
      </el-form-item>
      <el-form-item label="不合格原因">
        <el-input v-model="formModel.region" readonly></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="formModel.type" readonly></el-input>
      </el-form-item>
      <el-form-item label="图片">
        <img :src="formModel.img" width="200" height="200">
      </el-form-item>
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
  created() {
    this.getFormData()
  },
  props: {
    row: {
      type: Object,
      default: () => {return {};}
    }
  },
  methods: {
    getFormData() {

    }
  }
}
</script>

<style lang="less">
.GPQualityTestNoPassReason{

}
</style>