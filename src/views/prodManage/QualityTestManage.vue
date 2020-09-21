<template>
  <div class="QualityTestManage">
    <el-calendar v-model="value">
      <template
        slot="dateCell"
        slot-scope="{date, data}">
        <div :class="data.isSelected ? 'is-selected' : ''" class="item" @click="changeDialog('添加质检报告', true, data.day)">
          {{ data.day.split('-').slice(1).join('-') }}
        </div>
      </template>
    </el-calendar>

    <el-dialog
    :title="MIXIN_dialogData.title"
    :visible.sync="MIXIN_dialogData.isShow"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :destroy-on-close="true"
    top="6vh"
    width="20%">
      <AddQualityTestManageInfo
        v-if="MIXIN_dialogData.isShow"
        :col="MIXIN_dialogData.data"
        @closeDialog="changeDialog('', false, null)">
      </AddQualityTestManageInfo>
    </el-dialog>
  </div>
</template>

<script>
import { myMixin } from "@/components/Public/mixin";
import AddQualityTestManageInfo from "@/components/QualityTestManage/AddQualityTestManageInfo";

export default {
  data() {
    return {
      value: new Date()
    }
  },
  mixins: [myMixin],
  components: {
    AddQualityTestManageInfo
  },
  methods: {
    changeDialog(title = '', isShow = false, data = null) {
      Object.assign(this.MIXIN_dialogData, { title, isShow, data });
    },
  }
}
</script>

<style lang="less">
.QualityTestManage{
  .item{
    width: 100%;
    height: 100%;
  }
}
</style>