<template>
<div class="metroLineManageInfo">
  <el-form
    label-width="100px"
    ref="metroLineRef"
    :model="metroLineData"
    :rules="metroLineRules">

    <el-form-item label="地铁线名称" prop="subwayName">
      <el-input v-model="metroLineData.subwayName" placeholder="XX市X号地铁线"></el-input>
    </el-form-item>

    <el-form-item label="地铁线简称" prop="code">
      <el-input v-model="metroLineData.code" placeholder="X号线"></el-input>
    </el-form-item>

    <el-form-item label="尺寸(M)" prop="sizes">
      <el-select
        v-model="metroLineData.sizes"
        multiple
        filterable
        allow-create
        default-first-option
        placeholder="请选择尺寸">
          <el-option v-for="item in option.sizes" :key="item" :label="item" :value="item"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="配筋" prop="reins">
      <el-select
        v-model="metroLineData.reins"
        multiple
        filterable
        allow-create
        default-first-option
        placeholder="请选择配筋">
          <el-option v-for="item in option.reins" :key="item" :label="item" :value="item"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="进出洞环" prop="turns">
      <el-select
        v-model="metroLineData.turns"
        multiple
        filterable
        allow-create
        default-first-option
        placeholder="请选择进出洞环">
          <el-option v-for="item in option.turns" :key="item" :label="item" :value="item"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="注浆孔" prop="holes">
      <el-select
        v-model="metroLineData.holes"
        multiple
        filterable
        allow-create
        default-first-option
        placeholder="请选择注浆孔">
          <el-option v-for="item in option.holes" :key="item" :label="item" :value="item"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="块号" prop="segmentTypes">
      <el-select
        v-model="metroLineData.segmentTypes"
        multiple
        filterable
        allow-create
        default-first-option
        placeholder="请选择块号">
          <el-option v-for="item in option.segmentTypes" :key="item" :label="item" :value="item"></el-option>
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
export default {
  data() {
    return {
      option: {
        sizes: ['1.5', '1.8'], // 尺寸
        reins: ['A', 'B', 'C', 'D', 'E'], // 配筋
        turns: ['B', 'Y', 'Z'], // 进出洞环
        holes: ['标准', '加注'], // 注浆孔
        segmentTypes: ['B1', 'B2', 'B3', 'B4', 'L1', 'L2', 'F'], // 块号
      },
      metroLineData: {
        subwayName: '', // 地铁线名称
        code: '', // 地铁线简称
        sizes: [], // 尺寸
        reins: [], // 配筋
        turns: [], // 进出洞环
        holes: [], // 注浆孔
        segmentTypes: [], // 块号
      }, // 表单对象
      metroLineRules: {
        subwayName: [
          { required: true, message: '请输入选择地铁线', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入标段名称', trigger: 'blur' }
        ],
        sizes: [
          { required: true, message: '请输入需求负责人', trigger: 'change' }
        ],
        reins: [
          { required: true, message: '请输入盾构单位', trigger: 'change' }
        ],
        turns: [
          { required: true, message: '请输入站点', trigger: 'change' }
        ],
        holes: [
          { required: true, message: '请输入盾构单位', trigger: 'change' }
        ],
        segmentTypes: [
          { required: true, message: '请输入站点', trigger: 'change' }
        ],
      } // 验证规则
    }
  },
  props: {
    row: {
      type: Object,
      default: () => {return {};  }
    }
  },
  methods: {
    // 新增
    addSubmit() {
      this.$refs.metroLineRef.validate((valid) => {
        if (valid) {
          this.$axios({
              method: "post",
              url: this.api.getSaveUser,
              data: this.metroLineData
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
      this.$refs.metroLineRef.resetFields();
      this.$emit('closeDialog');
    },
  }
}
</script>

<style lang="less" scope>
.metroLineManageInfo{
  width: 100%;

  .buttons{
    width: 100%;
    text-align: center;
  }
}
</style>