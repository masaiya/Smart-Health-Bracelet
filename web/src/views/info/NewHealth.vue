<template>
  <div class="newHealth">
    <el-table
      :data="tableData"
      border
      style="width: 120px">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'newHealth',
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
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
      url: '/iot/sel_new_health',
      params: {
        userid: 1,
      },
      datatype: 'json',
      header: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      console.log(res);
    })
  }
};
</script>
<style scoped lang="less">
.newHealth {
}
</style>
