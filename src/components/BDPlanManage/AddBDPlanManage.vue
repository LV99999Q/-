<template>
  <div class="AddBDPlanManage">
    <el-form :inline="true" :model="formModel" :rules="formRules">
      <el-form-item label="地铁线" >
        <el-select v-model="formModel.region" @change="metroLineChange">
          <el-option
            v-for="selectOp in metroLine"
            :key="selectOp.value"
            :label="selectOp.label"
            :value="selectOp.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标段">
        <el-select v-model="formModel.region">
          <el-option
            v-for="selectOp in metroLine"
            :key="selectOp.value"
            :label="selectOp.label"
            :value="selectOp.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标段需求月份">
        <el-date-picker
          v-model="formModel.time"
          type="month"
          placeholder="请选择标段需求月份"
          :editable="false"
          value-format="yyyy-MM"
          format="yyyy-MM">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addTableData">添加管片</el-button>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>

    <el-table
      header-row-class-name="customCla"
      border
      :data="tableData">
      <el-table-column label="月份" align="center"  width="260">
        <template slot-scope="scope">
          <el-date-picker
            v-model="scope.row.month"
            type="month"
            placeholder="请选择标段需求月份"
            :editable="false"
            value-format="yyyy-MM"
            format="yyyy-MM">
          </el-date-picker>
        </template>
      </el-table-column>
      <el-table-column label="环编号" align="center">
        <template slot-scope="scope">
          <el-select v-model="scope.row.region">
            <el-option
              v-for="selectOp in mouldSize"
              :key="selectOp.value"
              :label="selectOp.label"
              :value="selectOp.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="尺寸" align="center">
        <template slot-scope="scope">
          <el-select v-model="scope.row.region">
            <el-option
              v-for="selectOp in mouldSize"
              :key="selectOp.value"
              :label="selectOp.label"
              :value="selectOp.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="配筋" align="center">
        <template slot-scope="scope">
          <el-select v-model="scope.row.region">
            <el-option
              v-for="selectOp in mouldSize"
              :key="selectOp.value"
              :label="selectOp.label"
              :value="selectOp.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="转向" align="center">
        <template slot-scope="scope">
          <el-select v-model="scope.row.region">
            <el-option
              v-for="selectOp in mouldSize"
              :key="selectOp.value"
              :label="selectOp.label"
              :value="selectOp.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="注浆孔" align="center">
        <template slot-scope="scope">
          <el-select v-model="scope.row.region">
            <el-option
              v-for="selectOp in mouldSize"
              :key="selectOp.value"
              :label="selectOp.label"
              :value="selectOp.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column>
      <el-table-column label="需求数量" align="center" width="220">
        <template slot-scope="scope">
           <el-input-number v-model="scope.row.num" :min="0"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="100">
        <template slot-scope="scope">
          <el-button type="text" icon="el-icon-delete" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      formModel: {},
      formRules: {},
      tableData: []
    }
  },
  created() {
    this.setMetroLines()
  },
  computed: {
    ...mapState("publicData", {
      metroLineBD: (state) => state.metroLineBDS,
      metroLine: (state) => state.metroLines,
      mouldSize: (state) => state.mouldSizes,
    })
  },
  methods: {
    ...mapActions('publicData', ['setMetroLineBD', 'setMetroLines']),
    addTableData() {
      this.tableData.push({
        month: '',
        region: '',
        num: 0
      })
    },
    del(row) {

    },
    save() {
      console.log(this.tableData, 123)
    },
    metroLineChange() {
      this.setMetroLineBD()
    }
  }
}
</script>

<style lang="less">
.AddBDPlanManage{
  
}
</style>
