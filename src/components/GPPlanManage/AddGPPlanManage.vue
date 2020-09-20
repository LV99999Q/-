<template>
  <div class="AddGJLPlanManage">
    <el-form :inline="true" :model="formModel" :rules="formRules">
      <el-form-item label="地铁线" >
        <el-select v-model="formModel.region">
          <el-option v-for="selectOp in metroLine" :key="selectOp.value" :label="selectOp.label" :value="selectOp.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="尺寸">
         <el-select v-model="formModel.region">
          <el-option v-for="selectOp in mouldSize" :key="selectOp.value" :label="selectOp.label" :value="selectOp.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="生产班组">
        <el-select v-model="formModel.region">
          <el-option v-for="selectOp in productionTeam" :key="selectOp.value" :label="selectOp.label" :value="selectOp.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="计划时间">
        <el-date-picker
          v-model="formModel.time"
          type="daterange"
          range-separator="至"
          :editable="false"
          value-format="yyyy-MM-dd"
          start-placeholder="计划开始时间"
          end-placeholder="计划结束时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addTableData">添加计划</el-button>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>

    <el-table
      header-row-class-name="customCla"
      show-summary
      :summary-method="getSummaries"
      :data="tableData">
      <el-table-column
        :isHJ="false"
        prop="date"
        label="日期"
        align="center"
        width="180">
      </el-table-column>
      <el-table-column
        v-for="item in tableConfig"
        align="center"
        :key="item.label"
        :label="item.label">
          <el-table-column
          align="center" 
          :key="item1.label"
          :label="item1.label"
          v-for="item1 in item.children">
            <el-table-column
            align="center"
            v-for="item2 in item1.children"
            :key="item2.label"
            :label="item2.label">
              <!-- <template slot-scope="scope">
                <el-input-number v-model="scope.row[item2.label]" controls-position="right" :min="0"></el-input-number>
              </template> -->
            </el-table-column>
          </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      formModel: {},
      formRules: {},
      tableData: [],
      tableConfig: []
    }
  },
  computed: {
    ...mapState("publicData", {
      productionTeam: (state) => state.productionTeams,
      mouldSize: (state) => state.mouldSizes,
      metroLine: (state) => state.metroLines,
    })
  },
  methods: {
    addTableData() {
      this.tableData.push({
        time: '',
        JDH_B_KEY: 1,
      })
    },
    del(row) {

    },
    save() {
      console.log(this.tableData, 123)
    },
    // 合并自定义方法
    getSummaries({columns, data}) {
      const sums = [],
            needMerges = [
              {key: 'merge', label: '合计'}
            ];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '合计';
          return;
        }
        const values = data.map(item => {
          let OBJ = needMerges.find(e => {
            return e.label == column.label
          });
          if(OBJ) {
            return Number(item[OBJ.key])
          } else {
            return NaN
          }
        });
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
        }
      });
      return sums;
    }
  }
}
</script>

<style lang="less">
.AddGJLPlanManage{
  
}
</style>
