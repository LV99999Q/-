<template>
<div class="addPreJobEducation">
  <el-form
    label-position="right"
    label-width="100px"
    ref="examineRef"
    :model="examineData"
    :rules="examineRules">
    <el-form-item class="search">
      <el-input v-model="searchVal" placeholder="输入关键字搜索">
        <el-button icon="el-icon-search" slot="append">搜索</el-button>
      </el-input>
    </el-form-item>

    <el-form-item label="考核人员" prop="selected">
      <el-table
        stripe
        border
        max-height="250"
        header-row-class-name="customCla"
        @selection-change="selectionChange"
        :data="tableData">
        <el-table-column
          type="selection"
          width="50"
          align="center">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          align="center">
        </el-table-column>
        <el-table-column
          prop="province"
          label="性别"
          align="center">
        </el-table-column>
        <el-table-column
          prop="city"
          label="账号"
          align="center">
        </el-table-column>
        <el-table-column
          prop="address"
          label="联系方式"
          align="center">
        </el-table-column>
      </el-table>
    </el-form-item>

    <el-form-item label="考核时间" prop="time">
        <el-date-picker
            v-model="examineData.time"
            value-format="yyyy-MM-dd"
            type="date"
            placeholder="请选择进厂日期">
        </el-date-picker>
    </el-form-item>

    <el-form-item label="考核结果">
        <el-select v-model="examineData.result" placeholder="请选择考核结果">
            <el-option 
                v-for="item in examineDataResults"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
    </el-form-item>

    <el-form-item label="考核内容" prop="upLoad">
      <el-upload
        multiple
        action=""
        :limit="5"
        :http-request="uploadRequest"
        :on-remove="handleRemove"
        :file-list="fileList">
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
    </el-form-item>
    
    <div class="buttons">
        <el-form-item style="text-align: center">
            <el-button type="primary" @click="addSubmit">提交</el-button>
            <el-button @click="returnManage">返回</el-button>
        </el-form-item>
    </div>
  </el-form>
</div>
</template>

<script>
import { mapState } from "vuex";

  export default {
    data() {
      return {
        searchVal: '', // 表格搜索值
        tableData: [], // 表格列表
        fileList: [], // 上传列表
        examineData: {
          upLoad: [], // 上传返回值列表
          time: '',
          result: '未通过',
          selected: [], // 表格选中列表
        }, // 表单对象
        examineRules: {
          time: [
            { required: true, message: '请输入选择时间', trigger: 'blur' }
          ],
          upLoad: [
            { required: true, message: '请上传考核内容', trigger: 'blur' }
          ],
          selected: [
            { required: true, message: '请上传考核内容', trigger: 'change' }
          ],
        } // 验证规则
      }
    },
    computed: {
      ...mapState("publicData", {
        examineDataResults: (state) => state.examineDataResults,
      })
    },
    methods: {
      selectionChange(selected) {
        this.examineData.selected = selected;
      },
      // 新增
      addSubmit() {
        this.$refs.examineRef.validate((valid) => {
          if (valid) {
            this.$axios({
                method: "post",
                url: this.api.getSaveUser,
                data: this.examineData
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
        this.$emit('closeDialog');
      },
      // 上传照片方法
      uploadRequest(file) {
          let fileType = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'],
              formDataKey = 'multipartFiles';
          fileType.includes(file.file.type) ?
          this.AjaxUpLoader(file, formDataKey) :
          this.$message.error(`只能上传${fileType.map(e => e.split('/')[1]).join('、')}的格式文件`);
      },
      AjaxUpLoader(file, formDataKey) {
          const formData = new FormData(),
                  xhr = new XMLHttpRequest();

          formData.append(formDataKey, file.file);
          xhr.open("POST", file.action, true);
          xhr.send(formData);
          xhr.onload = () => {
              if(xhr.status === 200 || xhr.status === 304) {
                this.examineData.upLoad.push({
                  name: file.file.name,
                  url: JSON.parse(xhr.response)[0]
                });
              } else {
                  this.$message.error(`文件上传错误`);
              }
          }
      },
      handleRemove(file, fileList) {
        let fileNameList = fileList.map(e => {
          return e.name
        });
        this.examineData.upLoad.splice(this.examineData.upLoad.findIndex(e => {
          return !(fileNameList.includes(e.name))
        }),1);
      }
    }
  }
</script>

<style lang="less">
.addPreJobEducation{
  width: 100%;

  .search{
    width: 50%;
  }

  .buttons{
    width: 100%;
    text-align: center;
  }
}
</style>