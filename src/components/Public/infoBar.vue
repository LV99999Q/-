<template>
  <div class="infoBar">
    <div class="allInfo">
      <div v-for="item in infos" :key="item.value" class="info">
        <p>{{item.label}}：</p>
        <p>{{item.value}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    infos: {
      type: Array,
      default: () => {return []}
    }
  }
}
</script>

<style lang="less">
.infoBar{
  width: 100%;

  .allInfo{
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    align-content: center;

    .info{
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      margin-right: 30px;
    }
  }
}
</style>