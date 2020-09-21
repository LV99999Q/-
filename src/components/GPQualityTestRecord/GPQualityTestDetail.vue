<template>
  <div class="GPQualityTestDetail">
    <div :key="item.label" v-for="item in list" class="item">
      <div class="title">
        <p><i class="el-icon-star-on"></i></p>
        {{item.label}}
      </div>
      <div class="content">
        <div class="list">
          <div v-for="item1 in item.list" :key="item1.label" class="item1">
            <p>{{item1.key}}</p>
            <p>{{item1.val}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    }
  },
  created() {
    this.getListData();
  },
  props: {
    row: {
      type: Object,
      default: () => {return {};}
    }
  },
  methods: {
    // 获取列表
    getListData() {
      
    }
  }
}
</script>

<style lang="less">
.GPQualityTestDetail{
  width: 100%;
  height: 800px;
  overflow: hidden;
  overflow-y: scroll;

  .item{
    width: 100%;

    .title{
      height: 40px;
      font-size: 14px;
      padding: 0 0 20px;
      box-sizing: border-box;
      color: #333;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;

      >p {
        height: 100%;
        margin: 0;
        margin-right: 5px;
      }
    }

    .content{
      width: 100%;
      padding: 0 10px;
      box-sizing: border-box;

      .list{
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;

        .item1{
          width: 200px;
          height: 50px;
          background: #f9f9f9;
          border-right: 1px solid red;
          margin-bottom: 10px;

          >p {
            width: 100%;
            height: 50%;
            margin: 0;
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>