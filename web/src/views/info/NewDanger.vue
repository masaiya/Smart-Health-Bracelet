<template>
  <div class="newDanger" v-if="new_danger">
    <div class="protectid">
      <p>被保护人id：{{ new_danger.userid }}</p>
      <p>时间：{{ new_danger.date }}</p>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 600px">
      <el-table-column
        prop="heartrate"
        label="心率"
        width="180">
      </el-table-column>
      <el-table-column
        prop="temperature"
        label="体温"
        width="180">
      </el-table-column>
      <el-table-column
        prop="steps"
        label="步数"
        width="180">
      </el-table-column>
    </el-table>
  </div>
  <div class="newDanger" v-else>
    kkkk
  </div>
</template>

<script>
export default {
  name: 'newDanger',
  data() {
    return {
      new_danger: null,
      tableData: []
    }
  },
  components: {
  },
  computed: {
  },
  watch: {
  },
  created() {
    this.$axios({
      method: 'get',
      url: '/iot/sel_new_denger',
      params: {
        userid: sessionStorage.user,
      },
      datatype: 'json',
      header: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      console.log(res);
      this.new_danger = res.data;
      this.tableData.push(this.new_danger);
    }).catch(err => {
      this.$message('服务器繁忙，请稍后再试！');
      console.log(err);
    }) 
  }
};
</script>
<style scoped lang="less">
.newDanger {
  height: 1000px;
  .protectid {
    line-height: 50px;
  }
}
</style>
