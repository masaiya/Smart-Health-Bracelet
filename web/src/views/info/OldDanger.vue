<template>
  <div class="oldDanger">
    <h3>历史危险信息</h3>
    <el-table
      class="table"
      :data="dangerData"
      border
      style="width: 540px">
      <el-table-column
        prop="time"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="reason"
        label="危险原因">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'oldDanger',
  data() {
    return {
      dangerData: []
    }
  },
  components: {
  },
  computed:{
  },
  watch:{
  },
  created() {
    this.old_health = sessionStorage.user,
    this.$axios({
      method: 'get',
      url: '/iot/sel_all_denger',
      params: {
        userid: sessionStorage.user,
      },
      datatype: 'json',
      header: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      this.dangerData = res.data;
      this.dangerData.map(function(i) {
        i.reason = "摔倒";
      })
    }).catch(err => {
      this.$message('服务器繁忙，请稍后再试！');
      console.log(err);
    })
  },
};
</script>
<style scoped lang="less">
.oldDanger {
  height: 1000px;
  .table {
    margin: 30px auto;
  }
}
</style>
