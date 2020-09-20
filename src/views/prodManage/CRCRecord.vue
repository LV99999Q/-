<template>
  <div class="CRCRecord">
    <div v-for="item in list" :key="item.label" class="item">
      <div class="title">
        {{item.label}}
      </div>
      <div class="imgs">
        <p>{{item.value}}</p>
        <img src="../../assets/sfz-z.png" width="100" height="100" @click="changeDialog('详情', true, item)">
      </div>
      <div class="detail">
        <div>
          <span>实时温度: </span>
          <span> {{item.temperature}}℃</span>
        </div>
        <div>
          <span>PH值: </span>
          <span> {{item.PHVal}}℃</span>
        </div>
        <div>
          <span>实时库存: </span>
          <span> {{item.stock}}块</span>
        </div>
      </div>
      <div class="bottomBtns">
        <div @click="changeDialog('修改水养池', true, item)">修改</div>
        <div @click="del(item)">删除</div>
      </div>
    </div>
    <div class="item add" @click="changeDialog('新增水养池', true)">
      <i class="el-icon-circle-plus-outline"></i>
    </div>
    <el-dialog
      :title="MIXIN_dialogData.title"
      :visible.sync="MIXIN_dialogData.isShow"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :destroy-on-close="true"
      top="6vh"
      :width="MIXIN_dialogData.title == '详情' ? '80%' : '30%'">
        <CRCRecordEdit
          v-if="MIXIN_dialogData.isShow && (MIXIN_dialogData.title == '修改水养池' || MIXIN_dialogData.title == '新增水养池')"
          :row="MIXIN_dialogData.data"
          @closeDialog="changeDialog('', false, null)">
        </CRCRecordEdit>
        <CRCRecordDetail
          v-if="MIXIN_dialogData.isShow && MIXIN_dialogData.title == '详情'"
          :row="MIXIN_dialogData.data"
          @closeDialog="changeDialog('', false, null)">
        </CRCRecordDetail>
    </el-dialog>
  </div>
</template>

<script>
import { myMixin } from "@/components/Public/mixin";
import CRCRecordEdit from "@/components/CRCRecord/CRCRecordEdit";
import CRCRecordDetail from "@/components/CRCRecord/CRCRecordDetail";


export default {
  mixins: [myMixin],
  components: {
    CRCRecordEdit,
    CRCRecordDetail
  },
  data() {
    return {
      list: [
        {label: '1号水池', value: '1号水池'},
        {label: '2号水池', value: '1号水池'},
        {label: '3号水池', value: '1号水池'},
        {label: '4号水池', value: '1号水池'},
        {label: '5号水池', value: '1号水池'},
        {label: '6号水池', value: '1号水池'},
        {label: '7号水池', value: '1号水池'},
        {label: '8号水池', value: '1号水池'},
        {label: '9号水池', value: '1号水池'},
        {label: '10号水池', value: '1号水池'},
        {label: '11号水池', value: '1号水池'},
        {label: '12号水池', value: '1号水池'},
        {label: '13号水池', value: '1号水池'},
        {label: '14号水池', value: '1号水池'},
      ]
    }
  },
  methods: {
    changeDialog(title = '', isShow = false, data = null) {
      Object.assign(this.MIXIN_dialogData, { title, isShow, data });
    },
    // 删除
    del() {
      this.$confirm('此操作将删除已选择数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      });
    },
  }
}
</script>

<style lang="less">
.CRCRecord{
  width: 100%;
  display: flex;
  flex-flow: row wrap;

  .item {
    width: 212px;
    height: 402px;
    border: 1px solid #dcdbda;
    border-radius: 8px;
    box-sizing: border-box;
    margin: 0 15px 15px 0;

    .title{
      width: 100%;
      height: 40px;
      padding: 10px 0;
      box-sizing: border-box;
      text-align: center;
      font-family: MicrosoftYaHei;
      font-weight: 600;
    }

    .imgs{
      width: 100%;
      height: 120px;
      box-sizing: border-box;
      position: relative;
      cursor: pointer;

      >img{
        position: absolute;
        top: 10px;
        left: 55px;
        border-radius: 50%;
      }

      >p{
        width: 100%;
        height: 20px;
        position: absolute;
        top: 30px;
        color: red;
        margin: 0;
        text-align: center;
        z-index: 1000;
      }
    }

    .detail{
      width: 100%;
      height: 180px;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;
      align-items: center;
    }

    .bottomBtns{
      width: 100%;
      height: 60px;
      border-top: 1px solid #dcdbda;
      box-sizing: border-box;
      display: flex;
      flex-flow: row nowrap;
      cursor: pointer;

      >div{
        width: calc(50% - 1px);
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        &:first-child{
          width: calc(50% + 1px);
          border-right: 1px solid #dcdbda;
          box-sizing: border-box;
        }
      }
    }
  }

  .add{
    line-height: 402px;
    text-align: center;
    font-size: 150px!important;
    cursor: pointer;
  }
}
</style>