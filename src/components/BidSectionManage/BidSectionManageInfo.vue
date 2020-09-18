<template>
<div class="bidSectionManageInfo">
  <el-form
    label-width="100px"
    ref="bidSectionRef"
    :model="bidSectionData"
    :rules="bidSectionRules">

    <el-form-item label="地铁线" prop="subwayId">
      <el-select v-model="bidSectionData.subwayId" placeholder="请选择地铁线">
        <el-option 
          v-for="item in metroLines"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="标段名称" prop="tenderName">
      <el-input v-model="bidSectionData.tenderName" placeholder="请输入标段名称"></el-input>
    </el-form-item>

    <el-form-item label="需求负责人" prop="fzr">
      <el-input v-model="bidSectionData.fzr" placeholder="请输入需求负责人"></el-input>
    </el-form-item>

    <el-form-item label="盾构单位" prop="unit">
      <el-input v-model="bidSectionData.unit" placeholder="请输入盾构单位"></el-input>
    </el-form-item>

    <el-form-item label="站点" prop="station">
      <el-input v-model="bidSectionData.station" placeholder="请输入站点"></el-input>
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
        bidSectionData: {
          subwayId: '', // 地铁线
          tenderName: '', // 标段名称
          fzr: '', // 负责人
          unit: '', // 盾构单位
          station: '', // 站点
        }, // 表单对象
        bidSectionRules: {
          subwayId: [
            { required: true, message: '请输入选择地铁线', trigger: 'change' }
          ],
          tenderName: [
            { required: true, message: '请输入标段名称', trigger: 'blur' }
          ],
          fzr: [
            { required: true, message: '请输入需求负责人', trigger: 'blur' }
          ],
          unit: [
            { required: true, message: '请输入盾构单位', trigger: 'blur' }
          ],
          station: [
            { required: true, message: '请输入站点', trigger: 'blur' }
          ],
        } // 验证规则
      }
    },
    computed: {
      ...mapState("publicData", {
        metroLines: (state) => state.metroLines,
      })
    },
    methods: {
      // 新增
      addSubmit() {
        this.$refs.bidSectionRef.validate((valid) => {
          if (valid) {
            this.$axios({
                method: "post",
                url: this.api.getSaveUser,
                data: this.bidSectionData
            }).then(res => {
                if (res.data.statusCode == 200) {
                    this.$message({
                        message: "添加成功",
                        type: "success"
                    });
                } else if (res.data.statusCode == 500) {
                    this.$message({
                        message: res.data.message,
                        type: "info"
                    });
                }
            }).catch(err => {
                this.$message.error(err);
            }).finally(() => {
                this.returnManage();
            })
          }
        });
      },
      // 关闭弹框
      returnManage() {
        this.$refs.bidSectionRef.resetFields();
        this.$emit('closeDialog');
      },
    }
  }
</script>

<style lang="less" scope>
.bidSectionManageInfo{
  width: 100%;

  .buttons{
    width: 100%;
    text-align: center;
  }
}
</style>