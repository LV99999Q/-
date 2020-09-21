<template>
  <div class="GPQuality">
     <searchModular
      ref="searchModular"
      :searchInput="searchInput"
      @search="$getTableData">
    </searchModular>
    <div>

    </div>
    <div>

    </div>
  </div>
</template>

<script>
import { myMixin } from "@/components/Public/mixin";
import searchModular from "@/components/Public/searchModular";
export default {
  mixins: [myMixin],
  components: {
    searchModular,
  },
  data() {
    return {
      searchInput: [
        { value: "inputSearch", label: "管片流水号", pla: "请输入管片流水号" }
      ], // 输入框列表
    };
  },
}
</script>

<style lang="less">
.GPQuality{

}
</style>