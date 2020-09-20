<template>
<div class="mouldInfoManageInfo">
  <el-form
    ref="mouldInfoManageInfoRef"
    :model="mouldInfoManageInfoModel"
    :inline="true"
    :rules="mouldInfoManageInfoRules"
    label-width="100px">
    <el-form-item label="模具编号">
      <el-input v-model="mouldInfoManageInfoModel.mouldCode"></el-input>
    </el-form-item>
    <el-form-item label="模具SN">
      <el-input v-model="mouldInfoManageInfoModel.mouldSn"></el-input>
    </el-form-item>
    <el-form-item label="地铁线">
      <el-select v-model="mouldInfoManageInfoModel.subwayId" @change="changeMetroLineType" placeholder="请选择">
        <el-option
          v-for="item in metroLine"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="状态">
      <el-select v-model="mouldInfoManageInfoModel.state" placeholder="请选择">
        <el-option
          v-for="item in mouldState"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="模具类型">
      <el-select v-model="mouldInfoManageInfoModel.mouldType" placeholder="请选择">
        <el-option
          v-for="item in metroLineType"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="模具尺寸">
      <el-select v-model="mouldInfoManageInfoModel.mouldSize" placeholder="请选择">
        <el-option
          v-for="item in mouldSize"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="进厂时间">
      <el-date-picker
        v-model="mouldInfoManageInfoModel.enterDate"
        type="date"
        value-format="yyyy-MM-dd"
        placeholder="选择日期">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="生产厂家">
      <el-input v-model="mouldInfoManageInfoModel.manufacturer"></el-input>
    </el-form-item>
    <el-form-item label="生产时间">
      <el-date-picker
        v-model="mouldInfoManageInfoModel.manufacturerDate"
        type="date"
        value-format="yyyy-MM-dd"
        placeholder="选择日期">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="最大循环次数">
      <el-select v-model="mouldInfoManageInfoModel.totalLoops" placeholder="请选择">
        <el-option
          v-for="item in mouldMaxLoop"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
    <div class="buttons">
      <el-button type="primary" @click="addSubmit">{{metroLineType}}</el-button>
      <el-button @click="returnManage">返回</el-button>
    </div>
  </el-form>
</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      mouldInfoManageInfoModel: {},
      mouldInfoManageInfoRules: {},
    };
  },
  created() {
    this.init()
  },
  props: {
    row: {
      type: Object,
      default: () => {return {};}
    }
  },
  computed: {
    ...mapState("publicData", {
      mouldSize: (state) => state.mouldSizes,
      metroLine: (state) => state.metroLines,
      metroLineType: (state) => state.metroLineTypes,
      mouldState: (state) => state.mouldStates,
      mouldManufacturer: (state) => state.mouldManufacturers,
      mouldMaxLoop: (state) => state.mouldMaxLoops
    })
  },
  methods: {
    ...mapActions('publicData', ['setMetroLineType']),
    init() {
      this.mouldInfoManageInfoModel = Object.assign({
        mouldCode: '',
        mouldSn: '',
        subwayId: '',
        state: '',
        mouldType: '',
        mouldSize: '',
        enterDate: '',
        manufacturer: '',
        manufacturerDate: '',
        totalLoops: ''
      }, this.row)
    },
    addSubmit() {

    },
    returnManage() {
      this.$emit('closeDialog');
    },
    changeMetroLineType(val) {
      this.setMetroLineType()
    }
  }
}
</script>

<style lang="less">
.mouldInfoManageInfo{
  width: 100%;

  .buttons{
    width: 100%;
    text-align: center;
  }
}
</style>