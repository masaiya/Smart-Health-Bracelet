<template>
  <div class="oldHealth" v-if="old_health">
    <div class="protectid">
      <p>被保护人id：{{ old_health.userid }}</p>
    </div>
    <div></div>
    <el-table
      :data="tableData"
      border
      style="width: 480px">
      <el-table-column
        prop="heartrate"
        label="心率"
        width="100">
      </el-table-column>
      <el-table-column
        prop="temperature"
        label="体温"
        width="100">
      </el-table-column>
      <el-table-column
        prop="steps"
        label="步数"
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="时间"
        width="180">
      </el-table-column>
    </el-table>
  </div>
  <div class="oldHealth" v-else>
    kkkk
  </div>
</template>

<script>
export default {
  name: 'oldHealth',
  data() {
    return {
      old_health: null,
      tableData: null
    }
  },
  components: {
  },
  computed:{
  },
  watch:{
  },
  created() {
    this.$axios({
      method: 'get',
      url: '/iot/sel_all_health',
      params: {
        userid: sessionStorage.user,
      },
      datatype: 'json',
      header: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      this.old_health = res.data;
      this.tableData = res.data;
    }).catch(err => {
      this.$message('服务器繁忙，请稍后再试！');
      console.log(err);
    })
  }
};
</script>
<style scoped lang="less">
.oldHealth {
  height: 1000px;
  .protectid {
    line-height: 50px;
  }
}
</style>
